
import React from 'react';

function Task() {
  const task = {
    id: 1,
    title: 'Task Title',
    description: 'Task Description',
    dueDate: '2024-04-01',
    status: 'Pending'
  };

  return (
    <div>
      <h1>Task Details</h1>
      <div>ID: {task.id}</div>
      <div>Title: {task.title}</div>
      <div>Description: {task.description}</div>
      <div>Due Date: {task.dueDate}</div>
      <div>Status: {task.status}</div>
    </div>
  );
}

export default Task;
