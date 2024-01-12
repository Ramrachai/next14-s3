import { configureStore } from "@reduxjs/toolkit";
import uploadSlice from "@/redux/features/uploadSlice"

export const store = configureStore({
    reducer: {
        upload: uploadSlice
    }
})