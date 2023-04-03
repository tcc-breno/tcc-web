import React, { useState, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, MiniMap, Controls, Background, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

import {StartNode} from '../nodes/start/CustomStartNode';

export const InteractionFlow = () => {

  const nodeTypes = { start: StartNode };

  const initialNodes = [
    { id: '1', position: { x: 15,    y: 50 }, type:'start', data: { label: '1' } },
    { id: '2', position: { x: -200, y: 350 }, data: { label: '2' } },
    { id: '4', position: { x: 200,  y: 350 }, data: { label: '4' } },
  ];
  const initialEdges = [
      { id: 'e1-2', source: '1', target: '2', markerEnd: {type: MarkerType.ArrowClosed}, animated:true},
      { id: '1-2',  source: '1', target: '4', markerEnd: {type: MarkerType.ArrowClosed}, animated:false}
  ];

  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  const onNodeClick = (event, node) => alert(JSON.stringify(node));

  return (
    <div style={{ width: '60vw', height: '70vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges} 
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
      >

        <MiniMap  style={{ "backgroundColor": "#c2c2c2"}}/>
        <Controls/>
        <Background style={{ "backgroundColor": "#dcdcdc"}}/>
      </ReactFlow>
    </div>
  );
};
