//React Component Function

import React, {useState} from "react";
import {loginApi} from "../api";
import useAsync from "../hooks/useAsync";
import InputStyles from "./Input.styles";
import ContainerStyles from "./Container.styles";
import LabelStyles from "./Label.styles";
import {ButtonStyles} from "./Button.styles";

function Login() {

    const [values, setValues] = useState({
        email : "",
        password : "",
    });

    const [isLoading, loadingError, loginApiAsync] = useAsync(loginApi);


    const handleValuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setValues(prevState => (
            {...prevState, [name]: value}
        ))
    }
    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // 로그인 처리 로직을 작성합니다.
        event.preventDefault();

        await handleLogin();
    }
    async function handleLogin () {
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
    }


    return (
        <form className="login-form" onSubmit={handleOnSubmit}>
            <LabelStyles>email</LabelStyles>
            <InputStyles
                className="input-field"
                type="text"
                name="email"
                value={values.email}
                onChange={handleValuesChange}
                placeholder="email"
            />
            <LabelStyles>password</LabelStyles>
            <InputStyles
                className="input-field"
                type="password"
                name="password"
                value={values.password}
                onChange={handleValuesChange}
                placeholder="password"
            />
            <ButtonStyles disabled={isLoading} className="login-button">
                로그인
            </ButtonStyles>
            {loadingError?.message ? <p>loadingError.message</p> : undefined}
        </form>
    )
}

export default Login;