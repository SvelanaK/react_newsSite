import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@mui/material';

import Header from '../Header';
import Form from './Form';

function AuthPage({ type }) {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      { type === 'registration'
        ? <Form type="registration" />
        : <Form type="login" /> }
    </Grid>
  );
}

AuthPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AuthPage;
