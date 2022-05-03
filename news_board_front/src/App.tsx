import React from 'react';
import Main from "./pages/mainPage/Main";
import Login from "./pages/loginPage/Login"
import MyPage from "./pages/profilepage/mypage"
import Register from "./pages/loginPage/Register"
import { Routes, Route } from 'react-router-dom';
import cookies from "react-cookies";

const App: React.FC = () =>  {
  return (
    <Routes>
      <Route path="/" element = {<Main/>} />
      <Route path='/2' element = {<Main />} />
      <Route path='/3' element = {<Main />} />
      <Route path='/4' element = {<Main />} />
      <Route path='/5' element = {<Main />} />
      <Route path="/login" element = {<Login />} />
      {/* @ts-ignore */}
      <Route path='/mypage' element = {<MyPage cookie={cookies.load("access token")}/>} />
      <Route path='/register' element = {<Register />} />
    </Routes>
  );
}

export default App;
