import React from 'react';
import {GrFormClose} from 'react-icons/gr';
import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { increase, remove, decrease } from '../../redux/Slices/Cart-Slice';


const Item = (props) => {
  const dispatch = useDispatch();
  return (
    <div className='flex justify-between mx-6 max-md:mx-2 max-md:pr-2 mb-2 items-center border-2 border-sky-500 pr-5'>
      <img src={props.image} alt="img" className=' w-48 max-md:w-1/2'/>
      <div>
        <h1 className='mb-2 font-semibold'>{props.title}</h1>
        <div className='flex items-center gap-5 max-md:gap-2'>
          <AiFillMinusCircle className='w-6 h-6 cursor-pointer' onClick={() => {dispatch(decrease(props))}} />
          <h1 className='font-semibold'>{props.amount}</h1>
          <AiFillPlusCircle className='w-6 h-6 cursor-pointer' onClick={() => {dispatch(increase(props))}}/>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <GrFormClose className='w-6 h-6 cursor-pointer' onClick={() => {dispatch(remove(props))}}/>
        <h1 className='font-semibold'>${props.totalItem.toFixed(2)}</h1>
      </div>
    </div>
  )
}

export default Item