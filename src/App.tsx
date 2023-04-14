import React, {Suspense, useEffect} from 'react';
import SignInPage from './components/singInPage/SignInPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import SignUpPage from "./components/singUpPage/SignUpPage";
import FindPasswordPage from "./components/singInPage/FindPasswordPage";
import MainPage from "./components/MainPage";
import ListPage from "./components/listPage/ListPage";
import NoMatingPage from "./components/etcPage/NoMatingPage";
import "./App.css"
import DetailPage from "./components/detailPage/DetailPage";


function App() {


  return (
      <>
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path={"/"} element={<MainPage />} />
                  <Route path={"/signIn"} element={<SignInPage />} />
                  <Route path={"/signUp"} element={<SignUpPage/>} />
                  <Route path={"/findPassword"} element={<FindPasswordPage/>} />
                  <Route path={"/list"} element={<ListPage/>} />
                  <Route path={"/item/:id"} element={<DetailPage/>}/>
                  <Route path={"*"} element={<NoMatingPage/>} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
