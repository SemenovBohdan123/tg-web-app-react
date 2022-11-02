import { useState, useCallback, useEffect } from 'react';

import Product from "../ProductItem";

import { useTelegram } from "../../hooks/useTelegram";

import './styles.css'

const products = [
  {
    id: '1',
    title: 'Джинсы0',
    price: 777,
    description: 'Red color'
  },
  {
    id: '2',
    title: 'Джинсы1',
    price: 666,
    description: 'Green color'
  },
  {
    id: '3',
    title: 'Джинсы2',
    price: 555,
    description: 'Grey color'
  },
  {
    id: '4',
    title: 'Джинсы3',
    price: 444,
    description: 'Black color'
  },
  {
    id: '5',
    title: 'Джинсы4',
    price: 333,
    description: 'Yellow color'
  },
  {
    id: '6',
    title: 'Джинсы5',
    price: 222,
    description: 'Blue color'
  },
]

const getTotalPrice = (items) => {
  const sum = items.reduce((acc, item) => {
    return acc += item.price
  }, 0)

  return sum
}

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([])
  const { tg, queryId } = useTelegram()


  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId: queryId
    }
    fetch('http://localhost:8000/web-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  }, [addedItems, queryId])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData, tg])

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id)
    let newItems = []

    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id)
    } else {
      newItems = [...addedItems, product]
    }

    setAddedItems(newItems)

    if (newItems.length === 0) {
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
        <Product product={item} selecetData={addedItems} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default ProductList;
