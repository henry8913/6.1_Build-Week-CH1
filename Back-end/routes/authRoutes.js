import express from 'express';
import { register, login, getProfile, googleAuth, googleAuthCallback } from '../controllers/authController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Rotte per autenticazione standard
router.post('/register', register);
router.post('/login', login);
router.get('/profile', verifyToken, getProfile);

// Rotte per autenticazione Google
router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback);

export default router;