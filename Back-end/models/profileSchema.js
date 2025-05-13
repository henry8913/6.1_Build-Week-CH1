import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: false},
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true},
    avatar: { type: String, required: true },
    googleId: { type: String, unique: true, sparse: true },
}, {
    timestamps: true
})

// Cripta la password solo se modificata
profileSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next(); 
})

const profileModel = mongoose.model('Profile', profileSchema);
export default profileModel;