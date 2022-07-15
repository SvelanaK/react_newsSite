import React from 'react';

import { Grid } from '@mui/material';
import Header from './Header';
import AllNews from './AllNews';
import NumberPagination from './NumberPagination';

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
      <NumberPagination />
    </Grid>
  );
}

export default MainPage;
