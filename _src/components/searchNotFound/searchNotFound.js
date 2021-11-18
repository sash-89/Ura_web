import React from 'react';
import PropTypes from 'prop-types';
import classes from './searchNotFound.module.scss';
import NotFoundSvg from '../../assets/icons/search_not_found.svg';

const SearchNotFound = ({ value, className }) => {
  const wrapperCls = [classes.wrapper, className];

  return (
    <div className={wrapperCls.join(' ')}>

      <NotFoundSvg />

      {`We have not found any results for “${value}”`}
    </div>
  );
};

SearchNotFound.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SearchNotFound.defaultProps = {
  className: '',
};

export default SearchNotFound;
