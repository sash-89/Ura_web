import React from 'react';
import { InputAdornment, InputBase } from '@mui/material';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput({ value, onChange}) {
  return (
    <div className="search_in_menu">
      <InputBase
        className="search_input_in_menu"
        placeholder="Search…"
        value={value}
        onChange={({ target }) => onChange(target.value)}
        endAdornment={(
          <InputAdornment
            position="end"
          >
            <SearchIcon />
          </InputAdornment>
        )}
      />
    </div>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  value: '',
};

export default SearchInput;
