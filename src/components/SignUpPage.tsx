import React, { useState } from "react";
import {signUpApi, singUpInfo} from "../api";
import useAsync from "../hooks/useAsync";


function SignUpPage() {
    const initState : singUpInfo = {
      email : "" ,
      username : "",
      password : "",
      confirmPassword  : "",
    }
	const [values, setValues] = useState(initState);

  const [isLoading, loadingError, signUpApiAsync] = useAsync(signUpApi);

  const handleValuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    // 회원가입 처리 로직을 작성합니다.
    event.preventDefault();

    await handleSignUpApi();
  };

  async function handleSignUpApi() {
    // email 값 확인하기
    const { email, password, confirmPassword } = values;

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
  }

  return (
    <form className="signup-form" onSubmit={handleSignUp}>
      <input
        className="input-field"
        type="text"
        name="email"
        value={values.email}
        onChange={handleValuesChange}
        placeholder="email"
      />
      <input
          className="input-field"
          type="text"
          name="username"
          value={values.username}
          onChange={handleValuesChange}
          placeholder="name"
      />
      <input
        className="input-field"
        type="password"
        name="password"
        value={values.password}
        onChange={handleValuesChange}
        placeholder="password"
      />
      <input
        className="input-field"
        type="password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleValuesChange}
        placeholder="confirm"
      />
      <button disabled={isLoading}>Sign Up</button>
      {loadingError?.message ? <p>loadingError.message</p> : undefined}
    </form>
  );
}

export default SignUpPage;
