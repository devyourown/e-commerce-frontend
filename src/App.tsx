import React from 'react';
import LoginPage from './components/loginPage/LoginPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import SignUpPage from "./components/singIpPage/SignUpPage";
import FindPasswordPage from "./components/loginPage/FindPasswordPage";
import MainPage from "./components/MainPage";
// typescript 로 회원가입 버튼과 아이디 찾기 버튼이 있는 회원가입 페이지를 만들어줘

function App() {

  return (
      <>
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path={"/"} element={<MainPage />} />
                  <Route path={"/login"} element={<LoginPage />} />
                  <Route path={"/signUp"} element={<SignUpPage/>} />
                  <Route path={"/findPassword"} element={<FindPasswordPage/>} />

              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
