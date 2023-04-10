import {VariablePageStyled} from "./styled"
import {VariableComponent}  from "../../components/variable/variableComponent"

import React, { useState, useEffect } from 'react';
import {axiosInstance} from "../../service/axios"
export const VariablePage = () => {

    const [listOfVariables, setListOfVariables] = useState([]);

    useEffect(() => {
        axiosInstance.get('/variavel').then( response => setListOfVariables(response.data.db_response) )
    })

    return (
        <VariablePageStyled>
            <VariableComponent listOfVariables={listOfVariables}/>
        </VariablePageStyled>
    );
}
