import React from 'react';
import './TaskBoard.css';
import TaskCard from './TaskCard';

function TaskBoard() {
  const tasks = {
    todo: [
      { title: "Create a Visual Style Guide", date: "13 Feb 2023", time: "09:00 AM - 09:30 AM", status: "todo" },
      { title: "Slicing Landing Page", date: "13 Feb 2023", time: "07:30 AM - 09:30 AM", status: "todo" }
    ],
    inProgress: [
      { title: "Testing and User Feedback", date: "Today", time: "09:00 AM - 09:30 AM", status: "inProgress" },
      { title: "Analyze Research Data", date: "13 Feb 2023", time: "07:30 AM - 09:30 AM", status: "inProgress" }
    ],
    completed: [
      { title: "Meetings with Client", date: "Today", time: "09:00 AM - 09:30 AM", status: "completed" },
      { title: "Develop Back-End Systems", date: "Today", time: "07:30 AM - 09:30 AM", status: "completed" }
    ],
    overdue: [
      { title: "Create Mockups for Dribbble Shot", date: "13 Feb 2023", time: "07:30 AM - 09:30 AM", status: "overdue" }
    ]
  };

  return (
    <div className="task-board">
      <div className="task-section">
        <h3>Todo</h3>
        {tasks.todo.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
      <div className="task-section">
        <h3>In Progress</h3>
        {tasks.inProgress.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
      <div className="task-section">
        <h3>Completed</h3>
        {tasks.completed.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
      <div className="task-section">
        <h3>Overdue</h3>
        {tasks.overdue.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskBoard;
