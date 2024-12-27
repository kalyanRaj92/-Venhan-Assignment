import React from 'react';

import NodeForm from '../NodeForm';
import { useDispatch } from 'react-redux';
import { addNode, addEdge } from '../../redux/diagramSlice';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleAddNode = (label) => {
    const newNode = {
      id: `${Math.random()}`,
      type: 'default',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label },
    };
    dispatch(addNode(newNode));
  };

  const handleAddEdge = (source, target) => {
    const newEdge = {
      id: `e${source}-${target}`,
      source,
      target,
      type: 'smoothstep',
    };
    dispatch(addEdge(newEdge));
  };

  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <NodeForm onSubmit={handleAddNode} />
      <button onClick={() => handleAddEdge('1', '2')}>Add Edge (1 to 2)</button>
    </div>
  );
};

export default Sidebar;