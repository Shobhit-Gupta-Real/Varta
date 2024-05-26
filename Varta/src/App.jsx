import React, { lazy } from "react";
import {Route, Routes} from 'react-router-dom'
const Home = lazy(()=>import('./pages/Home')) //here we have used lazyloading for code splitting and it is good for the efficiency of the application 
const Login = lazy(()=>import('./pages/Login'))
const Chat = lazy(()=>import('./pages/Chat'))
const Group = lazy(()=>import('./pages/Group'))

const App = () =>{
  return(
    <div className="app">
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path="chat" element={<Chat/>}/>
      <Route path="groups" element={<Group/>}/>
      <Route path="login" element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;