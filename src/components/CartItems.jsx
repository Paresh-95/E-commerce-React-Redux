import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

function CartItems({ post }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item Removed from Cart");
  };

  return (
    <div className="flex flex-col md:flex-row w-full md:w-[650px] gap-4 mt-10 md:mt-14 border-b-2 border-black p-4">
      <div className="flex justify-center items-center">
        <img src={post.image} width={200}  className="pr-3" alt="img" />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-lg pb-5">{post.title}</h1>
        <h2 className="font-medium pb-5">
          {post.description.substring(0, 82)}...
        </h2>
        <div className="flex flex-row justify-between items-center">
          <p className="font-extrabold text-lg text-green-600">${post.price}</p>
          <button
            className="bg-red-300 rounded-full p-2"
            onClick={removeFromCart}
          >
            <MdDeleteOutline size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
