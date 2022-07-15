import React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material';

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
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
}

export default Header;
