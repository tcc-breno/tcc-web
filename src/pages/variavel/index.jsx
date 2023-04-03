import {VariablePageStyled} from "./styled"
import React, { useState, useEffect } from 'react';
import {axiosInstance} from "../../service/axios"
export const VariablePage = () => {

    const [listOfVariables, setListOfVariables] = useState([]);

    useEffect(() => {
        axiosInstance.get('/variavel')
            .then(response => {
                setListOfVariables(response.data.db_response)
            })

    })

    return (
        <VariablePageStyled>
            <div className={'variable_component'}>
                <div className={'title'}>
                    <div className={'variable_name'} >Nome</div>
                    <div className={'variable_type'} >Tipo</div>
                    <div className={'variable_value'}>Valor</div>
                </div>
                {listOfVariables.map( variable => {
                    return (
                        <div className={'variable_container'}>
                            <div className={'variable_name'} >  {variable.name }  </div>
                            <div className={'variable_type'} >  {variable.type }  </div>
                            <div className={'variable_value'}>  {variable.value}  </div>
                        </div>
                    )
                })}
            </div>
        </VariablePageStyled>
    );
}
