import Logo from "../img/test-logo.png";
import Checkbox from "@mui/material/Checkbox";
import {
  Button,
  Grid,
  Stack,
  Typography,
  TextField,
  Alert,
  Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SignUp = () => {
  const navigate = useNavigate();
  const [showError, setShowError] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const inputField = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
    console.log(input.password.length);
  };

  const handlerInput = async () => {
    setInput({
      email: "",
      password: "",
    });

    if (!input.email || !input.password) {
      setShowError({
        status: true,
        type: "error",
        message: "All field are required",
      });
    } else if (input.password.length < 8) {
      setShowError({
        status: true,
        type: "error",
        message: "password must be 8 charater",
      });
    } else {
      try {
        // All api

        setShowError({
          status: true,
          type: "success",
          message: "sign up succesffully",
        });
      } catch (error) {}
    }
  };
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={3}>
      <Grid item>
        <img className="imageBlock" src={Logo} alt="img" />
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
            <TextField
              onChange={inputField}
              value={input.password}
              name="password"
              placeholder="Password"
              type="password"
              sx={{ bgcolor: "whitesmoke" }}
            />
            <Box>
              <Checkbox {...label} />
              <Typography variant="subtitle">
                I agree to Terms of Service
              </Typography>
            </Box>

            <Button variant="contained" onClick={handlerInput}>
              SignUp for free
            </Button>
            <Button>Login with SSO</Button>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Typography variant="body1">NO Account Yet?</Typography>
            <Typography
              variant="body1"
              sx={{ color: "Lightblue", cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Login
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SignUp;
