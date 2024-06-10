import React, { Suspense, lazy } from "react";
import {Route, Routes} from 'react-router-dom'
import ProtectRoute from "./components/auth/ProtectRoute";
import { LayoutLoader } from "./components/layout/Loaders";

const Home = lazy(()=>import('./pages/Home')) //here we have used lazyloading for code splitting and it is good for the efficiency of the application 
const Login = lazy(()=>import('./pages/Login'))
const Chat = lazy(()=>import('./pages/Chat'))
const Group = lazy(()=>import('./pages/Group'))
const NotFound = lazy(()=>import('./pages/NotFound'))

let user = true;
const App = () =>{
  return(
    <div className="">
    <Suspense fallback={<LayoutLoader/>}>
    <Routes>
      <Route element={<ProtectRoute user={user}/>}>
      <Route path="" element={<Home/>} />
      <Route path="chat" element={<Chat/>}/>
      <Route path="groups" element={<Group/>}/>
      </Route>
      <Route path="login" element={<ProtectRoute user={!user} redirect="/"> <Login/> </ProtectRoute>}/>
      <Route path="*" element={<NotFound/>}/> {/* This is the componenet which will we redered where no route is matched  */}
    </Routes>
    </Suspense>
    </div>
  );
}

export default App;