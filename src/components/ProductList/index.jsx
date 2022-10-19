import { useState } from 'react';

import Product from "../ProductItem";

import { useTelegram } from "../../hooks/useTelegram";

import './styles.css'

const products = [
  {
    id: 1,
    title: 'Джинсы0',
    price: 5000,
    description: 'Red color'
  },
  {
    id: 2,
    title: 'Джинсы1',
    price: 5000,
    description: 'Green color'
  },
  {
    id: 3,
    title: 'Джинсы2',
    price: 5000,
    description: 'Grey color'
  },
  {
    id: 4,
    title: 'Джинсы3',
    price: 5000,
    description: 'Black color'
  },
  {
    id: 5,
    title: 'Джинсы4',
    price: 5000,
    description: 'Yellow color'
  },
  {
    id: 6,
    title: 'Джинсы5',
    price: 5000,
    description: 'Blue color'
  },
  {
    id: 7,
    title: 'Джинсы6',
    price: 5000,
    description: 'Orange color',
  },
]

const getTotalPrice = (items) => {
  items.reduce((acc, item) => {
    return acc += item.price
  }, 0)
}

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([])
  const { tg } = useTelegram()

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id)
    let newItems = []

    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id)
    } else {
      newItems = [...addedItems, product]
    }

    setAddedItems(newItems)

    if (newItems.length) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Buy: ${getTotalPrice(newItems)}`
      })
    }
  }

  return (
    <div className='list'>
      {products.map(item => (
        <Product product={item} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default ProductList;
