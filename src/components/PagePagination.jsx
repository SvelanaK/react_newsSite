import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Grid, Pagination } from '@mui/material';

function PagePagination({ totalPages, currentPage, setCurrentPage }) {
  return (
    <Grid
      item
      xs={10}
      className="pagination"
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        size="large"
        color="primary"
        onChange={(event, value) => {
          setCurrentPage(value);
        }}
      />
    </Grid>
  );
}
PagePagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default memo(PagePagination);
