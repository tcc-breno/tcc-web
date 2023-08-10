import { CreationStyled } from "./styled"
import { verifyUserAndEmailEligibility, validateAndComparePasswords } from "../../../service/validators/userValidator"
import { createUser } from "../../../service/clients/userClient";

import { isLoggedIn } from "../../../service/authService"

import React, { useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const CreationPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [formStep, setFormStep] = useState(1);
  
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    });

    const setValidationResult = ( result ) => {
        if ( Object.values( result ).every(erro => erro === '') ) return true;
    
        setFormErrors( result );
        return false;
    }
  
    const validateFirstStep = async () => {
        let validationResult = await verifyUserAndEmailEligibility( { "username": username, "email": email } );
        return setValidationResult( validationResult );
    };

    const validateSecondStep = async () => {
        let validationResult = await validateAndComparePasswords({ 
            "password": password, 
            "passwordConfirmation": passwordConfirmation 
        });

        return setValidationResult( validationResult );
    }

    const handleFirstStep = async (e) => {
        e.preventDefault();
        if ( await validateFirstStep() ) setFormStep(2); 
    };

    const handleSecondStep = async (e) => {
        e.preventDefault();
        
        if ( await validateSecondStep() ){
            //TODO
            let userCreationResponse = await createUser({
                "username": username,
                "email":email,
                "password":password
            });
            //redirect
        }
    };

    return (
        <CreationStyled className="base_page">
            <Container 
                component="main" 
                className="creation" 
                sx={{ height:'80%', padding:'0px', display: "flex", alignItems: "center" }}
            >
                <Box 
                    sx={{ 
                        width: '60%', 
                        height:'100%',
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center",
                    }} 
                />
                <Container 
                    sx={{
                        width: '40%', 
                        height:'100%',
                        boxSizing:'border-box',
                        padding:'5% 0%',
                        display:'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    
                    <Box>
                        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }} > 
                            Registro 
                        </Typography>
                    </Box>
                    <Box 
                        sx={{
                            mt:'30px',
                            width: '100%' 
                        }}
                    
                    >
                        { formStep === 1 
                            ? (
                            <form onSubmit={ handleFirstStep }>
                                <TextField
                                    label="Nome"
                                    value={ username }
                                    onChange={(e) => setUsername(e.target.value)}
                                    error={!!formErrors.username}
                                    helperText={formErrors.username}
                                    fullWidth
                                    margin="normal"
                                />
                                
                                <TextField
                                    label="Email"
                                    type="email"
                                    value={ email }
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={!!formErrors.email}
                                    helperText={formErrors.email}
                                    fullWidth
                                    margin="normal"
                                />
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    fullWidth 
                                    color="primary"
                                >
                                    Próximo
                                </Button>
                            </form>
                            ):(
                            <form onSubmit={ handleSecondStep }>
                                <TextField
                                    label="Senha"
                                    type="password"
                                    value={ password }
                                    onChange={(e) => setPassword(e.target.value)}
                                    error={!!formErrors.password}
                                    helperText={formErrors.password}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Confirmar Senha"
                                    type="password"
                                    value={ passwordConfirmation }
                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                                    error={!!formErrors.passwordConfirmation}
                                    helperText={formErrors.passwordConfirmation} 
                                    fullWidth
                                    margin="normal"
                                />
                                <Button type="submit" variant="contained" color="primary">
                                    Cadastrar
                                </Button>
                            </form>
                            )
                        }
                    </Box>
                </Container>
            </Container>
        </CreationStyled>
    );
}