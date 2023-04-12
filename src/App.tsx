import React, {useEffect} from 'react';
import LoginPage from './components/singInPage/LoginPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import SignUpPage from "./components/singUpPage/SignUpPage";
import FindPasswordPage from "./components/singInPage/FindPasswordPage";
import MainPage from "./components/MainPage";
import ListPage from "./components/listPage/ListPage";
import {useDispatch} from "react-redux";
import {getItemsApi} from "./api";
import {initItems} from "./store/itemSlice";
import useAsync from "./hooks/useAsync";
import NoMatingPage from "./components/etcPage/NoMatingPage";
// typescript 로 회원가입 버튼과 아이디 찾기 버튼이 있는 회원가입 페이지를 만들어줘



function App() {
    const [isPending, error, getItemApiAsync] = useAsync(getItemsApi);
    const dispatch = useDispatch();

   useEffect(() => {
       async function fetchData() {
           const items = await getItemApiAsync();
           dispatch(initItems(items));
       }
       fetchData();
   }, [])


  return (
      <>
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path={"/"} element={<MainPage />} />
                  <Route path={"/login"} element={<LoginPage />} />
                  <Route path={"/signUp"} element={<SignUpPage/>} />
                  <Route path={"/findPassword"} element={<FindPasswordPage/>} />
                  <Route path={"/list"} element={<ListPage/>} />
                  <Route path={"*"} element={<NoMatingPage/>} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
