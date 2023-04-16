import { Gender } from "./types";

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

export type UserInfoType = {
    token? : string,
    id? : number,
    email? : string,
    username? : string,
    birth? : string,
    gender? : Gender,
    isSignIn : boolean
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