import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home/Home";
import Characters from "../pages/Characters/Characters";
import Character from '../pages/Character/Characters';
import Houses from "../pages/House/Houses";

const AppRoute = () => {
  return (
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/houses" element={<Houses />}/>
    </Routes>
  )
}

export default AppRoute
