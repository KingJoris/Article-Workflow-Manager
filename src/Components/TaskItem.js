import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {/* Display other task details */}
    </div>
  );
};

export default TaskItem;
