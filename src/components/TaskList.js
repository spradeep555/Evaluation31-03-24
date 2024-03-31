
import React from 'react';
import { Button } from '@chakra-ui/react'; 

function TaskList() {

  const tasks = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1', dueDate: '2024-04-01', status: 'Pending' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', dueDate: '2024-04-02', status: 'Completed' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', dueDate: '2024-04-03', status: 'Pending' }
  ];

  return (
    <div>
      <h1>Task List</h1>
      <Button colorScheme="blue">Create Task</Button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div>{task.dueDate}</div>
            <div>{task.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
