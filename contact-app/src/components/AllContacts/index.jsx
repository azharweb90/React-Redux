import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Contact from '../Contact';

export default function AllContacts(){
    const contacts = useSelector(state => state.contacts);
    console.log("Contacts", contacts);
    return(
        <div style={{margin: 100}}>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone Number</TableCell>
                      <TableCell>website</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.map((contact) => (
                            <Contact contact={contact} key={contact.id} />
                        ))}
                    </TableBody>
                </Table>
              </TableContainer>
        </div>
    )
}