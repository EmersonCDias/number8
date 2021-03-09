import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import ProductDetailWrapper from "../../components/organisms/ProductDetailsOrganism";
import model from './model';
import api from '../../services/axios';

const ProductDetailPage = () => {
  const [payload, setPayload] = useState({});
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { id } = useParams();

  const handleGetData = useCallback(async () => {
    setLoading(true);

    await api
      .get(`/products/${id}`)
      .then(({ data }) => setPayload(model(data)))
      .finally(() => setLoading(false));

  }, [id])

  useEffect(handleGetData, [handleGetData]);

  const handleAddToCart = useCallback(() => {
    setOpenModal(true);

    setTimeout(() => setOpenModal(false), 3000);
  }, []);

  return (
    <ProductDetailWrapper
      loading={loading}
      {...payload}
      handleAddToCart={handleAddToCart}
      openModal={openModal}
    />
  )
}

export default ProductDetailPage;
