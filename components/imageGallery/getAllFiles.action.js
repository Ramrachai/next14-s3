"use server"

import { ListObjectsCommand, S3Client } from "@aws-sdk/client-s3"
import { revalidatePath } from "next/cache"

const s3Client = new S3Client({
    region: process.env.NEXT_AWS_S3_REGION,
    credentials: {
        accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY
    },
})

export async function getAllfilesFromS3() {
    const params = {
        Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME
    }
    const command = new ListObjectsCommand(params)
    const data = await s3Client.send(command)
    console.log("===get all files from s3===", data.Contents)
    revalidatePath("/")
    return {
        message: data.Contents,
    }
}