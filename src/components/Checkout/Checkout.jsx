import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { isClicked } from "../../redux/Slices/NavBarSlice";
import { clear } from "../../redux/Slices/Cart-Slice";
import Item from "./Item";

const Checkout = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(isClicked());
  };

  const { amount, cartItems } = useSelector(
    (state) => state.cartReducer
  );

  const cartItemsLength = cartItems.length === 0 ? true : false;

  const total = cartItems.reduce((acc, element) => {
    acc += element.totalItem;
    return acc;
  }, 0);

  return (
    <div className="flex items-center justify-center">
      <div
        className="fixed bg-black opacity-20 w-full h-screen z-100 top-0 left-0"
        onClick={clickHandler}
      ></div>
      <div className=" absolute top-16 md:h-auto md:w-1/2 pb-11 bg-blue-100 z-50 rounded-xl max-md:h-screen max-md:w-full max-md:fixed max-md:top-0">
        <div className=" flex justify-between mx-4 py-6 max-md:mx-2">
          <h1
            className="flex items-center gap-1 font-semibold cursor-pointer"
            onClick={clickHandler}
          >
            <AiOutlineArrowLeft />
            Continue Shopping
          </h1>
          <h1 className=" font-semibold">Shopping Bag({amount})</h1>
        </div>
        <div>{cartItems.map(item => <Item key={item.id} title={item.title} price={item.price} image={item.image} id={item.id} amount={item.amount} totalItem = {item.totalItem}/>)}</div>
        {!cartItemsLength && (
          <div className="flex items-center justify-between mx-6 mt-6">
            <h1 className="font-semibold">Total Cost: ${total.toFixed(2)}</h1>
            <BsTrashFill className="w-6 h-6 cursor-pointer" onClick={() => dispatch(clear())}/>
          </div>
        )}
        {!cartItemsLength && (
          <div className="flex">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full mx-6 mt-6">
              Checkout
            </button>
          </div>
        )}
        {cartItemsLength && (
          <h1 className=" font-bold text-center m-16">YOUR CART IS EMPTY</h1>
        )}
      </div>
    </div>
  );
};

export default Checkout;
