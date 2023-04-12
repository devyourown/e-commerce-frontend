//React Component Function

import React, {useState} from "react";
import {loginApi} from "../../api";
import useAsync from "../../hooks/useAsync";
import InputStyles from "../styles/Input.styles";
import ContainerStyles from "../styles/Container.styles";
import LabelStyles from "../styles/Label.styles";
import {ButtonStyles} from "../styles/Button.styles";
import useTranslate from "../../hooks/useTranslate";

function SignIn() {

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

        // 토근 로컬스토리지에 추가
        const token : string = result.token;
        localStorage.setItem("token", token);
    }

    const translate = useTranslate();

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