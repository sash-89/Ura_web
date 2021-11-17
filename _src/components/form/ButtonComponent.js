import React from 'react';
import {
  Button, CircularProgress,
} from '@mui/material';
import PropTypes from 'prop-types';

function ButtonComponent({
  title, onClick, className, loading,
}) {
  ButtonComponent.propTypes = {
    title: PropTypes.any,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.any,
    loading: PropTypes.bool,
  };

  ButtonComponent.defaultProps = {
    title: '',
    className: null,
    loading: false,
  };

  return (
    <Button
      className={`def_btn ${className && className}`}
      variant="contained"
      onClick={onClick}
    >
      { loading ? (<CircularProgress size={20} color="inherit" />) : title }
    </Button>
  );
}

export default ButtonComponent;
