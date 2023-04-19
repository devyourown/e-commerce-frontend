import { Gender } from "./types";
import {ItemOrderType} from "./ItemTypes";

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
    isSignIn : boolean,
    cart : ItemOrderType[],
}

export type RootState = {
    items: ItemType[];
    userInfo : UserInfoType;
}