import React from 'react';
import Main from "./pages/mainPage/Main";
import Login from "./pages/loginPage/Login"
import MyPage from "./pages/profilepage/mypage"
import Register from "./pages/loginPage/Register"
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () =>  {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/login" element={<Login />} />
      <Route path='/mypage' element={<MyPage />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
