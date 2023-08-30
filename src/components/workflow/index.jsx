import React, {useEffect, useState} from 'react';
import ReactFlow, { useNodesState, useEdgesState, MiniMap, Controls, Background, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

import {ConditionalNode} from '../nodes/conditional/CustomConditionalNode';

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

export default ({initialNodes, initialNode, isInfoPanelOpen }) => {
  const nodeTypes = { conditional: ConditionalNode, start: ConditionalNode, task: ConditionalNode, final: ConditionalNode};

  const [columns, setColumns]  = useState( [{name:"central", gap: 260 }] )
  const [nodes, setNodes] = useNodesState([])
  const [edges] = useEdgesState([])
  
  let nextNodeId = initialNode;

  const [parentNode] = useState( { x: 260, y: 0, column: "central", id: "0"} );

  const updateParentNode = ( posX, posY, column, id ) => {
    parentNode.id = id;
    parentNode.x = posX
    parentNode.y = posY
    parentNode.column = column;
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
    if(gapResult === 0) { return parentColumnName}
    
    let newColumnName = Math.random().toString(36).substring(2, 8);
    columns.push({name: newColumnName, baseColumn: parentColumnName, gap: gapResult})
    
    let columnAtTheSamePosition = columns.filter(c => getColumnPosition(c.name) === getColumnPosition(newColumnName) && c.name !== newColumnName)[0]
    if( columnAtTheSamePosition ){
      
      let fixedColumns = columns.map(column => {
        if( column.name === newColumnName ){
          column.baseColumn = columnAtTheSamePosition.name;
          column.gap = (column.gap > 0) ? -Math.abs(column.gap) : Math.abs(column.gap); 
        }else
        if( column.name === parentColumnName ){
          column.baseColumn = newColumnName;
        }

        return column;
      })

      setColumns(fixedColumns)
    }

    return newColumnName;
  }

  const formatNewEdge = (currentNodeId, parentNodeId) => {
    if(parentNodeId !== "0"){
      edges.push(
        {
          id: `e${currentNodeId}-${parentNodeId}`,
          // type: "step",
          source: currentNodeId, target: parentNodeId,
          makerEnd: {type: MarkerType.Arrow}, animated:false,
          style: {
            strokeWidth: 2,
            stroke: '#00000052',
          }
        }
      )
    }
  }

  const reloadNodesPosition = () => {
    setNodes(latest => {
      return latest.map(node => {
        node.position.x = getColumnPosition(node?.column, columns);
        return node;
      })
    })
  }

  const formatNode = (currentNodeIndex) => {
    let currentNode = initialNodes[currentNodeIndex];

    currentNode.position = {x: getColumnPosition(parentNode.column), y: parentNode.y + Y_GAP};
    currentNode.column = parentNode.column;

    switch (currentNode.type){
      case TASK_KEY: case START_KEY:
        nextNodeId=currentNode.details.nextNode;
        formatNewEdge(currentNode.id, nextNodeId)
        updateParentNode(currentNode.position.x, currentNode.position.y, currentNode.column, currentNode.id)
        break;

      case CONDITIONAL_KEY:
        let prev_y_position = currentNode.position.y;
        let prev_column     = currentNode.column;
        let prev_parent_id  = currentNode.id

        currentNode.details.nextNode.forEach((conditionalResult, index) => {
          let columnName = formatNewColumn(index, currentNode.details.nextNode.length, currentNode.column);
          let nodeIndex  = initialNodes.findIndex(node => node.id === conditionalResult); 
          updateParentNode( getColumnPosition(columnName), prev_y_position, columnName, prev_parent_id )
          
          formatNewEdge(prev_parent_id, conditionalResult)
          formatNode(nodeIndex)
        })

        parentNode.column = prev_column;
        reloadNodesPosition()
        break;
    }
    
    setNodes(latest => [...latest, currentNode])
    initialNodes.splice(currentNodeIndex, 1)
  }

  useEffect(() => {
    while(initialNodes.length > 0){
      let currentNodeIndex = initialNodes.findIndex(node => node.id === nextNodeId);

      formatNode(currentNodeIndex)
    }
  })

  return (
    <div style={{ width:(isInfoPanelOpen) ? '100vw':'70vw', height: '92vh' }}>
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
