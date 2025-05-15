import express from 'express'
import profileModel from '../models/profileSchema.js'
import { verifyToken } from '../middleware/authMiddleware.js'
import { createProfile } from '../controllers/profileController.js'


const router = express.Router()


//endPoint recupero di tutti i profili
router.get('/profile', async(req, res, next)=>{
    try {
        const profile = await profileModel.find()
        res.status(200).json(profile)


    } catch (error) {
        next(error)
    }
})

//endPoint recupero del proprio profilo
router.get('/me', verifyToken, async(req,res)=>{
    res.json(req.user)
} )

//endPoint creazione nuovo profilo
router.post('/profile', createProfile)

export default router