import React  from 'react';
import SimulationStyled from "./style"
import { useState, useEffect } from 'react';
import Header from "../../components/header/index";
import SimulationFlow from "../../components/workflow/index"
import InfoPanel from "../../components/workflow/panel/index.jsx"
import DescriptionIcon from '@mui/icons-material/Description';

const getUserNodes = () => {
  return [
    { id: '1',  type: 'input',    details: {nextNode: "5"},      data: { label: 'START' } },
    { id: '5',  type: 'output',                                  data: { label: 'FINAL' } },
    // { id: '2',  type: 'conditional',   details: {nextNode: ["4","23", "24"] },    data: { label: '2' } },
    // { id: '23', type: 'default',       details: {nextNode: "5"},      data: { label: '23' } },
    // { id: '24', type: 'conditional',   details: {nextNode: ["29", "30"]},      data: { label: '24' } },
    // { id: '29', type: 'default',   details: {nextNode: "5"},      data: { label: '29' } },
    // { id: '30', type: 'default',   details: {nextNode: "5"},      data: { label: '30' } },
    // { id: '4',  type: 'default',   details: {nextNode: "5"},      data: { label: '4' } },
  ];
}

export const Simulation = () => {
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(true); 
  let initialNode = "1";
  let initialNodes = getUserNodes();

  return (
    <SimulationStyled>
      <Header/>
        
      <div className='container'>
        <SimulationFlow initialNode={initialNode} initialNodes={initialNodes} isInfoPanelOpen={{isInfoPanelOpen}} />

        <InfoPanel Component={null} isOpen={isInfoPanelOpen} setIsOpen={setIsInfoPanelOpen} />
        {!isInfoPanelOpen && 
          <div className="openInfoPanel" onClick={ () => { setIsInfoPanelOpen(true)} }>
            
          </div>
        }
      </div>
     
    </SimulationStyled>
  )
}