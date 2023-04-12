/* eslint-disable */
import React, {useEffect, useState} from 'react';
import ReactFlow, { useNodesState, useEdgesState, MiniMap, Controls, Background, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

import {ConditionalNode} from '../nodes/conditional/CustomConditionalNode';
// setNodes(latest => {
//   return latest.map(node => {
//     node.position.x = getColumnPosition(node?.column, columns);
//     return node;
//   })
// })

const FINAL_KEY = "output";
const TASK_KEY  = "default";
const START_KEY = "input";
const CONDITIONAL_KEY = "conditional"

const Y_GAP = 180;
const X_GAP = 200;

const onNodeClick = (event, node) => alert(JSON.stringify(node));

const getGap = (currentIndex, totalLength) => {
  let middlePosition  = Math.ceil((totalLength/2))
  let currentPosition = currentIndex+1;

  if( currentPosition <  middlePosition){ 
    return -Math.abs(X_GAP); 
  }else 
  if( currentPosition == middlePosition ){
    return (totalLength%2 === 0) ? -Math.abs(X_GAP) : 0;
  }   

  return X_GAP;
} 

export const InteractionFlow = ({initialNodes, initialNode}) => {
  const nodeTypes = { conditional: ConditionalNode, start: ConditionalNode, task: ConditionalNode, final: ConditionalNode};

  const [columns]  = useState( [{name:"central", gap: 260 }] )
  const [nodes, setNodes] = useNodesState([])
  const [edges] = useEdgesState([])
  
  console.log(initialNodes)

  let nextNodeId = initialNode;

  const [parentNode] = useState( { x: 260, y: 50, column: "central", id: "0"} );

  const updateParentNode = ( posX, posY, column, id ) => {
    parentNode.x = posX
    parentNode.y = posY
    parentNode.column = column;
    parentNode.id     = id;
  }

  const getColumn = (columnName) => {
    return columns.filter(column => column.name === columnName)[0]
  }
  
  const getColumnPosition = (columnName) => {
    let currentColumn = getColumn(columnName)

    return (columnName === "central") ? currentColumn.gap : (getColumnPosition(currentColumn.baseColumn) + currentColumn.gap)
  }

  const formatNewColumn = (currentIndex, totalLength, parentColumnName) => {
    let gapResult = getGap(currentIndex, totalLength)
    if(gapResult == 0) { return parentColumnName}
    let columnName = Math.random().toString(36).substring(2, 8);
    
    columns.push({name: columnName, baseColumn: parentColumnName, gap: gapResult})
    
    return columnName;
  }

  const formatNewEdge = (parentNodeId, currentNodeId) => {
    console.log(`e${parentNodeId}-${currentNodeId}`)
    // edges.push(
    //   {
    //     id: `e${parentNodeId}-${currentNodeId}`,
    //     source: parentNodeId, target: currentNodeId,
    //     makerEnd: {type: MarkerType.ArrowClosed}, animated:false
    //   }
    // )
  }

  const formatNode = (currentNodeIndex) => {
    let currentNode = initialNodes[currentNodeIndex];

    currentNode.position = {x: getColumnPosition(parentNode.column), y: parentNode.y + Y_GAP};
    currentNode.column = parentNode.column;

    formatNewEdge(parentNode.id, currentNode.id)
    updateParentNode(currentNode.position.x, currentNode.position.y, currentNode.column, currentNode.id)

    switch (currentNode.type){
      case TASK_KEY: case START_KEY:
        nextNodeId=currentNode.details.nextNode;
        break;

      case CONDITIONAL_KEY:
        let prev_y_position = currentNode.position.y;
        let prev_column     = currentNode.column;
        let prev_parent_id  = currentNode.id

        currentNode.details.nextNode.forEach((conditionalResult, index) => {
          let columnName = formatNewColumn(index, currentNode.details.nextNode.length, currentNode.column);
          let nodeIndex  = initialNodes.findIndex(node => node.id === conditionalResult); 

          updateParentNode( getColumnPosition(columnName), prev_y_position, columnName, prev_parent_id )

          formatNode(nodeIndex)
        })

        parentNode.column = prev_column;
        
        break;
    }

    setNodes(latest => [...latest, currentNode])
    initialNodes.splice(currentNodeIndex, 1)
  }

  useEffect(() => {
    do{
      let currentNodeIndex = initialNodes.findIndex(node => node.id === nextNodeId);

      if( currentNodeIndex >= 0 ) {
        formatNode(currentNodeIndex)
      }
      else{
        initialNodes = []
      }
    }while(initialNodes.length > 1)
  })

  const enviarMudancas = () => {
    console.log(document.getElementById("initial").value)
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

      <input type="text" id="initial"/>
      <button onClick={enviarMudancas}>Mudar</button>
    </div>
  );
};
