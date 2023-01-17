import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/Slices/Cart-Slice";

const Product = ({item}) => {

  const {price, title, image} = item;
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(add(item));
  }
  return (
    <div className=" w-72 shadow-sm h-72">
      <div className=" h-52"><img src={image} alt="product"/></div>
      <div className="flex justify-between py-5 px-3">
        <div>
          <h1 className="text-bold font-medium">{title}</h1>
          <h1 className=" font-bold">${price}</h1>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clickHandler}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
