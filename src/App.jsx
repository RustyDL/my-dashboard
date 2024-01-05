import React from 'react';
import Dashboard from './components/PrimaryDashboard';
import Transactions from './components/TransactionBar';
import Sidebar from './components/Sidebar';
import Header from "./components/header";
import './App.css'
import { mockTransactions } from './components/mockData'; // Correct the import path

function App() {
  return (
    <div className="app-container">
    <Sidebar />
    <div className="content-container">
      <Header>Transaction List</Header>
      <Dashboard />
      <Transactions />
    </div>
  </div>
);
}

export default App;