import React from 'react';

import { Grid } from '@mui/material';

import Header from '../Header';
import Form from './forms/Form';

function RegPage() {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      <Form type="registration" />
    </Grid>
  );
}

export default RegPage;
