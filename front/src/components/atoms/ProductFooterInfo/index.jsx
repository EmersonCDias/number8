import React from 'react';

const ProductFooterInfo = ({ label, info }) => (
  <>
    <strong>{label}:</strong>

    <span> {info}</span>
  </>
);

export default ProductFooterInfo;
