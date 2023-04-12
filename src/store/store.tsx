import {configureStore, createSlice} from '@reduxjs/toolkit'

import items from "./itemSlice";

export type ItemType = {
    id : number,
    title : string,
    price : number,
    content : string,
    category : string,
}

export type CartType = {
    id: number;
    quantity: number;
}

export type RootState = {
    items: ItemType[];
    cart: CartType[];
}

export default configureStore({
    reducer: {
        items : items.reducer
    }
})
