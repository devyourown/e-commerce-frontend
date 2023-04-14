import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserInfoType} from "./store";

const initialState : UserInfoType = {isSignIn : false} ;

const userInfo = createSlice({
    name : "user info",
    initialState,
    reducers : {
        setUser(state, action : PayloadAction<UserInfoType>) {
            return action.payload;
        }
    }
})
export let {setUser} = userInfo.actions;

export default  userInfo