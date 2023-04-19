import {ItemType} from "./stateTypes";

export type ItemProps = {
    item : ItemType
}

export type ItemOrderType = {
    "id" : number;
    "item" : ItemType;
    "size" : string;
    "color" : string;
    "count" : number;
}