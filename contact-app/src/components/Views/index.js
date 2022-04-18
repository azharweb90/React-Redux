import React from 'react';
import { Routes, Route } from 'react-router';
import AddContact from '../AddContact';
import AllContacts from '../AllContacts';
import EditContact from '../EditContact';


export default function Views(){
    return(
        <Routes>
            <Route  path='/home' element={<AllContacts />} />
            <Route path='/add' element={<AddContact />} />
            <Route path='/edit:id' element={<EditContact />} />
        </Routes>
    )
}