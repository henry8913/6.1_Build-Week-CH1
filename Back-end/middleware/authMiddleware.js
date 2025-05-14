import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';

// Middleware per verificare il token JWT
export const verifyToken = async (req, res, next) => {
  try {
    // Ottieni il token dall'header Authorization
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'Accesso negato. Token non fornito.' });
    }
    
    // Verifica il token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Trova l'utente associato al token
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'Utente non trovato.' });
    }
    
    // Aggiungi l'utente alla richiesta
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Token non valido.' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token scaduto.' });
    }
    res.status(500).json({ message: 'Errore del server.', error: error.message });
  }
};