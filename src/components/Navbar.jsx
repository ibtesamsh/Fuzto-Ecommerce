import React, { useContext } from "react";
import NavbarElement from "./NavbarElement";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import { CiSearch } from "react-icons/ci";

import Cart from "./Cart";
import { Context } from "../Context/Context";
import MenuList from "./MenuList";

function Navbar() {
  const { cart, setCart, menuList, setMenuList } = useContext(Context);

  return (
    <div className="sticky z-[1] h-[65px] w-full border-black bg-white shadow-xl flex justify-between items-center overflow-hidden  top-0">
      <div className=" ">
        <HiOutlineMenuAlt1
          className="m-5 text-2xl cursor-pointer"
          onClick={() => setMenuList(!menuList)}
        />
      </div>
      <Link to="/">
        <div>
          <h1 className="text-2xl font-bold">Fuzto</h1>
        </div>
      </Link>
      <div className=" flex flex-row justify-center text-center mx-3">
        <div className="hidden border rounded-full sm:flex items-center h-10 px-3 shadow-md hover:shadow-lg transition duration-300">
          <CiSearch className="text-l sm:text-xl text-gray-500" />
          <input
            type="text"
            className="ml-2 rounded-full border border-transparent focus:border-transparent outline-none placeholder-gray-400"
            placeholder="Search..."
          />
        </div>

        <div className="flex border rounded-full sm:hidden items-center h-10 px-3 cursor-pointer select-none shadow-md hover:shadow-lg transition duration-300">
          <CiSearch className="text-l sm:text-xl text-gray-500" onClick={() => {}} />
        </div>

        <div className="hidden sm:block">
          <NavbarElement />
        </div>
      </div>
      {cart ? <Cart /> : ""}
      {menuList ? <MenuList /> : ""}
    </div>
  );
}

export default Navbar;
