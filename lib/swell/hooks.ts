'use client'

import { useEffect, useState } from "react"
import { CartItem } from "swell-js"
import { swell } from "./init/client"
import { useRouter } from 'next/navigation'
export const useCart = () => {
    const [cart, setCart] = useState<swell.Cart>()
    const router = useRouter()

    const getCart = async () => {
        const cart = await swell.cart.get() || {};
        setCart(cart)
    }

    const removeItem = async (item: string) => {
        const cart = await swell.cart.removeItem(item)
        getCart();
    }

    const addItem = async (item: CartItem) => {
        await swell.cart.setItems([])
        const cart = await swell.cart.addItem(item)
        //redirecting user to the cart checkout page
        if (cart?.checkout_url) {
            router.push(cart?.checkout_url);
        }
        getCart();
    }

    useEffect(() => {
        getCart()
    }, [])

    return { cart, addItem, removeItem }

}