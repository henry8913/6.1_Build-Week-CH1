
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2025;

// Connessione a MongoDB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connessione a MongoDB stabilita'))
  .catch(err => console.error('Errore di connessione a MongoDB:', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Info route
app.get("/info", (req, res) => {
  res.status(200).send("Benvenuto! Il progetto è attualmente in fase di sviluppo. Presto sarà disponibile online con tutte le sue funzionalità.");
});

// Rotte di autenticazione
app.use('/auth', authRoutes);

// Avvio del server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});