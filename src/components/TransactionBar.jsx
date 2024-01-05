import React from 'react';
import Header from './header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { mockTransactions } from "./mockData";

export default function Transactions() {
    return (
        <div>
            <>
                <Header>Transaction List</Header>
                <Table size="small" >
                    <TableHead>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {mockTransactions.map((row) => (
                            <TableRow key={row.txId}>
                                <TableCell>{row.user}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.cost}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>
        </div>
    );
}