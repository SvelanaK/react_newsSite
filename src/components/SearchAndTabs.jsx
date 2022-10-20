import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { tabsFields } from '../constants/formFields';

function SearchAndTabs({ setTextInput, setTab }) {
  return (
    <Grid
      item
      xs={10}
      sx={{
        display: 'flex', justifyContent: 'space-between', mb: 3,
      }}
    >
      <Box className="search">
        <Box className="icon-wrapper">
          <SearchIcon />
        </Box>
        <InputBase
          className="search-input"
          onChange={(event) => {
            setTextInput(event.target.value);
          }}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Box>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="all"
      >
        {tabsFields.map(({ value, label }) => (
          <div key={value}>
            <FormControlLabel
              value={value}
              control={<Radio />}
              label={label}
              onClick={(event) => {
                setTab(event.target.value);
              }}
            />
          </div>
        ))}
      </RadioGroup>
    </Grid>
  );
}

SearchAndTabs.propTypes = {
  setTab: PropTypes.func.isRequired,
  setTextInput: PropTypes.func.isRequired,
};

export default memo(SearchAndTabs);
