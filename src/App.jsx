import React from 'react';
import Dashboard from './components/PrimaryDashboard';
import Transactions from './components/TransactionBar';
import Sidebar from './components/Sidebar';
import Header from "./components/header";
import { mockTransactions } from './components/mockData'; // Correct the import path
import './App.css'

function App() {
  return (
    <div>
      <Dashboard />
      <Transactions />
      <Header />
      <Sidebar/>
    </div>
  );
}

export default App;