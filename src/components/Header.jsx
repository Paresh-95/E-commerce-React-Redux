import React from "react";
import img from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex flex-row bg-gray-900 p-2 text-white justify-around">
      <div className="">
        <NavLink to={"/"}>
          <img src={img} width={140} alt="img" /> 
        </NavLink>
      </div>
      <div className="flex flex-row gap-6 justify-center text-center items-center text-lg">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/cart"}>
          <div className="relative">
            <FaShoppingCart className="text-xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3  bg-green-500 w-5 h-5 text-xs justify-center rounded-full text-white items-center animate-bounce">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
