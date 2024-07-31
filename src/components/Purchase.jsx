import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeAll } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";
import paresh from "../assets/Paresh_Photo_1.png";

function Purchase() {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeAll());
  };

  function purchased() {
    toast.custom(
      <div
        id="toast-message-cta"
        className="w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 animate-bounce ease-in"
        role="alert"  
      >
        <div className="flex">
          <img
            className="w-8 h-8 rounded-full"
            src={paresh}
            alt="Jese Leos image"
          />
          <div className="ms-3 text-sm font-normal">
            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              Paresh
            </span>
            <div className="mb-2 text-sm font-normal">
              Hey User, Thank you for buying our products
            </div>
          </div>
          
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-7 p-4 md:p-8">
     {purchased()}
      <h1 className="font-bold text-lg sm:text-xl text-gray-800 text-center">
        Products Purchased Successfully
      </h1>
      <h1 className="font-bold text-lg sm:text-xl text-gray-800 text-center">
        Products will be Delivered to Your Address in a Few Days
      </h1>
      <Link to={"/"}>
        <button
          onClick={remove}
          className="py-2 px-6 sm:py-3 sm:px-10 bg-green-600 text-white rounded-lg font-bold text-center"
        >
          SHOP NOW
        </button>
      </Link>
    </div>
  );
}

export default Purchase;
