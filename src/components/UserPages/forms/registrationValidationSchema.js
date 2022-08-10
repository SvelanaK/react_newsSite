import * as yup from 'yup';

const registrationValidationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .max(15, 'Must be 15 characters or less')
    .required('First Name is required'),
  lastName: yup
    .string('Enter your last name')
    .max(20, 'Must be 20 characters or less')
    .required('Last Name is required'),
  login: yup
    .string('Enter your login')
    .max(20, 'Must be 20 characters or less')
    .required('Login is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default registrationValidationSchema;
