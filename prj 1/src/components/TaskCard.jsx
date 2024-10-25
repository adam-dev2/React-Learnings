import React from 'react';
import './TaskCard.css';

function TaskCard({ task }) {
  return (
    <div className={`task-card ${task.status}`}>
      <h4>{task.title}</h4>
      <p>{task.date}</p>
      <p>{task.time}</p>
    </div>
  );
}

export default TaskCard;
