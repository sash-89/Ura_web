import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import classes from './style.module.scss';
import ClearSvg from '../../assets/icons/close.svg';

const InputWithLabel = ({
  value, onChange, label, wrapperClassName, height, labelDefaultPosition, onPaste, onKeyPress,
  clearValue, clearBtnClassName, search,
}) => {
  const wrapperCls = [classes.text_field_wrapper, wrapperClassName];
  const clearCls = [classes.clear__svg, clearBtnClassName];

  const inputCls = [];
  if (value) inputCls.push(classes.with_value);
  if (clearValue) inputCls.push(classes.with_clear_btn);
  if (search) inputCls.push(classes.with_search_icon);

  return (
    <div style={{ height }} className={wrapperCls.join(' ')}>
      <input
        className={inputCls.join(' ')}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        onKeyPress={onKeyPress}
        onPaste={onPaste}
      />

      {clearValue && (
        <ClearSvg
          className={clearCls.join(' ')}
          onClick={() => onChange('')}
        />
      )}

      {search && (
        <SearchIcon className={classes.search_svg} />
      )}

      {label && <label style={{ '--default-position': `${labelDefaultPosition}px` }}>{label}</label>}
    </div>
  );
};

InputWithLabel.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  wrapperClassName: PropTypes.string,
  clearBtnClassName: PropTypes.string,
  label: PropTypes.string,
  height: PropTypes.number,
  clearValue: PropTypes.bool,
  search: PropTypes.bool,
  labelDefaultPosition: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func,
  onPaste: PropTypes.func,
};

InputWithLabel.defaultProps = {
  value: '',
  wrapperClassName: '',
  clearBtnClassName: '',
  label: '',
  height: 48,
  clearValue: false,
  search: false,
  labelDefaultPosition: 12,
  onKeyPress: () => {},
  onPaste: () => {},
};

export default InputWithLabel;
