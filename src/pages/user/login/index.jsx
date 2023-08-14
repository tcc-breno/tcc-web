import { LoginStyled } from "./styled"

import * as React from 'react';
import { useState } from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PopperAlert from '../../../components/alert/index';
import { useNavigate } from 'react-router-dom';
import { login } from "../../../service/clients/userClient";
import { PassInput } from "../../../components/form/input/index";
import { validateLoginCredentials } from "../../../service/validators/userValidator";

export const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setFormErrors] = useState({ email: '', password: '' });

  const verifyLoginFields = () => {
    let loginValidatorResult = validateLoginCredentials({ email: email, password: password })

    if (Object.values(loginValidatorResult).every(erro => erro === '')) return true;

    setFormErrors(loginValidatorResult);
    return false
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if( verifyLoginFields() ) { 
        try{
            await login(email, password)
            .then(loginResponse => {
                if( loginResponse === true ){ 
                    navigate('/');
                }
            });
        }
        catch(e){
          setErrorMessage(e.response.data.error ?? "Algo de errado aconteceu!");
        }

    }
  };

  return (
    <LoginStyled className="base_page">
      {errorMessage && <PopperAlert message={errorMessage} setMessage={setErrorMessage} />}
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
          <Container>
            <TextField
              margin="normal"
              fullWidth
              error={!!loginErrors.email}
              helperText={loginErrors.email}
              label="E-mail"
              onChange={(e) => { setEmail(e.target.value) }}
              autoFocus
            />
            <PassInput
              label="Senha"
              error={loginErrors.password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <Button
              type="submit"
              sx={{ mt: 3, mb: 1 }}
              fullWidth
              variant="contained"
              onClick={handleSubmit}
            >
              Entrar
            </Button>
            <Link href="/registro" variant="body2"> {"Ainda não possue uma conta? Crie uma!"} </Link>

          </Container>
        </Box>
      </Container>
    </LoginStyled>
  );
}