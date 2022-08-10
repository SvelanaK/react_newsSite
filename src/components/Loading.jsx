import React from 'react';
import { CircularProgress, Box, Grid } from '@mui/material';

function Loading() {
  return (
    <Grid item xs={10}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 40 }}>
        <CircularProgress />
      </Box>
    </Grid>
  );
}

export default Loading;
