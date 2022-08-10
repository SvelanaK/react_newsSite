import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {
  Button,
  TextField,
  Grid,
  Typography,
  Box,
} from '@mui/material';

import { loginRequested } from '../../../redux/actions/authAction';

import loginValidationSchema from './loginValidationSchema';

function LoginForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    loginValidationSchema,
    onSubmit: (payload) => {
      dispatch(loginRequested(payload));
    },
  });

  const { isAuth } = useSelector((state) => state.auth);

  if (isAuth) {
    return <Navigate replace to="/" />;
  }

  return (
    <Grid
      item
      xs={7}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" component="div" sx={{ mb: 6, mt: 5 }}>
        LOGIN
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          required
          id="login"
          name="login"
          label="Login"
          variant="filled"
          sx={{ mb: 4 }}
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
        />
        <TextField
          required
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="filled"
          sx={{ mb: 6 }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button variant="outlined" sx={{ mb: 10 }} type="submit">Сonfirm</Button>
      </Box>
    </Grid>
  );
}

export default LoginForm;
