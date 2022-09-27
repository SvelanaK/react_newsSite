import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import {
  TextField,
  Box,
  Button,
  Typography,
} from '@mui/material';

import { newsFields } from '../../constants/authFields';
import { newsValidationSchema } from '../../constants/validationSchema';
import { addNewsRequested } from '../../redux/actions/newsActions';

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
      className="modal"
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h4" component="div">
        Add news
      </Typography>
      <Box className="form">
        {newsFields.map(({ name, label, multiline }) => (
          <TextField
            required
            key={name}
            id={name}
            name={name}
            label={label}
            variant="outlined"
            type="text"
            multiline={multiline}
            maxRows={5}
            value={formik.values[name]}
            onChange={formik.handleChange}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
          />
        ))}
      </Box>
      <Button
        className="button"
        type="submit"
        variant="contained"
      >
        Post
      </Button>
    </Box>
  );
}

export default memo(NewsForm);
