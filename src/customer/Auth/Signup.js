import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log("userData: ", userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              size="medium"
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name "
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              size="medium"
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              size="medium"
              type="email"
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              size="medium"
              type="password"
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="styledButton w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: "0.8rem 0" }}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="pb-0 pt-4 flex items-center">
          <p className="text-sm sm:text-normal">If you already have an account ?</p>
          <Button onClick={() => navigate("/signin")} className="ml-5" size="small">Sign In</Button>
        </div>
      </div>
    </div>
  );
}
