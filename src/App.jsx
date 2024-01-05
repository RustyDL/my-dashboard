import React from 'react';
import Dashboard from './components/PrimaryDashboard';
import Transactions from './components/TransactionBar'; // Adjust the path based on your file structure
import Sidebar from './components/Sidebar';
import Header from "./components/header";
import './App.css'

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