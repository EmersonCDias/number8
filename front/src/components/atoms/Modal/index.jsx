import React from 'react';

import Wrapper from './styles';

const Modal = ({ openModal }) => (
  <>
    {openModal && <Wrapper>Product added successfully</Wrapper>}
  </>
)

export default Modal;
