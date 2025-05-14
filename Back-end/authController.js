import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import { Strategy as LocalStrategy } from "passport-local";

// Configurazione di Passport per Google OAuth
import dotenv from 'dotenv';
dotenv.config();

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const backendUrl = process.env.BACKEND_URL;

if (!googleClientId || !googleClientSecret) {
  console.error('Google OAuth credentials:', { googleClientId, googleClientSecret });
}

// Configura Local Strategy
passport.use('local', new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: 'Email non trovata.' });
      }
      
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return done(null, false, { message: 'Password non valida.' });
      }
      
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

// Configura Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: `${backendUrl}/auth/google/callback`,
      passReqToCallback: true,
      scope: ['profile', 'email']
    },
    async (request, accessToken, refreshToken, profile, done) => {
        try {
          // Cerca l'utente con l'ID Google
          let user = await User.findOne({ googleId: profile.id });

          // Se l'utente non esiste, creane uno nuovo
          if (!user) {
            user = new User({
              googleId: profile.id,
              name: profile.given_name || profile.displayName.split(" ")[0],
              lastName:
                profile.family_name || profile.displayName.split(" ")[1] || "",
              email: profile.email,
              // Genera una password casuale per gli utenti Google
              password:
                Math.random().toString(36).slice(-8) +
                Math.random().toString(36).slice(-8),
              avatar:
                profile.picture ||
                `https://ui-avatars.com/api/?name=${profile.displayName}&background=random`,
            });
            await user.save();
          }

          return done(null, user);
        } catch (error) {
          return done(error, false);
        }
      },
    )
  );

// Serializzazione e deserializzazione dell'utente
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Genera token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Registrazione utente
export const register = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;

    // Verifica se l'utente esiste già
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "Utente già registrato con questa email." });
    }

    // Crea un nuovo utente
    const user = await User.create({
      name,
      lastName,
      email,
      password,
      avatar: `https://ui-avatars.com/api/?name=${name}+${lastName}&background=random`,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Dati utente non validi." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Errore del server.", error: error.message });
  }
};

// Login utente
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Trova l'utente per email
    const user = await User.findOne({ email });

    // Verifica se l'utente esiste e la password è corretta
    if (user && (await user.comparePassword(password))) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Email o password non validi." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Errore del server.", error: error.message });
  }
};

// Ottieni profilo utente
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Utente non trovato." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Errore del server.", error: error.message });
  }
};

// Inizia autenticazione Google
export const googleAuth = (req, res, next) => {
  if (!googleClientId || !googleClientSecret) {
    return res
      .status(503)
      .json({ message: "Autenticazione Google non configurata" });
  }
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })(req, res, next);
};

// Callback per autenticazione Google
export const googleAuthCallback = (req, res, next) => {
  if (!googleClientId || !googleClientSecret) {
    return res
      .status(503)
      .json({ message: "Autenticazione Google non configurata" });
  }

  passport.authenticate("google", (err, user) => {
    if (err) {
      return res.redirect(
        `${process.env.FRONTEND_URL || "http://localhost:5173"}/login?error=${err.message}`,
      );
    }
    if (!user) {
      return res.redirect(
        `${process.env.FRONTEND_URL || "http://localhost:5173"}/login?error=Autenticazione fallita`,
      );
    }

    // Genera token JWT
    const token = generateToken(user._id);

    // Reindirizza al frontend con il token
    res.redirect(
      `${process.env.FRONTEND_URL || "http://localhost:5173"}/login?token=${token}`,
    );
  })(req, res, next);
};
