import React from 'react';

const DeadlineInput = ({ deadline, setDeadline }) => {
  return (
    <div className="deadline-input">
      <label>Set Deadline:</label>
      <input type="datetime-local" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
    </div>
  );
};

export default DeadlineInput;
