import React from 'react';
import { useState } from 'react';
import './App.css';
import Layout from './components/MsgBodyPage/Layout';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SignUp from './All_pages/RegisterPage';
import SignIn from './All_pages/LoginPage';
import Inbox from './components/Inbox';
// import { ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

function App() {
const [token, setToken] = useState(localStorage.getItem('token')||null);

const logout = () => {
  localStorage.removeItem('token');
  setToken('');
}
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/register' Component={SignUp}/>
          <Route exact path='/' element={<SignIn setToken={setToken}/>}/>
          <Route path='/protected' Component={Layout} >
          <Route path='/protected/inbox' Component={Inbox}/>
          </Route>
        </Routes>
      </BrowserRouter>
    {/* <ToastContainer/> */}
    </div>
  )
}
export default App