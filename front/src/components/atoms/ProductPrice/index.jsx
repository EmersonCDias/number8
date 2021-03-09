import React from 'react';

import Wrapper from './styles'

const ProductRetailPrice = ({ shouldCenter, price }) => (
  <Wrapper shouldCenter={shouldCenter}>
    ${price}
  </Wrapper>
)

export default ProductRetailPrice;
