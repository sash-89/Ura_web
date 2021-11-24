import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@mui/material';
import classes from './style.module.scss';

const FiltersList = (props) => {
  const optionCls = [classes.option];
  if (1) optionCls.push(classes.checked);

  return (
    <div className={classes.filters_wrapper}>
      <div className={optionCls.join(' ')}>
        <Checkbox className={classes.checkbox} />
        EUR 36, US 10
      </div>

      <div className={classes.option}>
        <Checkbox className={classes.checkbox} />
        EUR 37, US 11
      </div>
    </div>
  );
};

FiltersList.propTypes = {

};

export default FiltersList;
