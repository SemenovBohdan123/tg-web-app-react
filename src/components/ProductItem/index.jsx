import React from 'react';

import Button from "../Button";

import "./styles.css";

const ProductItem = ({ product, className, onAdd, selecetData }) => {

  const onAddHeandler = () => {
    onAdd(product)
  }

  return (
    <div className={'product' + className}>
      <div className='img' />
      <div>{product.title}</div>
      <div className='description'>{product.description}</div>
      <div>
        <span>Стоимость: <b>{product.price}</b></span>
      </div>
      <Button className='add-btt' onClick={() => onAddHeandler()}>
        {selecetData.find(item => item.id === product.id) ? 'Удалить из корзины' : 'Добавить в корзину'}
      </Button>
    </div>
  );
};

export default ProductItem;
