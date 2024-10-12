
import React, { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
    const [cart, setCart] = useState(false); 
    const [menuList,setMenuList]= useState(false)

    return (
        <Context.Provider value={{ cart, setCart,menuList,setMenuList }}>
            {children}
        </Context.Provider>
    );
}
