import axios, { AxiosResponse } from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


const BASE_URL = 'http://localhost:3000';

export type LoginInfo = {
    email: string;
    password: string;
}

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

export type FindCode = {
    code : string,
}

export type ResponseInfo = {
    success : boolean,
    status? : number,
}


export async function loginApi(loginInfo : LoginInfo) : Promise<AxiosResponse>{
    try {
        const response: AxiosResponse = await axios.post(`${BASE_URL}/login`, loginInfo);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function signUpApi(singUpInfo : singUpInfo) {
	try {
        const response: AxiosResponse = await axios.post(`${BASE_URL}/users`, singUpInfo);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export type FindPasswordInfo = {
    email : string,
}

export async function findPasswordApi(findPasswordInfo : FindPasswordInfo) {
    try {
        const response: AxiosResponse = await axios.post(`${BASE_URL}/find`, findPasswordInfo); // TODO api 수정 필요
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function sendCodeApi(code : FindCode) {
    try {
        const response : ResponseInfo = await axios.post(`${BASE_URL}/find/code`, code);
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export async function getItemsApi() {
    try {
        const response = await axios.get(`http://localhost:3000/items`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}