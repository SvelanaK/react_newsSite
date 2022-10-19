import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import {
  TextField,
  Box,
  Button,
  Typography,
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { newsFields } from '../../constants/formFields';
import { newsValidationSchema } from '../../constants/validationSchema';
import { addNewsRequested } from '../../redux/actions/newsActions';

function NewsForm({ open, handleClose }) {
  const dispatch = useDispatch();
  const [picture, changeFile] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: '',
      tag: '',
      content: '',
    },
    validationSchema: newsValidationSchema,
    onSubmit: (values) => {
      dispatch(addNewsRequested({ values, picture }));
      handleClose();
    },
  });

  const handleFileChange = (event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      changeFile(file);
    }
  };

  return (
    <Box
      className="modal"
      open={open}
      onClose={handleClose}
    >
      <Typography variant="h4" component="div">
        Add news
      </Typography>
      <form
        encType="multipart/form-data"
        onSubmit={formik.handleSubmit}
      >
        <Box className="form">
          {newsFields.map(({ name, label, multiline }) => (
            <TextField
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
          <Box className="file-input">
            <span>Add picture *</span>
            <input
              required
              id="files"
              name="file"
              accept="image/*"
              type="file"
              onChange={handleFileChange}
            />
            <PhotoCamera color="primary" />
          </Box>
        </Box>
        <Button
          className="button"
          type="submit"
          variant="contained"
        >
          Post
        </Button>
      </form>
    </Box>
  );
}

NewsForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default memo(NewsForm);
