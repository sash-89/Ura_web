import React, { useState } from 'react';
import PropTypes from 'prop-types';

function QtyCounter({ title, size }) {
  const [qtyCount, setQtyCount] = useState(1);
  return (
    <div className="qty_block">
      { title && <p>Qty</p> }
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <span onClick={() => setQtyCount(qtyCount - 1)}>-</span>
      <div style={{ width: size, height: size }}>
        {qtyCount}
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <span onClick={() => setQtyCount(qtyCount + 1)}>+</span>
    </div>
  );
}

QtyCounter.propTypes = {
  title: PropTypes.bool,
  size: PropTypes.number,
};

QtyCounter.defaultProps = {
  title: true,
  size: 48,
};

export default QtyCounter;
