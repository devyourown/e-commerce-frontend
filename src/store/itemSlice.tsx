import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from "../types/types";


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
        },

        orderItem : (state, action : PayloadAction<string>) => {
            let options = ["id", "title", "price-ascending", "price-descending", "recommend"];
            if (!options.includes(action.payload)) return ;
            if (action.payload === "price-ascending") {
                state.sort((a, b) => a["price"] < b["price"] ? -1 : a["price"] > b["price"] ? 1 : 0);
            } else if (action.payload === "price-descending") {
                state.sort((a, b) => b["price"] < a["price"] ? -1 : b["price"] > a["price"] ? 1 : 0);
            } else {
                let selectOption = action.payload as keyof ItemType;
                state.sort((a, b) => b[selectOption] < a[selectOption] ? -1 : b[selectOption] > a[selectOption] ? 1 : 0);
            }
        }
    }
})
export let {addItem, initItems, orderItem: sortItem} = items.actions;
export default items
