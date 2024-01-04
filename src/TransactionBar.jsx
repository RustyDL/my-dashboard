import React from 'react';
import { Paper, Typography } from '@mui/material';

const TransactionBar = () => {
  return (
    <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
      <Typography variant="h6">Recent Transactions</Typography>
      <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {/* Display recent transactions with scroll bar */}
        {/* Example: */}
        <p>Transaction 1</p>
        <p>Transaction 2</p>
        {/* Add more transactions dynamically based on your data */}
      </div>
    </Paper>
  );
};

export default TransactionBar;
