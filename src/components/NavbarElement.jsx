import React,{useContext} from 'react'
import { Context } from "../Context/Context";
import { GoPerson } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

function NavbarElement() {
    const { cart, setCart,menuList,setMenuList } = useContext(Context);
  return (
    <div className=' w-full flex flex-row justify-around text-center mx-3 '>
        <Link to="/login">
          <GoPerson className="m-3 text-2xl cursor-pointer"  />
        </Link>
        <GoHeart className="m-3 text-2xl cursor-pointer" />

        <MdOutlineShoppingCart className="m-3 text-2xl cursor-pointer" onClick={()=>{setCart(!cart)}}/>
    </div>
  )
}

export default NavbarElement