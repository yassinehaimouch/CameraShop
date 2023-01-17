import React from 'react';
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { useDispatch, useSelector} from 'react-redux';
import { isClicked } from '../../redux/Slices/NavBarSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(isClicked());
  }

  const {amount} = useSelector(state => state.cartReducer)

  return (
    <nav className='py-10 mb-12 flex justify-between'>
      <a className=' text-2xl cursor-pointer' href='/'>CameraShop</a>
      <div className='relative' onClick={clickHandler}>
        <HiOutlineShoppingBag className=' text-3xl cursor-pointer'/>
        <div className=' bg-blue-300 rounded-full text-center w-6 h-6 z-1 absolute top-4 left-4 cursor-default'>{amount}</div>
      </div>
    </nav>
  )
}

export default Navbar;