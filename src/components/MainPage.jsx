import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import Header from './Header';
import AllNews from './AllNews';
import Loading from './Loading';

function MainPage() {
  const { loading } = useSelector((state) => state.auth);
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      { loading ? <Loading /> : <AllNews />}
    </Grid>
  );
}

export default memo(MainPage);
