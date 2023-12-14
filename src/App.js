import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskCreator from './components/TaskCreator';
import './styles/main.css'; // Import the main.css file 

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="app">
      <h1>Article Editing Workflow Manager</h1>
      <TaskCreator addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
