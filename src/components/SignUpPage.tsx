import React, {useState} from "react";
import {Gender, signUpApi, singUpInfo} from "../api";
import useAsync from "../hooks/useAsync";
import InputStyles from "./Input.styles";
import LabelStyles from "./Label.styles";
import {ButtonStyles} from "./Button.styles";
import SelectStyles from "./Select.styles";
import ContainerStyles from "./Container.styles";


function SignUpPage() {
    const initState: singUpInfo = {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        birth: 0,
        gender: Gender.Male,
    }
    const [values, setValues] = useState(initState);

    const [isLoading, loadingError, signUpApiAsync] = useAsync(signUpApi);

    const handleValuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setValues((prevState) => ({...prevState, [name]: value}));
    };

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        // 회원가입 처리 로직을 작성합니다.
        event.preventDefault();

        await handleSignUpApi();
    };

    async function handleSignUpApi() {
        // email 값 확인하기
        const {email, password, confirmPassword} = values;

        const regex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if (!regex.test(email)) {
            alert("이메일 형식이 올바르지 않습니다.");
            return;
        }

        if (password.length < 3) {
            alert("비밀번호는 3자 이상이어야 합니다.");
            return;
        }

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        // 회원가입 api 요청 보내기.
        const result = await signUpApiAsync(values);
        if (!result) return;
        console.log("Sing up done.");
        console.log(`values : ${JSON.stringify(values)}`)
    }




    return (
        <ContainerStyles>
            <h2>Sign Up</h2>
            <form className="signup-form" onSubmit={handleSignUp}>
                <LabelStyles>email</LabelStyles>
                <InputStyles
                    className="input-field"
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleValuesChange}
                    placeholder="test@test.com"
                />
                <LabelStyles>user name</LabelStyles>
                <InputStyles
                    className="input-field"
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleValuesChange}
                    placeholder="choi wonjun"
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
                <LabelStyles>confirm password</LabelStyles>
                <InputStyles
                    className="input-field"
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleValuesChange}
                    placeholder="password"
                />
                <div className={"birth-input"}>
                    <LabelStyles htmlFor="birth_year">Birth Year:</LabelStyles>
                    <InputStyles type="number" id="birth_year" name="birth_year" placeholder="YYYY" min="1900" max="9999" required
                           onChange={handleValuesChange}/>

                    <LabelStyles htmlFor="birth_month">Birth Month:</LabelStyles>
                    <InputStyles type="number" id="birth_month" name="birth_month" placeholder="MM" min="1" max="12" required
                           onChange={handleValuesChange}/>

                    <LabelStyles htmlFor="birth_day">Birth Day:</LabelStyles>
                    <InputStyles type="number" id="birth_day" name="birth_day" placeholder="DD" min="1" max="31" required
                           onChange={handleValuesChange}/>
                </div>
                <div className={"gender-input"} onChange={handleValuesChange}>
                    <LabelStyles htmlFor="gender">Gender:</LabelStyles>
                    <SelectStyles id="gender" name="gender">
                        <option value={Gender.Male}>Male</option>
                        <option value={Gender.Female}>Female</option>
                        <option value={Gender.Other}>Other</option>
                    </SelectStyles>
                </div>
                <ButtonStyles disabled={isLoading}>Sign Up</ButtonStyles>
                {loadingError?.message ? <p>loadingError.message</p> : undefined}
            </form>
        </ContainerStyles>
    );
}

export default SignUpPage;
