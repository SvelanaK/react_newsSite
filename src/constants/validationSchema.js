import * as yup from 'yup';

const password = yup
  .string('Enter your password')
  .min(8, 'Minimum 8 characters length')
  .required('Password is required');

const login = yup
  .string('Enter your login')
  .max(20, 'Must be 20 characters or less')
  .required('Login is required');

const firstName = yup
  .string('Enter your first name')
  .max(15, 'Must be 15 characters or less')
  .required('First Name is required');

const lastName = yup
  .string('Enter your last name')
  .max(20, 'Must be 20 characters or less')
  .required('Last Name is required');

const email = yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required');

export const registrationValidationSchema = yup.object({
  firstName,
  lastName,
  login,
  email,
  password,
});

export const loginValidationSchema = yup.object({
  login,
  password,
});
