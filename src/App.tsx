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
import ResetPasswordPage from "./components/singInPage/ResetPasswordPage";
import CartPage from "./components/cartPage/CartPage";


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
                  <Route path={"/findPassword/reset"} element={<ResetPasswordPage/>}/>
                  <Route path={"/list"} element={<ListPage/>} />
                  <Route path={"/items/:id"} element={<DetailPage/>}/>
                  <Route path={"/users/cart"} element={<CartPage/>}/>
                  <Route path={"*"} element={<NoMatingPage/>} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
