import React from 'react';
import Wrapper from '../../_src/components/_common/Wrapper';
import Range from '../../_src/components/range/range';

const Filters = () => (
  <Wrapper>
    <div>
      <Range value={[20, 37]} />
    </div>
  </Wrapper>
);

export default Filters;
