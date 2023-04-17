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
        "sign in" : "Sign in",

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

        "reset password" : "Reset password",
        "reset message" : "We will send you an email with a code to set up a new password",
        "code send message" : "Place input your code",
        "reset code button" : "Send reset code",
        "back to sign in" : "Back to Sign in",
        "no match code message" : "Code is not matched",

        "no matching title" : "No matching pages found",
        "no matching content" : "Please check URL or request again.",

        "welcome-msg" : "! Welcome to my shop",
    },
    "ko" : {
        "sign up" : "회원가입",
        "sign in" : "로그인",

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

        "reset password" : "비밀번호 재설정하기",
        "reset message" : "새로운 비밀번호를 설정할 수 있는 코드를 이메일로 전송해 드려요.",
        "code send message" : "이메일로 전송된 코드를 입력해주세요.",
        "reset code button" : "재설정 코드 전송하기",
        "back to sign in" : "로그인 페이지로 돌아가기",
        "no match code message" : "코드가 일치하지 않습니다.",

        "no matching title" : "존재하지 않는 페이지입니다.",
        "no matching content" : "URL 을 확인하거나 다시 요청해주십시오.",

        "welcome-msg" : "님! 반갑습니다.",
    },
}

let words = [
    ["enter new password", "Please Enter your new password.", "새 비밀번호를 입력하세요."],
    ["order recommend", "Recommended", "추천순"],
    ["order low price", "Price Low to High", "가격낮은순"],
    ["order high price", "Price High to Low", "가격높은순"],
    ["order new", "New in", "신상품순"],
    ["order", "Order", "주문"],
    ["color", "Color", "색상"],
]

function addMeg(){
    words.forEach(([key, en, ko]) => {
        dict["en"][key] = en;
        dict["ko"][key] = ko;
    })
}

function useTranslate() {
    const locale : string = useLocale();
    addMeg();
    const translate = (val : string) : string => dict[locale][val] || "";
    return translate;
}

export default useTranslate;