
const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };
      case 'UPDATE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task
          )
        };
      // Add more cases as needed for other actions
      default:
        return state;
    }
  };
  
  export default taskReducer;
  