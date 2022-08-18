import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  Grid,
  Button,
} from '@mui/material';

import { logoutRequested } from '../redux/actions/authActions';

import '../App.css';

function Header() {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
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
              sx={{
                mr: 2,
                display: { md: 'flex' },
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to="/" className="link">News</Link>
            </Typography>
            <Box>
              { isAuth
                ? (
                  <>
                    <Button color="inherit">
                      <Link to="/users/profile" className="link">Profile</Link>
                    </Button>
                    <Button onClick={() => dispatch(logoutRequested())} color="inherit" sx={{ ml: 3 }}>
                      <Link to="/login" className="link">Logout</Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button color="inherit">
                      <Link to="/registration" className="link">Registration</Link>
                    </Button>
                    <Button color="inherit" sx={{ ml: 3 }}>
                      <Link to="/login" className="link">Login</Link>
                    </Button>

                  </>
                )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
}

export default Header;
