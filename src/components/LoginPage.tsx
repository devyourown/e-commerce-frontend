import React, { useState, useEffect } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // 로그인 처리 로직을 작성합니다.
	console.log("login");
  };

  const handlePasswordFind = () => {

  }

  const handleSignIn = () => {

  }

  const handleOnSubmit = () => {
	
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleLogin();
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
		/**
		 * 반환함수에 이벤트 핸들러를 제거해야 메모리에 이벤트가 남아 있지 않아
		 * 메모리 누수 및 컴포넌트 안정성 문제가 발생할 수 있다.
		 *  */ 
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <div className="login-container" >
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleOnSubmit}>
		{/* <div className="field login-input"> */}
			<input
			className="input-field"
			type="text"
			id="username"
			value={username}
			onChange={handleUsernameChange}
			placeholder="username"
			/>
			<input
			className="input-field"
			type="password"
			id="password"
			value={password}
			onChange={handlePasswordChange}
			placeholder="password"
			/>
		{/* </div> */}
		<div className='button-field'>
			<button className="password-find" onClick={handlePasswordFind}>
			비밀번호를 잊어버리셨나요?
			</button>
			<button className="login-button" onClick={handleLogin}>
			로그인
			</button>
			<button className="sign-in-button" onClick={handleSignIn}>
			회원가입
			</button>
		</div>
      </form>
    </div>
  );
}

export default LoginPage;
