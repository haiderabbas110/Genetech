import React from 'react'
import { Route, Routes } from "react-router";
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import './app.scss';

function App() {
  return (
    <>

      <>
        <Header />
        <Sidebar />
      </>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
