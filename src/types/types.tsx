export enum Gender {
    Male,
    Female,
    Other,
}



export type singUpInfo = {
    email : string,
    username : string,
    password : string,
    confirmPassword : string,
    birth : string,
    gender : Gender,
}

export type {FindCode, ResponseInfo} from "./apiTypes";
export type {SingInInfo, FindPasswordInfo} from "./signInTypes"
export type {ItemProps} from "./ItemTypes"
export type {ItemType, CartType, UserInfoType, RootState} from "./stateTypes"
