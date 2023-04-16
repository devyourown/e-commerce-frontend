import {configureStore, createSlice} from '@reduxjs/toolkit'

import items from "./itemSlice";
import userInfo from "./userSlice"

export default configureStore({
    reducer: {
        items : items.reducer,
        userInfo : userInfo.reducer,
    }
})
