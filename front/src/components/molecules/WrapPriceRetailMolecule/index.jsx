import React from 'react'
import ProductPrice from "../../atoms/ProductPrice";
import ProductRetailPrice from "../../atoms/ProductRetailPrice";

import WrapPriceRetailPrice from './styles'

const WrapPriceRetailMolecule = ({ shouldCenter, price, retailPrice }) => (
  <WrapPriceRetailPrice shouldCenter={shouldCenter}>
    {price === retailPrice
      ? <ProductPrice shouldCenter={shouldCenter} price={price} />
      : (
        <>
          <ProductPrice price={price} />

          <ProductRetailPrice retailPrice={retailPrice} />
        </>
      )
    }
  </WrapPriceRetailPrice>
);

export default WrapPriceRetailMolecule;
