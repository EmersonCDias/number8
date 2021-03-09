import React from 'react';

import Wrapper from './styles'

const ProductButton = ({ isThereStock, handleAddToCart }) => (
  <Wrapper>
    <button disabled={isThereStock} onClick={handleAddToCart}>
      Add to Cart
    </button>
  </Wrapper>
)

export default ProductButton;
