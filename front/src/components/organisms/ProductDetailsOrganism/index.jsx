import React from 'react';

import ProductImg from "../../atoms/ProductImg";
import ProductName from "../../atoms/ProductName";
import ProductDescription from "../../atoms/ProductDescription";
import ProductButton from "../../atoms/ProductButton";
import ProductFooterInfo from "../../atoms/ProductFooterInfo";
import WrapPriceRetailMolecule from "../../molecules/WrapPriceRetailMolecule";
import ProductOutOfStockMsg from "../../atoms/ProductOutOfStockMsg";
import Modal from "../../atoms/Modal";

import { WrapMainInfo, WrapNameDescription, WrapPriceAction } from './styles'

const ProductDetailsOrganism = ({
  pictureURL,
  name,
  brand,
  description,
  price,
  retailPrice,
  color,
  isThereStock,
  badges,
  loading,
  handleAddToCart,
  openModal,
}) => (
  <>
    {loading
      ? <div>Loading</div>
      : (
        <>
          <WrapMainInfo>
            <ProductImg badges={badges} pictureURL={pictureURL} brand={brand} large />
            <WrapNameDescription>
              <ProductName name={name} />

              <ProductDescription description={description} />
            </WrapNameDescription>

            <WrapPriceAction>
              <WrapPriceRetailMolecule
                shouldCenter
                price={price}
                retailPrice={retailPrice}
              />

              <div>
                <ProductOutOfStockMsg isThereStock={isThereStock} />

                <ProductButton isThereStock={!isThereStock} handleAddToCart={handleAddToCart} />
              </div>
            </WrapPriceAction>
          </WrapMainInfo>

          <div>
            <div>
              <ProductFooterInfo
                info={brand}
                label="Brand"
              />
            </div>

            <div>
              <ProductFooterInfo
                info={color}
                label="Color"
              />
            </div>
          </div>

          <Modal openModal={openModal} />
        </>
      )
    }
  </>
)

export default ProductDetailsOrganism;
