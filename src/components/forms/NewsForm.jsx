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
      <Box
        className="form"
      >
        {newsFields.map((el) => (
          <TextField
            required
            key={el.name}
            id={el.name}
            name={el.name}
            label={el.label}
            variant="outlined"
            type="text"
            multiline={el.multiline}
            maxRows={5}
            value={formik.values[el.name]}
            onChange={formik.handleChange}
            error={formik.touched[el.name] && Boolean(formik.errors[el.name])}
            helperText={formik.touched[el.name] && formik.errors[el.name]}
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
