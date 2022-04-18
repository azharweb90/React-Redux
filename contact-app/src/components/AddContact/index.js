
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { action } from "../../redux/actions";
import shortid from "shortid";


const classes = {
    formWrapper : {
        display: 'flex',
        flexDirection: 'column',
        margin: '100px auto',
        maxWidth: 500,
    },
    textField : {
        marginBottom: 15,
    },
    button : {
        minHeight: 50,
    }
}
export default function AddContact(){
    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [emailID, setemailID] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [website, setWebsite] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: shortid.generate(),
            name: name, 
            emailID: emailID,
            phoneNumber: phoneNumber,
            website: website
        }
        dispatch(action('CREATE_CONTACT', newUser));
        navigateTo('/home');
    };

    return(
        <form onSubmit={handleSubmit}>
            <div style={classes.formWrapper}>
                <TextField 
                    id="name"
                    label="Name"
                    variant="outlined"
                    style={classes.textField}
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                <TextField 
                    id="phoneNumber"
                    label="Phone Number"
                    variant="outlined"
                    style={classes.textField}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}/>
                <TextField 
                    id="email"
                    label="Email ID"
                    variant="outlined"
                    style={classes.textField}
                    value={emailID} 
                    onChange={(e) => setemailID(e.target.value)}/>
                <TextField 
                    id="website" 
                    label="Website"
                    variant="outlined"
                    style={classes.textField}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}/>
                <Button  type="submit" variant="contained" color="primary" style={classes.button}>CREATE CONTACT</Button>
            </div>
        </form>
    
    )
}