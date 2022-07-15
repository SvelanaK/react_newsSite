import React from 'react';

import {
  Button,
  Typography,
  AppBar,
  Box,
  Toolbar,
  Grid,
} from '@mui/material/';

function Header() {
  return (
    <Grid item xs={10}>
      <Box sx={{ mb: 3 }}>
        <AppBar position="static">
          <Toolbar
            sx={{ display: { md: 'flex' }, justifyContent: 'space-between' }}
          >
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { md: 'flex' },
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              News
            </Typography>
            <Button
              href="/login"
              color="inherit"
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
}

export default Header;
