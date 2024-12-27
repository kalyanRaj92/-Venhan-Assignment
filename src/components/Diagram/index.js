import React from 'react';

import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
import { useSelector } from 'react-redux';

const Diagram = () => {
  const nodes = useSelector((state) => state.diagram.nodes);
  const edges = useSelector((state) => state.diagram.edges);

  return (
    <div className="diagram-container">
      <ReactFlow nodes={nodes} edges={edges} style={{ background: '#f0f0f0' }}>
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Diagram;