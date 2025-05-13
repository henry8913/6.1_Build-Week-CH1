import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
})

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'linkedin-clone',
    allowed_formats: ['jpg', 'png']
  }
})

export const uploadImage = multer({ storage })
