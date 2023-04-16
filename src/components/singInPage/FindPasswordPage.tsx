import React, {useState, MouseEvent} from 'react';
import {Link, useNavigate} from "react-router-dom";
import useAsync from "../../hooks/useAsync";
import {findPasswordApi, sendCodeApi} from "../../api";
import LabelStyles from "../styles/Label.styles";
import InputStyles from "../styles/Input.styles";
import {ButtonStyles, MessageButtonStyle} from "../styles/Button.styles";
import ContainerStyles from "../styles/Container.styles";
import useTranslate from "../../hooks/useTranslate";
import { FindCode } from '../../types/types';

function CodeValidate({email} : {email : string}) {

    const [code, setCode] = useState("");
    const translate = useTranslate();
    const navigate = useNavigate();

    const handleCodeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value);
    }
    const handleOnClick = async () => {
        if (!code) return;
        const codeObj : FindCode = {
            code : code,
            email : email
        };
        // TODO 추후 추가
        // const response : ResponseInfo = await sendCodeApi(codeObj);
        // if (!response.success) {
        //     alert(translate("no match code message"));
        //     return;
        // }
        alert(translate("confirm"));
        navigate("reset");
    }

    return (
        <>
            <p>{translate("code send message")}</p>
            <InputStyles
                type="text"
                name="code"
                value={code}
                onChange={handleCodeInput}
                placeholder={"your code"}
            />
            <ButtonStyles onClick={handleOnClick}>{translate("confirm")}</ButtonStyles>
        </>
    )
}

function FindPasswordPage() {
    const [email, setEmail] = useState("");
    const [isSend, setIsSend] = useState(false);
    const [isLoading, loadingError, findPasswordAsync] = useAsync(findPasswordApi);
    const translate = useTranslate();

    const handleEmailInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handleSend = async () => {

        const regex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if (!regex.test(email)) {
            alert('이메일 형식이 올바르지 않습니다.');
            return;
        }

        // TODO 추후 추가.
        // const result = await findPasswordAsync({email : email});
        // if (!result) return ;

        console.log(`Link send to ${email}`);
        setIsSend(true);
    }

    return (
        <ContainerStyles>
            <h2>{translate("reset password")}</h2>
            <div>{translate("reset message")}</div>
            <LabelStyles>{translate("email")}</LabelStyles>
            <InputStyles
                className="input-field"
                type="text"
                name="email"
                value={email}
                onChange={handleEmailInput}
                placeholder="email"
            />
            {isSend && <CodeValidate email={email} />}
            <ButtonStyles disabled={isLoading} onClick={handleSend}>{translate("reset code button")}</ButtonStyles>
            {loadingError?.message ? <p>loadingError.message</p> : undefined}
            <Link to={"/login"}><MessageButtonStyle>{translate("back to sign in")}</MessageButtonStyle></Link>
        </ContainerStyles>
    );
}

export default FindPasswordPage;