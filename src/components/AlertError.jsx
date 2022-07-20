import React from 'react';
import {
  Alert,
  AlertTitle,
  Stack,
  Grid,
} from '@mui/material';

function AlertError() {
  return (
    <Grid item xs={10}>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Page loading error, try again later
        </Alert>
      </Stack>
    </Grid>
  );
}

export default AlertError;
