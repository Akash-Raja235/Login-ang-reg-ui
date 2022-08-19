
import Logo2 from "../img/logo2.png";

import {
  Button,
  Grid,
  Stack,
  Typography,
  TextField,
  Alert,
} from "@mui/material";

import { useState } from "react";

const ForgotPassword = () => {
 
  const [showError, setShowError] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [input, setInput] = useState({
    email: "",
   
  });
  const inputField = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
    
  };

  const handlerInput = async () => {
    setInput({
      email: "",
   
    });

    if (!input.email) {
      setShowError({
        status: true,
        type: "error",
        message: "Email is required",
      });
   
    } else {
      try {
      
     // send email
        setShowError({
          status: true,
          type: "success",
          message: "Send Email succesffully",
        });
      } catch (error) {}
    }
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{ mt: 5 }}
    >
      <Grid item>
        <img src={Logo2} alt="img" />
      </Grid>
      <Grid item>
        <Stack spacing={4} component="form">
          <Stack>
            <Typography variant="h4">Forgot your password?</Typography>
            <Typography variant="subtitle">
              No worries, we'll send you an email with instructions to reset
              your password
            </Typography>
          </Stack>

          <Stack spacing={1}>
            {showError.status ? (
              <Alert severity={showError.type}>{showError.message}</Alert>
            ) : (
              ""
            )}
            <TextField
              onChange={inputField}
              value={input.email}
              name="email"
              placeholder="Email"
              type="email"
              sx={{ bgcolor: "whitesmoke" }}
            />

            <Button variant="contained" onClick={handlerInput}>
              Send Email
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword