import React from 'react';

import { Grid } from '@mui/material';

import Header from './Header';
import AllNews from './AllNews';

function MainPage() {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      <AllNews />
    </Grid>
  );
}

export default MainPage;
