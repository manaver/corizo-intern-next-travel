"use client"

import { WishlistContext } from '@/provider/wishlist-provider'
import { useContext } from 'react'
import { Button } from '../ui/button'

export default function AddToCart({ product }: any) {

    const {
        cart,
        open,
        addItem,
        toggleCart
    } = useContext(WishlistContext);

    return <>
        <Button
            onClick={() => addItem({ product_id: product?.id, quantity: 1 })}
            className="w-fit mx-auto p-8 font-bold text-2xl bg-blue-600 hover:bg-blue-500 rounded-full"
        >
            Proceed To Checkout
        </Button>
    </>
}