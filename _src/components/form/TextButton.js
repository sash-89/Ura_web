import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import classes from './style.module.scss';

const TextButton = ({ title, onClick, className }) => {
  const btnCls = [classes.text_btn_wrapper, className];

  return (
    <Button
      variant="text"
      onClick={onClick}
      className={btnCls.join(' ')}
    >
      {title}
    </Button>
  );
};

TextButton.propTypes = {
  title: PropTypes.string,
  className: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};

TextButton.defaultProps = {
  title: '',
  className: '',
};

export default TextButton;
