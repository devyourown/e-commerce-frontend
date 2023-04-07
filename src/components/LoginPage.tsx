import React, { useState, useEffect } from 'react';

// import './LoginPage.css';
import Login from "./Login";
import {useNavigate} from "react-router-dom";
import ContainerStyles from "./Container.styles";
import {FindPasswordButtonsStyles, SingInButtonStyles} from "./Button.styles";


function LoginPage() {
	const navigate = useNavigate();
  const handlePasswordFind = () => {
	navigate("/findPassword")
  }

  const handleSignIn = () => {
	  navigate("/signUp"); //
  }


  return (
	  <ContainerStyles>
		<div className="login-container" >
		  <h2>Login</h2>
				<Login />
				<div className='button-field' style={{display:"flex", justifyContent: "space-between"}}>
					<FindPasswordButtonsStyles className="find-password" onClick={handlePasswordFind}>
					비밀번호를 잊어버리셨나요?
					</FindPasswordButtonsStyles>

					<SingInButtonStyles className="sign-in-button" onClick={handleSignIn}>
					회원가입
					</SingInButtonStyles>
				</div>
		</div>
	  </ContainerStyles>
  );
}

export default LoginPage;
