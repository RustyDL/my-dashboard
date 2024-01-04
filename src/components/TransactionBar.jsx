import React from "react";
import { mockTransactions } from "./mockData"
import Box from "@mui/material/Box";

export default function TransactionsTable() {
  return (
    <Box sx={{ maxHeight: 200, maxWidth: 450, overflow: "auto", padding: 2 }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Text Id</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>User Name</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Date</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Cost</th>
          </tr>
        </thead>
        <tbody>
          {mockTransactions.map((transaction, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{transaction.txId}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{transaction.user}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{transaction.date}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{transaction.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}
