import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    name: {type: String, required: true },
    title: {type: String, required: true },
    startDate: {type: String, required: true },
    endDate: {type: String, required: true },
    image: { type: String, required: true },
    profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
}, {
    timestamps: true
})

const educationModel = mongoose.model('Education', educationSchema);
export default educationModel;