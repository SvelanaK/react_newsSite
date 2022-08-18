import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';

import {
  Button,
  TextField,
  Grid,
  Typography,
  Box,
} from '@mui/material';

import { loginRequested, registrationRequested } from '../../redux/actions/authActions';
import { loginValidationSchema, registrationValidationSchema } from '../../constants/validationSchema';
import { registrationFields, loginFields } from '../../constants/authFields';

import AlertError from '../AlertError';
import Loading from '../Loading';

function AuthForm({ type }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: (type === 'registration'
      ? {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        password: '',
      }
      : { login: '', password: '' }),
    validationSchema: (type === 'registration' ? registrationValidationSchema : loginValidationSchema),
    onSubmit: (payload) => {
      if (type === 'registration') {
        dispatch(registrationRequested(payload));
      } else {
        dispatch(loginRequested(payload));
      }
    },
  });

  const { isAuth, loading, error } = useSelector((state) => state.auth);

  if (isAuth) {
    return <Navigate replace to="/" />;
  }

  if (loading) {
    return <Loading />;
  }

  const componentForm = (el) => (
    <TextField
      required
      key={el.name}
      id={el.name}
      name={el.name}
      label={el.label}
      variant="filled"
      type={el.type}
      sx={{ mb: el.style }}
      value={formik.values[el.name]}
      onChange={formik.handleChange}
      error={formik.touched[el.name] && Boolean(formik.errors[el.name])}
      helperText={formik.touched[el.name] && formik.errors[el.name]}
    />
  );

  let authForm = '';
  if (type === 'registration') {
    authForm = registrationFields;
  } else {
    authForm = loginFields;
  }

  return (
    <Grid
      item
      xs={7}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h4" component="div" sx={{ mb: 6, mt: 5 }}>
        { type === 'registration' ? 'REGISTRATION' : 'LOGIN' }
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
        { authForm.map(componentForm) }
        <Button variant="outlined" sx={{ mb: 10 }} type="submit">Сonfirm</Button>
      </Box>
      { error ? <AlertError type="auth" /> : <Box /> }
    </Grid>
  );
}

AuthForm.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AuthForm;
