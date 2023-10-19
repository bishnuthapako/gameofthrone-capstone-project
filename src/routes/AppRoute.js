import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home/Home";
import Characters from "../pages/Characters/Characters";
import Character from '../pages/Character/Characters';
import Houses from "../pages/House/Houses";

const AppRoute = ({data}) => {

  return (
    <Routes>
        <Route index path="/" element={<Home />} />
        {/* {
          data.length !== 0 && data.map((items, idx)=> (<Route key={idx} path="/characters" element={<Characters data ={items}/>}/>))
        } */}
        <Route path="/characters" element={<Characters data={data} />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/houses" element={<Houses />}/>
    </Routes>
  )
}

export default AppRoute
