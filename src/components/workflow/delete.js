//
// const initialNode = "1";
// let initialNodes = [
//   { id: '1',  type: 'start',          details: {nextNode: "2"},             data: { label: 'START' } },
//   { id: '2',  type: 'conditional',    details: {nextNode: ["23","4"] },     data: { label: '2' } },
//   { id: '23', type: 'task',   details: {nextNode: "5"},      data: { label: '3' } },
//   { id: '4',  type: 'task',   details: {nextNode: "5"},      data: { label: '3' } },
//   { id: '5',  type: 'final',  data: { label: 'FINAL' } },
// ];
// let nodes = []
//
// const FINAL_KEY = "final";
// const TASK_KEY  = "task";
// const START_KEY = "start";
// const CONDITIONAL_KEY = "conditional"
//
import {useState} from "react";

const getColumn = (columnName, columns) => {
  return columns[columnName]
}
const getColumnPosition = (columnName, columns) => {
  let currentColumn = getColumn(columnName, columns)
  return (columnName === "central") ? currentColumn : (getColumnPosition(currentColumn.baseColumn, columns) + currentColumn.gap)
}

const columns  = {"central": 260, "lCentral":{baseColumn: "central", gap: -110} }

//
// let nextNodeId = initialNode;
// let parentPosition =  {x: columns.central, y: 50}
//
// const formatNode = (currentNodeIndex) => {
//   let currentNode = initialNodes[currentNodeIndex];
//
//   currentNode.position = {x: parentPosition.x, y: parentPosition.y + 80};
//   parentPosition.x = currentNode.position.x
//   parentPosition.y = currentNode.position.y
//
//   if( [TASK_KEY, START_KEY].includes(currentNode.type) ){
//     nextNodeId=currentNode.details.nextNode;
//
//   }else
//
//   if( CONDITIONAL_KEY === currentNode.type ){
//     let numberOfConditionals = currentNode.details.nextNode.length
//     let nodeSpace = 110;
//
//
//     formatNode(initialNodes.findIndex(node => node.id === currentNode.details.nextNode[0]))
//     formatNode(initialNodes.findIndex(node => node.id === currentNode.details.nextNode[1]))
//
//
//     currentNode.details.nextNode.forEach(conditional => {
//       formatNode(initialNodes.findIndex(node => node.id === conditional))
//
//     })
//   }
//
//   nodes.push(currentNode)
//   initialNodes.splice(currentNodeIndex, 1)
// }
//
// do{
//   let currentNodeIndex = initialNodes.findIndex(node => node.id === nextNodeId);
//
//   if(currentNodeIndex>=0) {
//     formatNode(currentNodeIndex)
//   }else{
//     initialNodes = []
//     console.log('error')
//   }
// }while(initialNodes.length > 1)
//
// console.log(nodes)

let currentNode = {
  details: {
    nextNode: ["4", "5"]
  },
  column: "central"
}

let isEqualToCentralPosition = (columns, currentPosition) => {
  return centralPosition === currentPosition;
}

let columnCanBeAtCenter = (length) => {
  return ((length%2) === 0)
}

const nodeSize = 100
let endPosition   = nodeSize * currentNode.details.nextNode.length;
let startPosition = (-Math.abs((endPosition/2)));

// const columns  = {"central": 260, "lCentral":{baseColumn: "central", gap: -110} }

let newColumn;
let columnGap;
currentNode.details.nextNode.forEach((conditionalResult, index) => {


  if(isEqualToCentralPosition(columns, ) && !columnCanBeAtCenter(currentNode.details.nextNode.length)){

  }

  console.log(`
    Index   = ${index}
    New Col = ${newColumnPosition}
  `)
})

//nodeIndex
//column[nodeIndex]

console.log(`
  Columns     = ${JSON.stringify(columns)}
  Total size  = ${totalSize},
  Start point = ${startPosition}
`)