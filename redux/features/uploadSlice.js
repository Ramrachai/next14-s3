import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    status: 'idle',
} 

const uploadSlice = createSlice({
    name: 'upload',
    initialState: initialState,

    reducers: {
        success : (state, action) => {
            state.status = "success"
        }, 
        failed : (state, action) => {
            state.status = "failed"
        }
    }
})

export const { success, failed } = uploadSlice.actions;
export default uploadSlice.reducer;