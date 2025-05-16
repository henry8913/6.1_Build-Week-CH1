import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    qualification: {type: String, required: true },
    company: {type: String, required: true },
    startDate: {type: String, required: true },
    endDate: {type: String, required: true },
    location: {type: String, required: true },
    description: {type: String, required: true },
    image: { type: String, required: true },
    profile: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true
})

const experienceModel = mongoose.model('Experience', experienceSchema);
export default experienceModel;