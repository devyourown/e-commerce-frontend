import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { UserInfoType } from "../types/types";
import {SetOrderCountType} from "../types/stateTypes";
import {ItemOrderType} from "../types/ItemTypes";

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
        },
        addOrder(state, action : PayloadAction<ItemOrderType>) {
            const newOrder = action.payload;

            const sameOrder = state.cart.find(order =>
                order.item.id === newOrder.item.id &&
                order.color===newOrder.color &&
                order.size === newOrder.size);
            if (sameOrder) {
                sameOrder.count++;
                return state;
            }

            // function getNewId () {
            //     while (true) {
            //         const id = Math.floor(Math.random() * 9000) + 1000;
            //         if (!state.cart.map(order => order.id).includes(id)) {
            //             return id;
            //         }
            //     }
            // }
            //
            // if (newOrder.id === -1) newOrder.id = getNewId();
            state.cart.push(newOrder);
        }
    }
})
export let {setUser, setOrderCount, deleteOrder, addOrder} = userInfo.actions;

export default  userInfo