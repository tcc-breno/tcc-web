import { Handle, Position } from 'reactflow';
import {ConditionalNodeStyled} from "./ConditionalNodeStyled"
import React  from 'react';

export const ConditionalNode = ({ data }) => {

  return (
    <ConditionalNodeStyled>
      <Handle className={"handle_top"}  type="target" position={Position.Top} />
      <div>
          <p>{data.label}</p>
      </div>
      <Handle className="handle_bottom" type="source" position={Position.Bottom} />
    </ConditionalNodeStyled>
  );
}

