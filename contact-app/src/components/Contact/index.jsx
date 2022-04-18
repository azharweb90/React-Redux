import React from 'react';
import TableCell from '@mui/material/TableCell';
import { TableRow } from '@mui/material';

export default function Contact({contact}){
    const {id, name, phoneNumber, website, emailID} = contact;
    
    return(
        <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{emailID}</TableCell>
            <TableCell>{phoneNumber}</TableCell>
            <TableCell>{website}</TableCell>
        </TableRow>
    )
}