"use client"
import React, {useRef} from 'react'
import { useFormState } from 'react-dom'
import { uploadFile } from './upload.action'
import SubmitBtn from './SubmitBtn'
import { useDispatch } from 'react-redux'
import { success, failed } from "@/redux/features/uploadSlice"


const Index = () => {
    const initialState = {
        message: null
    }

    const dispatch = useDispatch()

    const [state, formAction] = useFormState(uploadFile, initialState)
    const formRef = useRef(null)

    if (state.status === "success") {
        formRef.current.reset()
        dispatch(success())
    } else {
        dispatch(failed())
    }

    return (
        <form className='p-6 max-w-[400px] mx-auto' action={formAction} ref={formRef}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Upload Image files</label>
            <input accept='image/jpeg' className=" block w-full text-sm text-gray-900 border rounded border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file"  name='file'/>
            <SubmitBtn />
            {state.status === "success" && <p className="text-green-500 text-center">{state.message}</p>}
            {state.status === "error" && <p className="text-red-500 text-center">{state.message}</p>}
        </form>
    )
}

export default Index