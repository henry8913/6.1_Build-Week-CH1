
import express from 'express'
import Experience from '../models/experienceSchema.js'
import { verifyToken } from '../middleware/authMiddleware.js'
import { uploadImage } from '../middleware/upload.js'

const router = express.Router()

// GET /experiences/:userId - Ottiene tutte le esperienze di un utente
router.get('/experiences/:userId', async (req, res, next) => {
    try {
        const experiences = await Experience.find({ profile: req.params.userId }).populate('profile', 'name lastName avatar')
        res.json(experiences)
    } catch (error) {
        next(error)
    }
})

// GET /me/experiences - Ottiene le esperienze dell'utente loggato
router.get('/me/experiences', verifyToken, async (req, res, next) => {
    try {
        const experiences = await Experience.find({ profile: req.user._id }).populate('profile', 'name lastName avatar')
        res.json(experiences)
    } catch (error) {
        next(error)
    }
})

// POST /experiences - Crea una nuova esperienza
router.post('/experiences', verifyToken, async (req, res, next) => {
    try {
        const experience = new Experience({
            ...req.body,
            profile: req.user._id
        })
        const savedExperience = await experience.save()
        res.status(201).json(savedExperience)
    } catch (error) {
        next(error)
    }
})

// PUT /experiences/:id/image - Carica immagine per un'esperienza
router.put('/experiences/:id/image', verifyToken, uploadImage.single('image'), async (req, res, next) => {
    try {
        const experience = await Experience.findById(req.params.id)
        if (!experience) {
            return res.status(404).json({ message: "Esperienza non trovata" })
        }
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "Non autenticato" })
        }
        if (experience.profile.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Non autorizzato" })
        }
        if (!req.file) {
            return res.status(400).json({ message: "Nessuna immagine caricata" })
        }
        experience.image = req.file.path
        const updatedExperience = await experience.save()
        res.json(updatedExperience)
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({ message: error.message })
    }
})

// PUT /experiences/:id - Modifica un'esperienza
router.put('/experiences/:id', verifyToken, async (req, res, next) => {
    try {
        const experience = await Experience.findById(req.params.id)
        if (!experience) {
            return res.status(404).json({ message: "Esperienza non trovata" })
        }
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "Non autenticato" })
        }
        if (experience.profile.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Non autorizzato" })
        }
        const updatedExperience = await Experience.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(updatedExperience)
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({ message: error.message })
    }
})

// DELETE /experiences/:id - Elimina un'esperienza
router.delete('/experiences/:id', verifyToken, async (req, res, next) => {
    try {
        const experience = await Experience.findById(req.params.id)
        if (!experience) {
            return res.status(404).json({ message: "Esperienza non trovata" })
        }
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "Non autenticato" })
        }
        if (experience.profile.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Non autorizzato" })
        }
        await Experience.findByIdAndDelete(req.params.id)
        res.status(204).end()
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({ message: error.message })
    }
})

export default router
