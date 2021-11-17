import React, { useState } from 'react';
import {
  IconButton, InputAdornment,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PropTypes from 'prop-types';

function Input({
  value, title, onChange, type, style,
}) {
  Input.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    style: PropTypes.any,
  };

  Input.defaultProps = {
    value: '',
    title: '',
    type: 'text',
    style: null,
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (ev) => onChange(ev);

  return (
    <form className="input_form">
      <input
        className="pass_input"
        style={style}
        type={!showPassword ? 'text' : 'password'}
        placeholder={title}
        value={value}
        onChange={handleChange}
      />
      {
              type === 'password' && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              )
          }
    </form>
  );
}

export default Input;
