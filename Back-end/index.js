
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2025;

// Connessione a MongoDB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connessione a MongoDB stabilita'))
  .catch(err => console.error('Errore di connessione a MongoDB:', err));

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));
app.use(passport.initialize());
app.use(passport.session());

// Info route
app.get("/info", (req, res) => {
  res.status(200).send("Benvenuto! Il progetto è attualmente in fase di sviluppo. Presto sarà disponibile online con tutte le sue funzionalità.");
});

// Rotte di autenticazione
app.use('/auth', authRoutes);

//Rotte per la pagina profilo
app.use('/api', profileRoutes)

// Avvio del server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});