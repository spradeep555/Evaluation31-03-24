
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TaskList} />
        <Route exact path="/create" component={TaskForm} />
        
      </Switch>
    </Router>
  );
}

export default Routes;
