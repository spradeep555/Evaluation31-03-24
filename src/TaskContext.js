
import React, { createContext, useReducer, useContext } from 'react';
import taskReducer from './taskReducer';

const initialState = {
  tasks: []
};

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
