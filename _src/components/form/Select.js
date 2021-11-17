import React from 'react';
import { FormControl, InputLabel, Select } from '@mui/material';
import PropTypes from 'prop-types';

function SelectComponent({ options, title }) {
  SelectComponent.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array,
  };

  SelectComponent.defaultProps = {
    options: [],
  };
  return (
    <FormControl className="custom_select">
      <InputLabel htmlFor="grouped-native-select">{title}</InputLabel>
      <Select native defaultValue="" id="grouped-native-select" label={title}>
        { options.map((o, i) => <option key={o} value={i}>{o}</option>) }
      </Select>
    </FormControl>
  );
}

export default SelectComponent;
