import React from 'react';
import { Button } from '@mui/material';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src='src/components/images/for prj.png' alt="Profile" />
        <h3>Adam</h3>
        <p>shaikadam252@gmail.com</p>
      </div>
      <nav>
        <ul>
          <li>Overview</li>
          <li>Task List</li>
          <li>Project Overview</li>
          <li>Calendar</li>
          <li>Settings</li>
        </ul>
      </nav>
      <div className="theme-toggle">
        <Button style={{backgroundColor: '#d9d5ca',borderRadius:'4px',color:'white'}}>Light</Button>
        <Button style={{backgroundColor:'#d9d5ca', borderRadius:'4px',color:'black'}}>Dark</Button>
      </div>
    </aside>
  );
}

export default Sidebar;
