import React from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
          <h1>
            Welcome 
          <Link to="/add">
            <Button variant="contained"> Add Contact </Button>
          </Link>
          </h1>
        </>
       
    )
}