import axios, { AxiosResponse } from "axios";
import {Simulate} from "react-dom/test-utils";


const BASE_URL = 'http://localhost:3000';

export type SingInInfo = {
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
    email : string,
}

export type ResponseInfo = {
    success : boolean,
    status? : number,
}


export async function singInApi(signInInfo : SingInInfo) : Promise<AxiosResponse>{
    try {
        // const response: AxiosResponse = await axios.post(`${BASE_URL}/users`, signInInfo);
        const response: AxiosResponse = await axios.get(`${BASE_URL}/users`); // 테스트용
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function signUpApi(singUpInfo : singUpInfo) {
	try {
        const response: AxiosResponse = await axios.post(`${BASE_URL}/users/new`, singUpInfo);
        return response.data;
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
        const response: AxiosResponse = await axios.post(`${BASE_URL}/users/find/password`, findPasswordInfo); // TODO api 수정 필요
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function sendCodeApi(info : FindCode) {
    try {
        const response : AxiosResponse = await axios.post(`${BASE_URL}/users/find/password/code`, info);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getItemsApi() {
    try {
        const response = await axios.get(`${BASE_URL}/items`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getItemApi(id : string) {
    try {
        const response = await axios.get(`${BASE_URL}/items/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function verifyTokenApi(token : string, url : string) {
    try {
        const response = await axios.post(`${BASE_URL}/auth/${url}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function resetPasswordApi() {

}