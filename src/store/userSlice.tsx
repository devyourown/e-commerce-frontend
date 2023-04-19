import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { UserInfoType } from "../types/types";
import {SetOrderCountType} from "../types/stateTypes";

const initialState : UserInfoType = {isSignIn : false, cart : []} ;

const userInfo = createSlice({
    name : "user info",
    initialState,
    reducers : {
        setUser(state, action : PayloadAction<UserInfoType>) {
            return action.payload;
        },
        setOrderCount(state, action : PayloadAction<SetOrderCountType>) {
            const {id, count} = action.payload;
            const find = state.cart.find(order => order.id === id);
            if (find) {
                find.count = count;
            }
        },
        deleteOrder(state, action : PayloadAction<number>) {
            const id = action.payload;
            const filter = state.cart.filter(order => order.id !== id);
            return {...state, cart : filter};
        }
    }
})
export let {setUser, setOrderCount, deleteOrder} = userInfo.actions;

export default  userInfo