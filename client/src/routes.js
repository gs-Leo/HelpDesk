import React from "react";
import {Routes, Route} from 'react-router-dom';

import Login from './pages/login';
import Home from "./pages/home";
import Profile from "./pages/profile";
import NewUser from "./pages/newUser";
import NewCard from "./pages/newCard";


export default function Rotas(){
    return(     
        <Routes>
                
            <Route path="/" element={<Login/>} /> 
            <Route path="/Home" element={<Home/>} /> 
            <Route path="/Profile" element={<Profile/>} />               
            <Route path="/NewUser" element={<NewUser/>} /> 
            <Route path="/NewCard" element={<NewCard/>} />             
       
        </Routes>
    ); 
}