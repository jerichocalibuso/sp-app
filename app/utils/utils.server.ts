import cloudinary from 'cloudinary'
import { json } from 'remix'
import type { Stream } from 'stream'

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})

async function uploadImage(fileStream: Stream) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      {
        folder: 'sp-app',
      },
      (error, result) => {
        if (error) {
          reject(error)
        }
        resolve(result)
      }
    )
    fileStream.pipe(uploadStream)
  })
}

async function deleteImage(publicId: string) {
  return new Promise((resolve, reject) => {
    const destroyedImageInfo = cloudinary.v2.uploader.destroy(
      publicId,
      (error, result) => {
        if (error) {
          reject(error)
        }
        console.log('image deleted successfully')
        resolve(result)
      }
    )
    return destroyedImageInfo
  })
}

const badRequest = (data: any) => json(data, { status: 400 })

export { uploadImage, deleteImage, badRequest }
