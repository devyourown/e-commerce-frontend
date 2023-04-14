import React, { useState, useEffect } from 'react';

// import './SignInPage.css';
import SignIn from "./SignIn";
import {useNavigate} from "react-router-dom";
import ContainerStyles from "../styles/Container.styles";
import {MessageButtonStyle, SingInButtonStyles} from "../styles/Button.styles";
import useTranslate from "../../hooks/useTranslate";
import useFade from "../../hooks/useFade";


function SignInPage() {
	const {fade} = useFade("");
	const navigate = useNavigate();
  const handlePasswordFind = () => {
	navigate("/findPassword")
  }

  const handleSignIn = () => {
	  navigate("/signUp"); //
  }

  const translate = useTranslate();

  return (
	  <ContainerStyles className={"start " + fade}>
		<div className="login-container" >
		  <h2>{translate("sign in")}</h2>
				<SignIn />
				<div className='button-field' style={{display:"flex", justifyContent: "space-between"}}>
					<MessageButtonStyle className="find-password" onClick={handlePasswordFind}>
						{translate("find password")}
					</MessageButtonStyle>

					<SingInButtonStyles className="sign-in-button" onClick={handleSignIn}>
						{translate("sign up")}
					</SingInButtonStyles>
				</div>
		</div>
	  </ContainerStyles>
  );
}

export default SignInPage;
