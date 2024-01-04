import React, { useState } from 'react';
import Heading from '../Heading';
import Sidebar from './Sidebar';
import TransactionBar from './TransactionBar';

const PrimaryDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Heading onSidebarToggle={handleSidebarToggle} />
      <div style={{ display: 'flex' }}>
        {isSidebarOpen && <Sidebar />}
        <main>
          {/* Your main content, including revenue charts and other features */}
          <TransactionBar />
        </main>
      </div>
    </div>
  );
};

export default PrimaryDashboard;
