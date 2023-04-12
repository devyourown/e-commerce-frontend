import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {ItemType} from "./store";


const initialState : ItemType[] = [];

const items = createSlice({
    name : "items",
    initialState,
    reducers : {
        addItem : (state, action : PayloadAction<ItemType>) => {
            const newItem = action.payload;
            if (!state.find(item => item.id === newItem.id)) {
                state.push(newItem);
            }
        },
        initItems : (state, action : PayloadAction<ItemType[]>) => {
            return action.payload;
        }
    }
})
export let {addItem, initItems} = items.actions;
export default items
