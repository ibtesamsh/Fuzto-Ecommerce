import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { Context } from "../Context/Context";
import { IoPersonCircleOutline } from "react-icons/io5";
import MenuListName from "../assets/Data/MenuListName.json";


function MenuList() {
  const { menuList, setMenuList } = useContext(Context);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-start">
     <div className="bg-white w-[90%]  md:w-[30%] h-full border-l shadow-lg">
        <div className="flex flex-row justify-between items-center p-4 border-b">
          <Link to='/Login'
           onClick={() => {
            setMenuList(!menuList);
          }}
          ><div className="flex flex-row justify-between cursor-pointer">
            <IoPersonCircleOutline className="m-auto text-[35px] text-gray-500" />
            <p className="my-auto mx-2">LOGIN</p>
          </div>
          </Link>
          <RxCross2
            className="text-2xl cursor-pointer hover:text-red-600"
            onClick={() => {
              setMenuList(!menuList);
            }}
          />
        </div>
        <hr />
        <div className="p-4">
          <ul>
            {MenuListName.map((item, index) => (
              <li key={index} className="py-2 cursor-pointer">
                {item.name}
              </li> // Access item.name directly
            ))}
          </ul>
        </div>
      <div>
       
      </div>
      </div>
    </div>
  );
}

export default MenuList;
