import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {
  Alert,
  AlertTitle,
  Stack,
  Grid,
} from '@mui/material';

function AlertError({ type }) {
  const { error } = useSelector((state) => state.auth);
  return (
    <Grid item xs={10}>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {type === 'auth' ? error : 'Something went wrong, please try again later'}
        </Alert>
      </Stack>
    </Grid>
  );
}

AlertError.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AlertError;
