import { mockTransactions } from "../mockData"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function SpanningTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockTransactions.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.txId}</TableCell>
              <TableCell align="right">{row.user}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{'N/A'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{` %`}</TableCell>
            <TableCell align="right">{'N/A'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{'N/A'}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}