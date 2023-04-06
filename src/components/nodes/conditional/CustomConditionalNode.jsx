import { Handle, Position } from 'reactflow';
import {ConditionalNodeStyled} from "./ConditionalNodeStyled"

export const ConditionalNode = ({ data }) => {

  return (
    <ConditionalNodeStyled>
      <Handle type="target" position={Position.Top} />
      <div>
          <p>{data.label}</p>
      </div>
      <Handle type="source" position={Position.Bottom} className="handle_bottom" />
    </ConditionalNodeStyled>
  );
}

