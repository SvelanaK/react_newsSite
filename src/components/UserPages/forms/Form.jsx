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

import { loginRequested, registrationRequested } from '../../../redux/actions/authActions';
import { loginValidationSchema, registrationValidationSchema } from '../../../constants/validationSchema';

const loginFields = [
  {
    name: 'login',
    label: 'Login',
    type: 'text',
    style: 2,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    style: 6,
  },
];

const registrationFields = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    style: 4,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    style: 4,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    style: 4,
  },
  {
    name: 'login',
    label: 'Login',
    type: 'text',
    style: 4,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    style: 6,
  },
];

function Form({ type }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      login: '',
      email: '',
      password: '',
    },
    validationSchema: (type === 'registration' ? registrationValidationSchema : loginValidationSchema),
    onSubmit: (payload) => {
      if (type === 'registration') {
        dispatch(registrationRequested(payload));
      } else {
        dispatch(loginRequested(payload));
      }
    },
  });

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

  const regForm = registrationFields.map(componentForm);
  const logForm = loginFields.map(componentForm);

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
        { type === 'registration' ? regForm : logForm }
        <Button variant="outlined" sx={{ mb: 10 }} type="submit">Сonfirm</Button>
      </Box>
    </Grid>
  );
}

Form.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Form;
