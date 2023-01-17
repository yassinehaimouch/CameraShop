import React from 'react';
import Product from './Product';
import { DUMMY_DATA } from '../../DUMMY_DATA';


const Products = () => {
  return (
    <div className='flex justify-center flex-wrap gap-20 mb-52'>
      {DUMMY_DATA.map(item => {return <Product key={item.id} item={item}/>})}
    </div>
  )
}

export default Products;