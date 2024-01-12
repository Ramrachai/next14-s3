"use server"

import { revalidatePath } from "next/cache"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import sharp from "sharp"

const s3Client = new S3Client({
    region: process.env.NEXT_AWS_S3_REGION,
    credentials: {
        accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY
    },
})

async function uploadFiletoS3(file, fileName) {

    try {
        const fileBuffer = await sharp(file)
            .jpeg({ quality: 60 })
            .resize(400, 400, { fit: "cover" })
            .toBuffer()

        console.log("resize success=", fileBuffer)
        const params = {
            Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
            Body: fileBuffer,
            Key: fileName
        }
        const command = new PutObjectCommand(params)
        await s3Client.send(command)

    } catch (error) {
        console.error("Error during image processing:", error);
        throw error; 
    }

}

export async function uploadFile(prevState, formData) {

    try {
        const file = formData.get("file")
        if (file.size === 0) {
            return { status: "error", message: "Please select a file to upload" }
        }
        if (file.size >= 5000000) {
            return { status: "error", message: "Upload less than 5 Megabyte" }
        }
        if (file.type != "image/jpeg") {
            return { status: "error", message: "Only jpg/jpeg images are allowed" }
        }

        const fileBuffer = Buffer.from(await file.arrayBuffer())
        await uploadFiletoS3(fileBuffer, file.name)

        revalidatePath("/")
        return { status: "success", message: "File uploaded successfully" }

    } catch (error) {
        console.log("error", error)
        return { status: "error", message: "File Uploading failed" }
    }
}