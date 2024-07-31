import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

function Card({ post }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item Removed from Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between transition-transform transform hover:scale-105 border-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] duration-300 ease-in-out gap-4 p-4 rounded-2xl ">
      <div className="text-center mb-2">
        <p className="text-lg font-bold">{post.title.substring(0, 16)}</p>
      </div>
      <div className="text-center mb-2">
        <p className="w-40 text-gray-400 text-sm text-center">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} alt="img" className="h-full w-full object-contain" />
      </div>
      <div className="flex flex-row justify-between items-center gap-4 w-full pt-4">
        <p className="font-extrabold text-lg text-green-600">$ {post.price}</p>
        {cart.some((p) => p.id === post.id) ? (
          <button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-xs p-1 px-3 uppercase">
            Remove Item
          </button>
        ) : (
          <button onClick={addToCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-xs p-1 px-3 uppercase">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
