import { useState } from 'react'
import './App.css'
import PermanentDrawerLeft from './components/Sidebar'
import SpanningTable from './components/TransactionBar'
import BasicGrid from './components/PrimaryDashboard'

function App() {


  return (
    <>
      <BasicGrid/>
      <PermanentDrawerLeft />
      <SpanningTable />
    </>
  )
}

export default App