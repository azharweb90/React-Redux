import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Views from './components/Views';
import NavBar from './components/Navbar';


export default function App(){
    return(
        <div>
              <BrowserRouter>
                <NavBar />
                <Views />
              </BrowserRouter>
        </div>
    )
}