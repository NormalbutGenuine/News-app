import React from 'react';
import Main from "./Main";
import Login from "./loginPage/Login"
import MyPage from "./profilepage/mypage"
import Register from "./loginPage/Register"
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
