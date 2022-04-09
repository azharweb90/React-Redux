import React from 'react';
import { Routes, Route } from 'react-router';
import AddContact from '../AddContact';
import EditContact from '../EditContact';
import Home from '../Home';


export default function Views(){
    return(
        <Routes>
            <Route  path='/home' element={<Home />} />
            <Route path='/add' element={<AddContact />} />
            <Route path='/edit:id' element={<EditContact />} />
        </Routes>
    )
}