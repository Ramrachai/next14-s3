# Live Link: [https://download-woad-one.vercel.app/]

## About the App: 
This is an file UPLOAD-DOWNLOAD application using next.js 14, server action, amazon s3 and Redux. When we click on Upload button,image will be resized to 300x300px then  uploaded to amazon s3 bucket using (server action + aws-sdk/client-s3) and upload state is updated using REDUX. if successful then image gallery component is re-rendered to show all the uploaded photos. Then if we click on the image - it will be again downloaded to your PC.


### .env.local file sample: 
NEXT_AWS_S3_REGION=""  
NEXT_AWS_S3_ACCESS_KEY_ID=""  
NEXT_AWS_S3_SECRET_ACCESS_KEY=""  
NEXT_AWS_S3_BUCKET_NAME=""  


## installation: 
- git clone https://github.com/Ramrachai/next14-s3.git
- create .env.local file with correct values 
- npm install 
- npm run dev 

## Screenshot 
![image](https://github.com/Ramrachai/next14-s3/assets/47687976/c26d6b2c-3177-4b5f-8620-815bec996af5)
