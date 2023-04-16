//React Component Function

import React, {useState} from "react";
import {singInApi} from "../../api";
import useAsync from "../../hooks/useAsync";
import InputStyles from "../styles/Input.styles";
import LabelStyles from "../styles/Label.styles";
import {ButtonStyles} from "../styles/Button.styles";
import useTranslate from "../../hooks/useTranslate";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/userSlice";
import { UserInfoType } from "../../types/types";
import axios from "axios";

function SignIn() {

    const [values, setValues] = useState({
        email : "",
        password : "",
    });
    const [isLoading, loadingError, loginApiAsync] = useAsync(singInApi);
    const navigate = useNavigate();
    const translate = useTranslate();
    const dispatch = useDispatch();


    const handleValuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setValues(prevState => (
            {...prevState, [name]: value}
        ))
    }
    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // 로그인 처리 로직을 작성합니다.
        event.preventDefault();

        const result = await handleLoginRequest();

        // 토근 로컬스토리지에 추가.
        const token : string = result.token;
        localStorage.setItem("token", token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // 유저 정보 리덕스에 추가.
        const userInfo : UserInfoType = result;
        dispatch(setUser(userInfo));


        // 이전 화면으로 이동.
        navigate(-1);
    }
    async function handleLoginRequest () {
        // email 값 확인하기
        const {email, password} = values;

        const regex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if (!regex.test(email)) {
            alert('이메일 형식이 올바르지 않습니다.');
            return;
        }

        if (password.length < 3) {
            alert('비밀번호는 3자 이상이어야 합니다.');
            return;
        }

        // 로그인 api 요청 보내기.
        const result = await loginApiAsync(values);
        if (!result) return;
        return result;
    }


    return (
        <form className="login-form" onSubmit={handleOnSubmit}>
            <LabelStyles>{translate("email")}</LabelStyles>
            <InputStyles
                className="input-field"
                type="text"
                name="email"
                value={values.email}
                onChange={handleValuesChange}
                placeholder="email"
            />
            <LabelStyles>{translate("password")}</LabelStyles>
            <InputStyles
                className="input-field"
                type="password"
                name="password"
                value={values.password}
                onChange={handleValuesChange}
                placeholder="password"
            />
            <ButtonStyles disabled={isLoading} className="login-button">
                {translate("sign in")}
            </ButtonStyles>
            {loadingError?.message ? <p>loadingError.message</p> : undefined}
        </form>
    )
}

export default SignIn;