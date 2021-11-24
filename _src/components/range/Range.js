import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox, Slider} from '@mui/material';
import { styled } from '@mui/styles';
import classes from './range.module.scss';
import InputWithLabel from '../form/InputWithLabel';
import Utils from '../../utils/utils';

const StyledRange = styled(Slider)(({
  color: '#ff5722',

  '& .MuiSlider-rail, & .MuiSlider-track': {
    background: '#E3E3E7',
    border: 'none',
    height: 6,
  },

  '& .MuiSlider-track': {
    background: 'linear-gradient(270deg, #F34200 1.39%, #FFDEC8 97.5%)',
  },

  '& .MuiSlider-thumb': {
    color: '#FF7E27',

    '&:hover, &.Mui-focusVisible': {
      boxShadow: 'rgba(255, 85, 0, 0.33) 0 0 0 8px',
    },

    '&.Mui-active': {
      boxShadow: 'rgba(255, 85, 0, 0.33) 0 0 0 14px',
    },

    '&:last-child': {
      color: '#ff5722',

      '&:hover, &.Mui-focusVisible': {
        boxShadow: 'rgba(244, 67, 54, 0.33) 0 0 0 8px',
      },

      '&.Mui-active': {
        boxShadow: 'rgba(244, 67, 54, 0.33) 0 0 0 14px',
      },
    },
  },
}));

const Range = ({
  startValue, endValue, onChange, valuetext, rangeMin, rangeMax,
}) => (
  <div className={classes.range_wrapper}>
    <div className={classes.range_input_wrapper}>
      <InputWithLabel
        height={32}
        labelDefaultPosition={5}
        value={startValue}
        clearValue
        onChange={(value) => onChange('startValue', value)}
        onKeyPress={(e) => Utils.keyPressCurrency(e, false, rangeMax)}
        onPaste={(e) => Utils.keyPressCurrency(e, true, rangeMax)}
      />

      <InputWithLabel
        height={32}
        labelDefaultPosition={5}
        value={endValue}
        clearValue
        onChange={(value) => onChange('endValue', value)}
        onKeyPress={(e) => Utils.keyPressCurrency(e, false, rangeMax)}
        onPaste={(e) => Utils.keyPressCurrency(e, true, rangeMax)}
      />
    </div>

    <StyledRange
      value={[+startValue, +endValue]}
      onChange={(value) => onChange('range', value)}
      getAriaValueText={valuetext}
      min={rangeMin}
      max={rangeMax}
    />
  </div>
);

Range.propTypes = {
  startValue: PropTypes.string,
  endValue: PropTypes.string,
  rangeMin: PropTypes.number,
  rangeMax: PropTypes.number,
  valuetext: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Range.defaultProps = {
  startValue: '',
  endValue: '',
  rangeMin: 0,
  rangeMax: 100,
  valuetext: '',
};

export default Range;
