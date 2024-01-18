'use client'

import { useCart } from "@/lib/swell/hooks";
import React from "react";

export const WishlistContext = React.createContext();

export const WishlistProvider = ({ children }) => {

    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const { cart, addItem, removeItem } = useCart();

    const toggleCart = () => {
        setOpen(!open);
    }

    return (
        <WishlistContext.Provider value={{
            cart,
            addItem,
            removeItem,
            open,
            setOpen,
            toggleCart,
            loading,
            setLoading
        }}>
            {children}
        </WishlistContext.Provider>
    );
}