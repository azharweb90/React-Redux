import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className='p-3 bg-dark text-white'>
          <Link to='/home' className='navbar-brand ml-5 text-white'>Contact App Redux</Link>
        </nav>
    )
}