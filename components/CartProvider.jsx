'use client'

import {CartProvider as CProvider} from "use-shopping-cart";

const CartProvider = ({children}) => {
    return (
        <CProvider
            mode="payment"
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
            successUrl={`${window.location.origin}/stripe/success`}
            cancelUrl={`${window.location.origin}/stripe/error`}
            language="en-US"
            currency="EUR"
            billingAddressCollection={true}
            shouldPersist={true}
        >
            {children}
        </CProvider>
    )
}
export default CartProvider
