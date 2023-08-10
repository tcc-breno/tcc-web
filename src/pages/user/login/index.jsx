import { LoginStyled } from "./styled"
import React, { useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { PassInput } from "../../../components/form/input/index";
import { validateLoginCredentials } from "../../../service/validators/userValidator";
import { login } from "../../../service/clients/userClient";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginErrors, setFormErrors] = useState({ email: '', password: '' });

    const verifyLoginFields = () => {
        let loginValidatorResult = validateLoginCredentials({ email: email, password:password })

        if ( Object.values( loginValidatorResult ).every(erro => erro === '') ) return true;
    
        setFormErrors(loginValidatorResult);
        return false
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if( verifyLoginFields() ) { 
            await login(email, password)
            .then(loginResponse => {
                if( loginResponse === true ){ 
                    alert('loged') 
                }
                else {
                    alert('error')
                    alert(loginResponse)
                }

            });
        }
    };  

    return (
        <LoginStyled className="base_page">
            <Container component="main" maxWidth="xs" className="login" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                    <Typography 
                        component="h1" 
                        variant="h5" 
                        sx={{ 
                            fontWeight: 'bold' 
                        }} 
                    >   
                        Login 
                    </Typography>
                    <form onSubmit={ handleSubmit }>
                        <TextField
                            margin="normal"
                            fullWidth
                            error={!!loginErrors.email}
                            helperText={loginErrors.email}
                            label="E-mail"
                            onChange={ (e) => { setEmail(e.target.value ) } }
                            autoFocus
                        />
                        <PassInput
                            label="Senha"
                            error={ loginErrors.password }
                            onChange={ (e) => { setPassword(e.target.value ) } }
                        />
                        <Button 
                            type="submit"                             
                            sx={{ mt: 3, mb: 2 }}
                            fullWidth 
                            variant="contained"  
                        >
                            Entrar
                        </Button>
                    </form>
                    <Grid container>
                        <Grid item>
                            <Link href="/registro" variant="body2"> {"Ainda não possue uma conta? Crie uma!"} </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </LoginStyled>
    );
}