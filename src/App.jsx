import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import PrimaryDashboard from './components/PrimaryDashboard'
import TransactionBar from './components/TransactionBar'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'


function App() {
  return (
    <div className="app">
      <Grid container spacing={25}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start" >
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <item><BarChartWeekday/></item>
          <h3>Recent Transactions</h3>
          <TransactionBar/>
        </Grid>

      </Grid>
    </div>
  )
}
export default App
