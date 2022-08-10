import React from 'react';
import { Grid } from '@mui/material';

import Header from '../Header';
import RegForm from './forms/RegForm';

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
      <RegForm />
    </Grid>
  );
}

export default RegPage;
