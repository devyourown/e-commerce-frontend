import React from 'react';
import LoginPage from './components/loginPage/LoginPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/nav/Header";
import SignUpPage from "./components/singIpPage/SignUpPage";
import FindPasswordPage from "./components/loginPage/FindPasswordPage";
// typescript 로 회원가입 버튼과 아이디 찾기 버튼이 있는 회원가입 페이지를 만들어줘

function App() {



  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Header />}>
                  <Route path={"login"} element={<LoginPage />} />
                  <Route path={"signUp"} element={<SignUpPage/>} />
                  <Route path={"findPassword"} element={<FindPasswordPage/>} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
