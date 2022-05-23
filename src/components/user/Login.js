import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../services/userAction';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email address')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of mininum 8 characters length')
    .required('Password is required'),
});

const Login = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (loading === 'failed') {
      enqueueSnackbar('Username/Password is wrong!', {
        variant: 'error',
      });
    } else if (loading === 'succeeded') {
      enqueueSnackbar('Login Success!', {
        variant: 'success',
      });
      navigate('/');
    }
  }, [loading]);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const credentials = {
        email: values.email,
        password: values.password,
      };
      dispatch(login(credentials));
    },
  });
  return (
    <form autoComplete='off' noValidate onSubmit={formik.handleSubmit}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper
          sx={{ display: 'flex', flexDirection: 'column', padding: '20px' }}
        >
          <Typography variant='h4'>Book Store Login</Typography>
          <TextField
            name='email'
            id='email'
            data-testid='email-testid'
            label='Enter email address'
            variant='outlined'
            placeholder='Enter email address'
            sx={{
              marginTop: '2rem',
            }}
            value={formik.values.email}
            onChange={formik.handleChange}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
          <TextField
            name='password'
            id='password'
            data-testid='password-testid'
            label='Enter password'
            variant='outlined'
            placeholder='Enter password'
            sx={{
              marginTop: '2rem',
            }}
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />

          <Button
            sx={{
              marginTop: '2rem',
            }}
            type='submit'
            variant='contained'
            color='primary'
            disabled={loading === 'pending'}
          >
            Login
          </Button>
        </Paper>
      </Box>
    </form>
  );
};

export default Login;
