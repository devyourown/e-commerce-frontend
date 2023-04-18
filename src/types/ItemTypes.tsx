import {ItemType} from "./stateTypes";

export type ItemProps = {
    item : ItemType
}

export type ItemOrderType = {
    "item" : ItemType;
    "size" : string;
    "color" : string;
    "count" : number;
}