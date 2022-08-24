import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@mui/material';

import Header from '../Header';
import AuthForm from './AuthForm';

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
      <AuthForm type={type === 'registration'
        ? 'registration'
        : 'login'}
      />
    </Grid>
  );
}

AuthPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default memo(AuthPage);
