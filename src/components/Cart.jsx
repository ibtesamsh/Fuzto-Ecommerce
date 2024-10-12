import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { Context } from '../Context/Context';
import CartItems from "./CartItem";

function Cart() {
    const { cart, setCart } = useContext(Context);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end overflow-y-auto">
            <div className="bg-white w-[90%] md:w-[30%] h-full border-l shadow-lg">
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-xl font-bold">BAG</h1>
                    <RxCross2 
                        className="text-2xl cursor-pointer hover:text-red-600" 
                        onClick={() => { setCart(!cart); }} 
                    />
                </div>
                <hr />
                <div className="p-4 overflow-y-auto h-[calc(100%-80px)] scrollbar-none scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                    <CartItems />
                </div>
            </div>
        </div>
    );
}

export default Cart;
