import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TaskBoard from './components/TaskBoard';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <TaskBoard />
      </div>
    </div>
  );
}

export default App;
