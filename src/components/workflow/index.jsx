/* eslint-disable */
import React, {useEffect, useState} from 'react';
import ReactFlow, { useNodesState, useEdgesState, MiniMap, Controls, Background, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

import {ConditionalNode} from '../nodes/conditional/CustomConditionalNode';
//{ id: 'e1-2', source: '1', target: '2', makerEnd: {type: MarkerType.ArrowClosed}, animated:true},

const FINAL_KEY = "final";
const TASK_KEY  = "task";
const START_KEY = "start";
const CONDITIONAL_KEY = "conditional"

const onNodeClick = (event, node) => alert(JSON.stringify(node));

const getColumn = (columnName, columns) => {
  return columns[columnName]
}
const getColumnPosition = (columnName, columns) => {
  let currentColumn = getColumn(columnName, columns)
  return (columnName === "central") ? currentColumn : (getColumnPosition(currentColumn.baseColumn, columns) + currentColumn.gap)
}

let isEqualToCentralPosition = (columns, currentPosition) => {
  return centralPosition === currentPosition;
}

let columnCanBeAtCenter = (length) => {
  return ((length%2) === 0)
}

// const formatEdge = (parentNodeId, currentNodeId) => {
//   return {
//     id: `e${parentNodeId}-${currentNodeId}`,
//     source: parentNodeId, target: currentNodeId,
//     makerEnd: {type: MarkerType.ArrowClosed}, animated:false}
// }

export const InteractionFlow = ({initialNodes, initialNode}) => {
  const nodeTypes = { conditional: ConditionalNode, start: ConditionalNode, task: ConditionalNode, final: ConditionalNode};

  const [columns]  = useState({"central": 260, "lCentral":{baseColumn: "central", gap: -110} })

  const [nodes, setNodes] = useNodesState([])
  const [edges] = useEdgesState([])

  let nextNodeId = initialNode;

  const [parentPosition] = useState({
    x: getColumnPosition("lCentral", columns),
    y: 50,
    column: "central"
  });

  const formatNode = (currentNodeIndex) => {
    let currentNode = initialNodes[currentNodeIndex];

    currentNode.position = {x: parentPosition.x, y: parentPosition.y + 80};
    currentNode.column = parentPosition.column;

    parentPosition.x = currentNode.position.x
    parentPosition.y = currentNode.position.y
    parentPosition.column = currentNode.column;

    switch (currentNode.type){
      case TASK_KEY: case START_KEY:
        nextNodeId=currentNode.details.nextNode;
        break;

      case CONDITIONAL_KEY:
        const nodeSize = 100
        let endPosition   = nodeSize * currentNode.details.nextNode.length;
        let startPosition = (-Math.abs((endPosition/2)));

        let newColumn;
        let columnGap;
        currentNode.details.nextNode.forEach((conditionalResult, index) => {

          //START
          //setColumns that use prevBaseColumn as base
          //if(isEqualToCentralPosition(columns, ) && !columnCanBeAtCenter(currentNode.details.nextNode.length)){


        })

        break;

    }

    setNodes(latest => [...latest, currentNode])
    initialNodes.splice(currentNodeIndex, 1)
  }

  useEffect(() => {
    do{
      let currentNodeIndex = initialNodes.findIndex(node => node.id === nextNodeId);

      if(currentNodeIndex>=0) {
        formatNode(currentNodeIndex)
      }else{
        initialNodes = []
        console.log('error')
      }
    }while(initialNodes.length > 1)
  })

  const changeColumn = () => {
    console.log("mudamos")
    columns['central'] = 800

    setNodes(latest => {
      return latest.map(node => {
        node.position.x = getColumnPosition(node?.column, columns);
        return node;
      })
    })
  }


  return (
    <div style={{ width: '70vw', height: '100vh' }}>
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

      {columns["central"]}

      <button onClick={changeColumn}>mudar</button>
    </div>
  );
};
