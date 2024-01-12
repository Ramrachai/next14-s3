import Image from 'next/image'
import FileUploadForm from "@/components/fileUpload"
import ImageGallery from '@/components/imageGallery'

export default function Home() {
  return (
    <>
      <p className='max-w-[600px] mx-auto p-4'> <b>About the app:</b> This is an file <em className='text-green-600'>UPLOAD-DOWNLOAD</em> application using next.js 14, server action, amazon s3 and Redux. When we click on Upload button,image will be uploaded to amazon s3 bucket using (server action + aws-sdk/client-s3) and upload state is updated using REDUX. if successful then image gallery component is re-rendered to show all the uploaded photos. Then if we click on the image - it will be again downloaded to your PC. </p>
        <h4 className="text-purple-700 text-center text-lg">Please upload less than 100KB file size</h4>
      <FileUploadForm />
      <ImageGallery />
    </>
  )
}
