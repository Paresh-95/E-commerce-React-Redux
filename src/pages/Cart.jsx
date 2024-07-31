import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CartItem from "../components/CartItems";
import { Link } from "react-router-dom";

function Cart() {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row md:flex-col justify-center gap-10 p-4">
          <div className="">
            {cart.map((post, index) => (
              <CartItem key={post.id} post={post} postIndex={index} />
            ))}
          </div>
          <div className="flex flex-col mt-10 md:mt-20">
            <div className="font-extrabold text-green-600 tracking-wide">
              YOUR CART
            </div>
            <div className="font-extrabold text-green-600 tracking-wide text-2xl md:text-4xl mb-5">
              SUMMARY
            </div>
            <p className="font-extrabold text-gray-700 mb-5">
              <span>Total Items: {cart.length}</span>
            </p>
            <div className="">
              <p className="font-extrabold text-gray-700 mb-5">
                Total Amount: ${totalAmount}
              </p>
              <Link to={"/purchased"}>
                <button className="py-3 px-10 md:px-28 justify-center bg-green-600 text-center text-white rounded-lg font-bold">
                  Checkout Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen gap-7">
          <h1 className="font-bold text-xl text-gray-800">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
            <button className="py-3 px-10 justify-center bg-green-600 text-center text-white rounded-lg font-bold">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
