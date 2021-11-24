import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './filterAccordion.module.scss';
import InputWithLabel from '../form/InputWithLabel';
import Minus from '../../assets/icons/minus.svg';
import Plus from '../../assets/icons/plus.svg';

const FilterAccordion = ({ title, children, search }) => {
  const [isOpen, setOpenToggle] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.top}>
        {title}

        <div
          className={classes.toggle_wrapper}
          onClick={() => setOpenToggle((prev) => !prev)}
        >
          {isOpen
            ? (
              <div className={classes.minus_wrapper}>
                <Minus className={classes.minus_svg} />
              </div>
            )

            : <Plus className={classes.plus_svg} />}
        </div>
      </div>

      <div className={classes.content_wrapper}>

        {isOpen && (
          <>
            {search && (
              <div className={classes.search_wrapper}>
                <InputWithLabel
                  label="Search"
                  search
                />
              </div>
            )}

            { children}
          </>
        )}

      </div>
    </div>
  );
};
FilterAccordion.propTypes = {
  title: PropTypes.string,
  search: PropTypes.bool,
  children: PropTypes.node,
};

FilterAccordion.defaultProps = {
  title: '',
  className: '',
  search: false,
};

export default FilterAccordion;
