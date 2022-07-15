import React from 'react';

import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';

function NumberPagination() {
  return (
    <Grid item xs={0}>
      <Pagination count={10} color="primary" />
    </Grid>
  );
}

export default NumberPagination;
