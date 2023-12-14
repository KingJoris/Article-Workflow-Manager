import React, { useState } from 'react';

const TaskCreator = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    // Validate and add task
    addTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="task-creator">
      <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskCreator;
