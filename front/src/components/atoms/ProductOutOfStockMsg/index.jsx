import React from 'react';

import Wrapper from './styles'

const ProductOutOfStockMsg = ({ isThereStock }) => (
  <Wrapper>
    {!isThereStock && 'Out of Stock!'}
  </Wrapper>
)

export default ProductOutOfStockMsg;
