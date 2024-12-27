import React, { useState } from 'react';

const NodeForm = ({ onSubmit }) => {
  const [label, setLabel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(label);
    setLabel('');
  };

  return (
    <form onSubmit={handleSubmit} className="node-form">
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Node Label"
        required
      />
      <button type="submit">Add Node</button>
    </form>
  );
};

export default NodeForm;