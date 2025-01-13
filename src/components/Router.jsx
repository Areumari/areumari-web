import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "src/pages/home";
import Login from "src/pages/auth/login";
import Signup from "src/pages/auth/signup";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;