import React from 'react';
import { Link } from "react-router-dom";

import Wrapper from './styles'

const ProductViewDetailsLink = ({ productId }) => (
  <Wrapper>
    <Link to={`/${productId}`}>
      View Details
    </Link>
  </Wrapper>
)

export default ProductViewDetailsLink;
