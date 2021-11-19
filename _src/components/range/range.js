import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from '@mui/material';
import classes from './range.module.scss';

const Range = ({
  value, onChange, valuetext, className,
}) => (
  <Slider
    getAriaLabel={() => 'Temperature range'}
    value={value}
    onChange={onChange}
    valueLabelDisplay="auto"
    getAriaValueText={valuetext}
  />
);

Range.propTypes = {
  value: PropTypes.array.isRequired,
  valuetext: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Range.defaultProps = {
  className: '',
  valuetext: '',
};

export default Range;
