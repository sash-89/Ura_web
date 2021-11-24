import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@mui/material';
import classes from './style.module.scss';
import { ColorCheckbox } from '../form/ColorCheckbox';

const ColorFilterList = ({}) => {
  const colorCls = [classes.color];
  if (1) colorCls.push(classes.checked);

  return (
    <div className={classes.color_filter_wrapper}>
      <div className={colorCls.join(' ')}>
        <ColorCheckbox className={classes.checkbox} color="red" />

        Red
      </div>

      <div className={classes.color}>
        <ColorCheckbox className={classes.checkbox} color="pink" />

        Pink
      </div>

      <div className={classes.color}>
        <ColorCheckbox className={classes.checkbox} color="purple" />

        Purple
      </div><div className={colorCls.join(' ')}>
        <ColorCheckbox className={classes.checkbox} color="red" />

        Red
      </div>

      <div className={classes.color}>
        <ColorCheckbox className={classes.checkbox} color="pink" />

        Pink
      </div>

      <div className={classes.color}>
        <ColorCheckbox className={classes.checkbox} color="purple" />

        Purple
      </div><div className={colorCls.join(' ')}>
        <ColorCheckbox className={classes.checkbox} color="red" />

        Red
      </div>

      <div className={classes.color}>
        <ColorCheckbox className={classes.checkbox} color="pink" />

        Pink
      </div>

      <div className={classes.color}>
        <ColorCheckbox className={classes.checkbox} color="purple" />

        Purple
      </div>
    </div>
  );
};

ColorFilterList.propTypes = {

};

export default ColorFilterList;
