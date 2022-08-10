import * as yup from 'yup';

const loginValidationSchema = yup.object({
  login: yup
    .string('Enter your login')
    .max(20, 'Must be 20 characters or less')
    .required('Login is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default loginValidationSchema;
