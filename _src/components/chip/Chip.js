import React from 'react';
import PropTypes from 'prop-types';
import classes from './chip.module.scss';
import ClearSvg from '../../assets/icons/close.svg';

const Chip = ({ text, onClear }) => (
  <div className={classes.wrapper}>
    {text}

    <ClearSvg
      className={classes.clear__svg}
      onClick={onClear}
    />
  </div>
);

Chip.propTypes = {
  text: PropTypes.string,
  onClear: PropTypes.func.isRequired,
};

Chip.defaultProps = {
  text: '',
};

export default Chip;
