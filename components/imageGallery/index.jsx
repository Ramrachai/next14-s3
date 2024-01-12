"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { getAllfilesFromS3 } from "@/components/imageGallery/getAllFiles.action"
import { useSelector, useDispatch } from 'react-redux'
import { success, failed } from "@/redux/features/uploadSlice"
import {saveAs} from 'file-saver'


const ImageGallary = () => {

    const uploadStatus = useSelector((state) => state.upload.status)
    console.log("---upload status--", uploadStatus)

    const [files, setFiles] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const api = "https://my-nextjs-files.s3.ap-south-1.amazonaws.com/"

    useEffect(() => {
        getAllfilesFromS3().then(data => {
            setFiles(data.message)
            setLoading(false)
            setError(null)
        }).catch(err => {
            setLoading(false)
            setError(err)
        })

        
    }, [uploadStatus])



    // download the image from link when clicked on the image
    function handleClick(link){ 
        let src = link.replace(/ /g, "+")
        saveAs(src, "image.jpg")

    }


    return (
        <div className="container mx-auto px-4 max-w-[800px]">
            <h2 className='text-lg text-center p-6'>Your uploaded Images are here directly coming from amazon s3 bucket</h2>

            <div className="flex justify-center gap-4 flex-wrap">
                {
                    files?.map((file, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
                                <Image 
                                    width={200} 
                                    height={200} 
                                    className="h-auto max-w-full rounded-lg" 
                                    src={api + file.Key} 
                                    alt="" 
                                    onClick={()=> handleClick(api+file.Key)} 
                                />
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default ImageGallary