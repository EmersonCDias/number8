import React from 'react';

import Wrapper from './styles'

const ProductImgProduct = ({ badges, large, pictureURL, brand }) => (
  <Wrapper large={large}>
    <img src={pictureURL} alt={brand} />

    <span>
      {badges && badges.map((badge, idx) => (
        <div key={idx}>{badge}</div>
      ))}
    </span>
  </Wrapper>
)

export default ProductImgProduct;
