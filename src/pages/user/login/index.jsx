import {LoginStyled} from "./styled"
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
export const LoginPage = () => {

    const [user, setUser] = useState('');

    return (
        <LoginStyled className="base_page">
                {user}
                <TextField label="Nome ou E-mail" className="userInput" onChange={(event) => {setUser(event.target.value)}} variant="outlined" />
        </LoginStyled>
    );
}
