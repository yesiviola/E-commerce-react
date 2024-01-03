import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as RouteLink} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [ message, setMessage]= useState('');
    const [password, setPassword] = useState("");
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [, dispatch] = useStateValue();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
        email: email,
        password: password,
      });
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log("Usuario creado:", user);
        dispatch({
            type: 'SET_USER',
            user: user,
        });
        setRedirectToHome(true);
    })
    .catch((error) => {
        if (error.code ==='auth/email-already-in-use') {
            // eslint-disable-next-line no-undef
            setMessage("El correo ya está en uso");
        } else {
            // eslint-disable-next-line no-undef
            setMessage("Error al crear el usuario");
        }
       
    });
    };
    if (redirectToHome) {
        return <Navigate to="/" />
    }
    
  const handleEmailChange =(event) => {
        setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
        setPassword(event.target.value);
  };
     return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                    onChange={handleEmailChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                    value={password}
                        onChange={handlePasswordChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
              {message && <p>{message}</p>}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouteLink to="/signin">
                Already have an account? Sign in
                </RouteLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>

  );
}



