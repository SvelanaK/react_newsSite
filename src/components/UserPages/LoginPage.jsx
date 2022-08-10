import React from 'react';
import { Grid } from '@mui/material';

import Header from '../Header';
import LoginForm from './forms/LoginForm';

function LoginPage() {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      <LoginForm />
    </Grid>
  );
}

export default LoginPage;
