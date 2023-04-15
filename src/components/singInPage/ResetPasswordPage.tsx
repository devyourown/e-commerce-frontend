import React, {useState} from 'react';
import InputStyles from "../styles/Input.styles";
import LabelStyles from "../styles/Label.styles";
import useTranslate from "../../hooks/useTranslate";
import ContainerStyles from "../styles/Container.styles";
import {ButtonStyles} from "../styles/Button.styles";

function ResetPasswordPage() {
    const [value, setValue] = useState({
        password : "",
        confirmPassword : "",
    });
    const translate = useTranslate();

    const handleValuesChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setValue(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (value.password.length < 3) {
            alert("비밀번호는 3자 이상이어야 합니다.");
            return;
        }

        if (value.password !== value.confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        alert("비밀번호 변경")
        // TODO 추후 설정.
    }

    return (
        <ContainerStyles>
            <form onSubmit={handleSubmit}>
                <h2>Reset your new password</h2>
                <div>please enter new password.</div>
                <LabelStyles>{translate("password")}</LabelStyles>
                <InputStyles
                    className="input-field"
                    type="password"
                    name="password"
                    value={value.password}
                    onChange={handleValuesChange}
                    placeholder="password"
                />
                <LabelStyles>{translate("confirm password")}</LabelStyles>
                <InputStyles
                    className="input-field"
                    type="password"
                    name="confirmPassword"
                    value={value.confirmPassword}
                    onChange={handleValuesChange}
                    placeholder="password"
                />
                <ButtonStyles>{translate("confirm")}</ButtonStyles>
            </form>
        </ContainerStyles>
    );
}

export default ResetPasswordPage;