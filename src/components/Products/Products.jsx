import React from 'react';
import Product from './Product';
import { DUMMY_DATA } from '../../DUMMY_DATA';


const Products = () => {
  return (
    <div className='flex justify-center gap-20 flex-wrap mb-52 xl:gap-11'>
      {DUMMY_DATA.map(item => {return <Product key={item.id} item={item}/>})}
    </div>
  )
}

export default Products;