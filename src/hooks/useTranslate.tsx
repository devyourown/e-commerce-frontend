import React from 'react';
import {useLocale} from "../contexts/LocaleContext";

type LocaleDict = {
    [key: string]: {
        [key: string]: string;
    };
};

const dict: LocaleDict = {
    "en" : {
        "sign up" : "Sign Up",
        "login" : "Login",

        "user name" : "User Name",
        "confirm" : "OK",
        "edit" : "Edit",
        "cancel" : "Cancel",

        "email" : "Email",
        "password" : "Password",

        "confirm password" : "Confirm Password",
        "birth year" : "Birth Year",
        "birth month" : "Birth Month",
        "birth day" : "Birth Day",
        "gender" : "Gender",

        "find password" : "Forgot your password?",
    },
    "ko" : {
        "sign up" : "회원가입",
        "login" : "로그인",

        "user name" : "사용자 이름",
        "confirm" : "확인",
        "edit" : "수정",
        "cancel" : "취소",

        "email" : "이메일",
        "password" : "비밀번호",

        "confirm password" : "비밀번호 확인",
        "birth year" : "태어난 연도",
        "birth month" : "태어난 월",
        "birth day" : "태어난 일",
        "gender" : "성별",

        "find password" : "비밀번호를 잊어버리셨나요?",
    },
}

function useTranslate() {
    const locale : string = useLocale();
    const translate = (val : string) : string => dict[locale][val] || "";
    return translate;
}

export default useTranslate;