
import { useState } from 'react';
import './App.css'
import Layout from './Layout';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SignIn from './pages/Login';
import SignUp from './pages/Register';
import Inbox from './components/Inbox';
import { ToastContainer } from 'react-toastify';


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
       <ToastContainer/>
       </div>
  )
}

export default App
