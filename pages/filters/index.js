import React, { useState } from 'react';
import { Button } from '@mui/material';
import Wrapper from '../../_src/components/_common/Wrapper';
import Range from '../../_src/components/range/Range';
import classes from './filters.module.scss';
import Breadcrumbs from '../../_src/components/breadcrumbs/breadcrumbs';
import TextButton from '../../_src/components/form/TextButton';
import Chip from '../../_src/components/chip/Chip';
import FilterAccordion from '../../_src/components/filterAccordion/FilterAccordion';

const links = [{
  link: '/',
  title: 'Home ',
}, {
  link: '/categories',
  title: 'All Categories',
}];

const Filters = () => {
  const [rangeValue, setRangeValue] = useState({
    startValue: '',
    endValue: '',
  });

  const { startValue, endValue } = rangeValue;

  const changeRangeValues = (path, value) => {
    if (path === 'range') {
      setRangeValue({
        startValue: `${value.target.value[0]}`,
        endValue: `${value.target.value[1]}`,
      });
    }

    setRangeValue((prev) => ({ ...prev, [path]: value }));
  };

  return (
    <Wrapper>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <Breadcrumbs links={links} />

          <div className={classes.sorting_wrapper}>
            Sort By:
          </div>
        </div>

        <div className={classes.content}>
          <div className={classes.left__block}>
            <div className={classes.selected_filters}>
              <div className={classes.selected_filters_top}>
                <div>
                  Selected filters
                </div>

                <TextButton
                  title="Clear All"
                />
              </div>

              <div className={classes.selected_filters_wrapper}>
                <Chip text="white" />
                <Chip text="black" />
              </div>
            </div>

            <FilterAccordion
              title="Price"
            >
              <Range
                startValue={startValue}
                endValue={endValue}
                onChange={changeRangeValues}
              />
            </FilterAccordion>

          </div>

          <div className={classes.right__block}>
            right
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Filters;
