import express from 'express'
import User from '../models/userSchema.js'
import { verifyToken } from '../middleware/authMiddleware.js'
import { uploadImage } from '../middleware/upload.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

//endPoint recupero di tutti i profili
router.get('/profile', async(req, res, next)=>{
    try {
        const users = await User.find().select('-password')
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
})

//endPoint recupero del proprio profilo
router.get('/me', verifyToken, async(req,res)=>{
    res.json(req.user)
})

//endPoint creazione nuovo profilo/utente
router.post('/profile', async (req, res, next) => {
    try {
        const { name, lastName, email, password, avatar } = req.body

        if(!name || !lastName || !email || !password) {
            return res.status(400).json({message: "Campi obbligatori mancanti"})
        }

        const existingUser = await User.findOne({ email })
        if(existingUser) {
            return res.status(400).json({message: "Email già registrata"})
        }

        const user = new User({
            name,
            lastName,
            email,
            password,
            avatar: avatar || `https://ui-avatars.com/api/?name=${name}+${lastName}&background=random`
        })

        const savedUser = await user.save()
        const token = generateToken(savedUser._id)

        res.status(200).json({ user: savedUser, token })
    } catch (error) {
        next(error)
    }
})

//endPoint caricamento immagine profilo
router.put('/:id/image', verifyToken, uploadImage.single('avatar'), async(req, res) => {
    try {
        if(req.user._id.toString() !== req.params.id) {
            return res.status(403).json({message: "Non puoi modificare altri profili"})
        }
        const profile = await User.findByIdAndUpdate(
            req.params.id,
            { avatar: req.file.path },
            { new: true }
        )
        res.json(profile)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//endPoint modifica profilo
router.put('/image/:id', verifyToken, uploadImage.single('avatar'), async(req, res) => {
    try {
        if(req.user._id.toString() !== req.params.id) {
            return res.status(403).json({message: "Non puoi modificare altri profili"})
        }
        const profile = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        const token = generateToken(profile._id)
        res.json({ profile, token })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

export default router