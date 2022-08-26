import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import {
  Button,
  TextField,
  Box,
  Typography,
} from '@mui/material';

import { newsFields } from '../../constants/authFields';
import { newsValidationSchema } from '../../constants/validationSchema';
import { addNewsRequested } from '../../redux/actions/usersActions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function NewsForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: '',
      tag: '',
      content: '',
    },
    validationSchema: newsValidationSchema,
    onSubmit: (payload) => {
      dispatch(addNewsRequested(payload));
    },
  });

  return (
    <Box
      sx={style}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h4" component="div" sx={{ mb: 5, mt: 2 }}>
        Add news
      </Typography>
      { newsFields.map((el) => (
        <TextField
          required
          key={el.name}
          id={el.name}
          name={el.name}
          label={el.label}
          variant="outlined"
          type="text"
          multiline={el.multiline}
          sx={{ mb: 2, width: 600 }}
          value={formik.values[el.name]}
          onChange={formik.handleChange}
          error={formik.touched[el.name] && Boolean(formik.errors[el.name])}
          helperText={formik.touched[el.name] && formik.errors[el.name]}
        />
      )) }
      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          mb: 4,
          width: 600,
          height: 50,
        }}
      >
        Post
      </Button>
    </Box>
  );
}

export default memo(NewsForm);
