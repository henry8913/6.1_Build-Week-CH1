import profileModel from "../models/profileSchema.js";

//creazione nuovo profilo con controllo 
export const createProfile = async (req,res,next)=>{
    try {
    const {name, lastName, username, email, password, avatar, address, googleId} = req.body

    if(!name || !lastName || !username || !email || !avatar || !password){
        return res.status(400).json({message: "Campi obbligatori"})
    }

    const extistingProfile = await profileModel.findOne({
        $or:[
            {username},
            {email},
            googleId ? { googleId } : null
        ].filter(Boolean)
    })

    if(extistingProfile){
        return res.status(400).json({message: "Profilo già esistente"})
    }

    const newProfile = new profileModel({
        ...req.body,
        ...(googleId && {googleId})
    })

    const saveProfile = await  newProfile.save()

    res.status(200).json(saveProfile)

    } catch (error) {
        next(error)
    }
}