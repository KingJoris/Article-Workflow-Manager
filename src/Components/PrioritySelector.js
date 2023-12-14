import React from 'react';

const PrioritySelector = ({ priority, setPriority }) => {
  return (
    <div className="priority-selector">
      <label>Select Priority:</label>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

export default PrioritySelector;
