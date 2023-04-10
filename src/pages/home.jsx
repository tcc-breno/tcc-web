import {InteractionFlow} from "../components/workflow/"

export const Home = () => {

    const initialNode = "1";
    let initialNodes = [
      { id: '1',  type: 'start',  details: {nextNode: "2"},      data: { label: 'START' } },
      { id: '5',  type: 'final',  data: { label: 'FINAL' } },
      { id: '2',  type: 'task',   details: {nextNode: "23" },    data: { label: '2' } },
      { id: '23', type: 'task',   details: {nextNode: "4"},      data: { label: '3' } },
      { id: '4',  type: 'task',   details: {nextNode: "5"},      data: { label: '3' } },
    ];

    return (
        <div>
            <InteractionFlow initialNode={initialNode} initialNodes = {initialNodes} />
        </div>
    )
}