
import Logo from '../img/test-logo.png'

import {Button, Grid,Stack, Typography,TextField, Alert } from "@mui/material";
import {useNavigate} from "react-router-dom"
import {useState} from 'react'
const Login = () => {

    const navigate = useNavigate();
    const [showError, setShowError] = useState({
        status:false,
        type:"",
        message:""
    })

  const [input, setInput ]= useState({
    email:"",
    password:""
  })
  const inputField = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input)
    console.log(input.password.length);

  };

    const handlerInput =async()=>{
        setInput({
            email:"",
            password:""
        })

     if (!input.email || !input.password) {
       setShowError({
         status: true,
         type: "error",
         message: "All field are required",
       });

     } else {
       try {
         // All api

         setShowError({
           status: true,
           type: "success",
           message: "login succesffully",
         });
       } catch (error) {}
     }

    }
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={3}>
      <Grid item>
        <img className='imageBlock' src={Logo} alt="img" />
      </Grid>
      <Grid item>
        <Stack spacing={4} component="form">
          <Stack>
            <Typography variant="h4">Great to have you here!</Typography>
            <Typography variant="subtitle">
              You can login to access your workspace.
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Button
              sx={{
                bgcolor: "black",
                color: "white",
                "&:hover": { bgcolor: "black" },
              }}
              variant="contained"
            >
              Login with Figma
            </Button>
            <Button
              sx={{
                bgcolor: "white",
                color: "black",
                "&:hover": { bgcolor: "whitesmoke" },
              }}
              variant="contained"
            >
              Login with Google
            </Button>
          </Stack>
          <Stack spacing={1}>
            {showError.status?<Alert severity={showError.type}>{showError.message}</Alert>:""}
            <TextField
              onChange={inputField}
              value={input.email}
              name="email"
              placeholder="Email"
              type="email"
              sx={{ bgcolor: "whitesmoke" }}
            />
            <TextField
              onChange={inputField}
              value={input.password}
              name="password"
              placeholder="Password"
              type="password"
              sx={{ bgcolor: "whitesmoke" }}
            />
            <Button variant="contained" onClick={handlerInput}>
              Login
            </Button>
            <Button>Login with SSO</Button>
          </Stack>
          <Stack spacing={2}>
            <Typography
              variant="body2"
              sx={{ color: "lightblue", cursor: "pointer" }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password
            </Typography>

            <Stack direction="row" spacing={2}>
              <Typography variant="body1">NO Account Yet?</Typography>
              <Typography
                variant="body1"
                sx={{ color: "Lightblue", cursor: "pointer" }}
                onClick={() => navigate("/signup")}
              >
                SignUp
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Login