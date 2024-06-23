"use client" // TODO CHECK IF IT NEEDS TO BE CLIENT
import React from 'react'
import {useShoppingCart} from "use-shopping-cart";
import {useToast} from "@/components/ui/use-toast";

const AddToCartBtn = ({btnStyles, text, icon, id, currency, name, description, images, price}) => {

    const {addItem} = useShoppingCart();
    const {toast} = useToast();
    const bike = {
        id: id,
        currency: currency,
        name: name,
        description: description,
        images: images,
        price: price,
    }
    return (
        <button className={`${btnStyles}`} onClick={() => {
            addItem(bike);
            toast({
                title: `${name} has been added to the cart`
            })
        }}>
            <div>{text}</div>
            <div>{icon}</div>
        </button>
    )
}
export default AddToCartBtn
