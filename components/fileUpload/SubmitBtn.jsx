"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'
import { useDispatch } from 'react-redux'
import { failed } from "@/redux/features/uploadSlice"

const SubmitBtn = () => {
    const formStatus = useFormStatus()
    const dispatch = useDispatch()

    function handleClick(){
        
        dispatch(failed())
    }

    return (
        <button onClick={handleClick} type="submit" className="mt-4  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-auto block m-auto">{formStatus.pending ? "Uploading..." : "Upload"}</button>
    )
}

export default SubmitBtn