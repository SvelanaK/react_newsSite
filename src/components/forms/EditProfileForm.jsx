import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';

import { editUserPageRequested } from '../../redux/actions/usersActions';
import { profileValidationSchema } from '../../constants/validationSchema';
import { editProfileFields } from '../../constants/authFields';

function EditProfileForm({ handleClose }) {
  const dispatch = useDispatch();
  const [picture, changeFile] = useState(null);
  const { user } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: user.email,
      login: user.login,
    },
    validationSchema: profileValidationSchema,
    onSubmit: (payload) => {
      dispatch(editUserPageRequested({ values: payload, picture }));
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
    <Box>
      <form
        encType="multipart/form-data"
        onSubmit={formik.handleSubmit}
      >
        <Box className="edit-form">
          {editProfileFields.map(({ name, label }) => (
            <TextField
              key={name}
              id={name}
              name={name}
              label={label}
              variant="standard"
              type="text"
              value={formik.values[name]}
              onChange={formik.handleChange}
              error={formik.touched[name] && Boolean(formik.errors[name])}
              helperText={formik.touched[name] && formik.errors[name]}
            />
          ))}
          <Box className="edit-input-file">
            <Typography variant="caption">Avatar</Typography>
            <TextField
              required
              id="files"
              name="file"
              variant="standard"
              accept="image/*"
              type="file"
              onChange={handleFileChange}
            />
          </Box>
        </Box>
        <Box className="edit-buttons">
          <Button
            type="submit"
            variant="outlined"
          >
            Save changes
          </Button>
          <Button
            onClick={handleClose}
            variant="text"
          >
            Close
          </Button>
        </Box>
      </form>
    </Box>
  );
}

EditProfileForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default memo(EditProfileForm);
