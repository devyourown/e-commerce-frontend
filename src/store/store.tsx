import {configureStore, createSlice} from '@reduxjs/toolkit'

import items from "./itemSlice";
import userInfo from "./userSlice"
import {Gender} from "../api";

export type UserInfoType = {
    token? : string,
    id? : number,
    email? : string,
    username? : string,
    birth? : string,
    gender? : Gender,
    isSignIn : boolean
}

export type ItemType = {
    id  : number,
    title  : string,
    price  : number,
    content  : string,
    sizes : string[],
    colors : string[],
    category  : string,
    recommend  : number,
}

export type CartType = {
    id : number;
    quantity : number;
}

export type RootState = {
    items: ItemType[];
    cart: CartType[];
    userInfo : UserInfoType;
}

export default configureStore({
    reducer: {
        items : items.reducer,
        userInfo : userInfo.reducer,
    }
})
