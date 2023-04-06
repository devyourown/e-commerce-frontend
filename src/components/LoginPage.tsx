import React, { useState, useEffect } from 'react';

import './LoginPage.css';
import Login from "./Login";
import {useNavigate} from "react-router-dom";



function LoginPage() {
	const navigate = useNavigate();
  const handlePasswordFind = () => {
	navigate("/findPassword")
  }

  const handleSignIn = () => {
	  navigate("/signUp"); //
  }


  return (
    <div className="login-container" >
      <h2>Login</h2>
			<Login />
			<div className='button-field'>
				<button className="password-find" onClick={handlePasswordFind}>
				비밀번호를 잊어버리셨나요?
				</button>

				<button className="sign-in-button" onClick={handleSignIn}>
				회원가입
				</button>
			</div>
    </div>
  );
}

export default LoginPage;
