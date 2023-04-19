import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { UserInfoType } from "../types/types";

const initialState : UserInfoType = {isSignIn : false, cart : []} ;

const userInfo = createSlice({
    name : "user info",
    initialState,
    reducers : {
        setUser(state, action : PayloadAction<UserInfoType>) {
            return action.payload;
        },
        addOrderCount(state, action : PayloadAction<number>) {
            const orderId = action.payload;
            
        }
    }
})
export let {setUser} = userInfo.actions;

export default  userInfo