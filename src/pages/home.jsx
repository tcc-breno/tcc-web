import React  from 'react';

import Header from "../components/header/index";
import { InteractionFlow } from "../components/workflow/"

export const Home = () => {

    const initialNode = "1";
    let initialNodes = [
      { id: '1',  type: 'input',    details: {nextNode: "2"},      data: { label: 'START' } },
      { id: '5',  type: 'output',                                  data: { label: 'FINAL' } },
      { id: '2',  type: 'conditional',   details: {nextNode: ["4","23", "24"] },    data: { label: '2' } },
      { id: '23', type: 'default',       details: {nextNode: "5"},      data: { label: '23' } },
      { id: '24', type: 'conditional',   details: {nextNode: ["29", "30"]},      data: { label: '24' } },
      { id: '29', type: 'default',   details: {nextNode: "5"},      data: { label: '29' } },
      { id: '30', type: 'default',   details: {nextNode: "5"},      data: { label: '30' } },
      { id: '4',  type: 'default',   details: {nextNode: "5"},      data: { label: '4' } },
    ];

    return (
        <div>
            <Header/>
            <InteractionFlow initialNode={initialNode} initialNodes = {initialNodes} />
        </div>
    )
}