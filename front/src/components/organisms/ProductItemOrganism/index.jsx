import React from 'react';

import ProductImg from "../../atoms/ProductImg";
import ProductName from "../../atoms/ProductName";
import ProductViewDetailsLink from "../../atoms/ProductViewDetailsLink";
import WrapPriceRetailMolecule from '../../molecules/WrapPriceRetailMolecule'

import {
  Wrapper,
  WrapImgNamePrice,
  WrapNamePrice,
} from './styles'

const ProductItemOrganism = ({ brand, pictureURL, name, id, retailPrice, price }) => (
  <Wrapper>
    <WrapImgNamePrice>
      <ProductImg brand={brand} pictureURL={pictureURL} />

      <WrapNamePrice>
        <ProductName name={name} />

        <WrapPriceRetailMolecule price={price} retailPrice={retailPrice} />
      </WrapNamePrice>
    </WrapImgNamePrice>

    <ProductViewDetailsLink productId={id} />
  </Wrapper>
)

export default ProductItemOrganism;
