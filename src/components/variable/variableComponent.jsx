import { VariableStyled } from "./variableStyled";

import { VariableListComponent } from './list/variableListComponent'

export const VariableComponent = ({listOfVariables}) => {

    return (
        <VariableStyled>
            <VariableListComponent listOfVariables={listOfVariables}/>
        </VariableStyled>
    );

}