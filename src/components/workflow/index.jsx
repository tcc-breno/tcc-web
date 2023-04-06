import React, { useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, MiniMap, Controls, Background, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

import {ConditionalNode} from '../nodes/conditional/CustomConditionalNode';

export const InteractionFlow = () => {
  const nodeTypes = { conditional: ConditionalNode };

  const initialNode = "1"

  let initialNodes = [
    { id: '1',  type: 'initial',           details: {nextNode: "2"},           data: { label: 'START' } },
    { id: '2',  type: 'conditional',    details: {nextNode: ["23","4"]},    data: { label: '2' } },
    { id: '23', type: 'task',           details: {nextNode: "5"},           data: { label: '2' } },
    { id: '4',  type: 'task',           details: {nextNode: "5"},           data: { label: '4' } },
    { id: '4',  type: 'final', data: { label: 'FINAL' } },
  ];

  let initialEdges = [
      //  { id: 'e1-2', source: '1', target: '2', markerEnd: {type: MarkerType.ArrowClosed}, animated:true},
      //  { id: '1-2',  source: '1', target: '4', markerEnd: {type: MarkerType.ArrowClosed}, animated:false}
  ];
  let columns  = {"central": 500  }

  const setInitialNodes = (arrayOfNodes) => {
    let remainingNodes = arrayOfNodes;
    let selectedNodes  = [];
    let currentNode = initialNodes.filter(node => node.id == initialNode);

    while(remainingNodes.length > 0){

    }


  }

  const [nodes, setNodes] = useNodesState(initialNodes)



  const onNodeClick = (event, node) => alert(JSON.stringify(node));

  return (
    <div style={{ width: '60vw', height: '70vh' }}>
      <ReactFlow
        nodes={nodes}
        // edges={edges} 
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
