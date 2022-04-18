import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const classes = {
  navbar: {
    background:  '#121212',
    padding: '16px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link:{
    color: 'white',
    textDecoration: 'none',
    fontSize: 26,
  }
};

export default function Navbar(){

    return(

        <nav style={classes.navbar}>
          <Link to='/home' style={classes.link}>Contact APP</Link>
          <Link to="/add">
                <Button variant="contained"> Add Contact </Button>
            </Link>
        </nav>
    )
}