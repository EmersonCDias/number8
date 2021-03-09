import React, { useState, useEffect, useCallback } from 'react';

import ProductItem from "../../components/organisms/ProductItemOrganism";

import api from '../../services/axios';

const ProductListPage = () => {
  const [productsList, setProductsList] = useState([]);

  const handleGetData = useCallback(async () => {
    await api.get('/products').then(({ data }) => setProductsList(data));
  }, [])

  useEffect(handleGetData, [handleGetData]);

  return (
    <>
      {productsList.map(product => (
        <ProductItem
          key={product.id}
          id={product.id}
          brand={product.Brand}
          price={product.Price}
          pictureURL={product.PictureURL}
          name={product.Name}
          retailPrice={product['Retail Price']}
        />
      ))}
    </>
  )
};

export default ProductListPage;
