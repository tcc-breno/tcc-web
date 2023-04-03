import { Handle, Position } from 'reactflow';
import {StartNodeStyled} from "./StartNodeStyled"

export const StartNode = ({ data }) => {

  return (
    <StartNodeStyled>
      <Handle type="target" position={Position.Top} />
      <div>
          <p>{data.label}</p>
      </div>
      <Handle type="source" position={Position.Bottom} className="handle_bottom" />
    </StartNodeStyled>
  );
}

