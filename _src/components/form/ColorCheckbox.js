import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@mui/material';
import classes from './style.module.scss';

export const ColorCheckbox = ({
  label, id, onChange, className, checked, color,
}) => (
  <div className={`${classes.checkboxWrapper} ${className}`}>
    {label && (
      <span className={classes.label}>
          {label}
      </span>
    )}

    <input
      type="checkbox"
      id={id || new Date().getMilliseconds()}
      onChange={onChange}
      checked={checked}
    />

    <MenuItem component="span" className={classes.menu_item}>
      <label className={classes.checkbox} htmlFor={id || new Date().getMilliseconds()}>
        <span style={{ background: color }} />
      </label>
    </MenuItem>
  </div>
);

ColorCheckbox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

ColorCheckbox.defaultProps = {
  label: '',
  id: '',
  color: '',
  className: '',
  // checked: true,
};
