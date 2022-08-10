import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import {
  Button,
  TextField,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import { registrationRequested } from '../../../redux/actions/authAction';

import registrationValidationSchema from './registrationValidationSchema';

function RegForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      login: '',
      email: '',
      password: '',
    },
    registrationValidationSchema,
    onSubmit: (payload) => {
      dispatch(registrationRequested(payload));
    },
  });

  return (
    <Grid
      item
      xs={7}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" component="div" sx={{ mb: 6, mt: 5 }}>
        REGISTRATION
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
          id="firstName"
          name="firstName"
          label="First Name"
          variant="filled"
          sx={{ mb: 4 }}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last Name"
          variant="filled"
          sx={{ mb: 4 }}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          variant="filled"
          sx={{ mb: 4 }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
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

export default RegForm;
