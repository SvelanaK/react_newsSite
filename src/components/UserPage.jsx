import React from 'react';
import {
  Grid,
} from '@mui/material';

import Header from './Header';
import UserInfo from './UserInfo';

import '../App.css';

function UserPage() {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      <UserInfo />
    </Grid>
  );
}

export default UserPage;
