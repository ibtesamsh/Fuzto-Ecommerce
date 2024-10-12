import React, { useState } from 'react';

const items = [
    {
        "image": "https://5.imimg.com/data5/XQ/ML/TL/SELLER-69111335/high-quality-mens-long-sleeve-shirts1.jpg",
        "name": "T-Shirt",
        "price": "1999",
        "size": ["S"]
    },
    {
        "image": "https://5.imimg.com/data5/XQ/ML/TL/SELLER-69111335/high-quality-mens-long-sleeve-shirts1.jpg",
        "name": "T-Shirt",
        "price": "1999",
        "size": ["S"]
    },
    {
        "image": "https://5.imimg.com/data5/XQ/ML/TL/SELLER-69111335/high-quality-mens-long-sleeve-shirts1.jpg",
        "name": "T-Shirt",
        "price": "1999",
        "size": ["S"]
    },
    {
        "image": "https://5.imimg.com/data5/XQ/ML/TL/SELLER-69111335/high-quality-mens-long-sleeve-shirts1.jpg",
        "name": "T-Shirt",
        "price": "1999",
        "size": ["S"]
    },
    // Repeat the item structure as needed
];

const CartItems = () => {
    
    const [quantities, setQuantities] = useState(items.map(() => 1));

    const increment = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    const decrement = (index) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 1) {
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
        }
    };

    return (
        <div className="shadow-lg border">
            {items.map((item, index) => (
                <div key={index} className="flex mb-4">
                    <div className="w-[180px]">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-[200px] object-cover rounded-lg"
                        />
                    </div>
                    <div className="ml-5 space-y-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-700">Price: ₹{item.price}</p>
                        <div className="flex flex-row ">
                            <p className="text-gray-600">Sizes:</p>
                            <ul className="mx-2">
                                {item.size.map((size, sizeIndex) => (
                                    <li key={sizeIndex}>{size}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-row border justify-between items-center">
                            <button 
                                className="p-2 text-lg hover:bg-black hover:text-white" 
                                onClick={() => decrement(index)}
                            >
                                -
                            </button>
                            <div>{quantities[index]}</div>
                            <button 
                                className="p-2 text-lg hover:bg-black hover:text-white" 
                                onClick={() => increment(index)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItems;
