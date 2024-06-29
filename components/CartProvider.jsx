'use client'

import { useState, useEffect } from 'react';
import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({ children }) => {
    const [urls, setUrls] = useState({
        successUrl: '',
        cancelUrl: ''
    });

    useEffect(() => {
        setUrls({
            successUrl: `${window.location.origin}/stripe/success`,
            cancelUrl: `${window.location.origin}/stripe/error`
        });
    }, []);

    if (!urls.successUrl || !urls.cancelUrl) {
        return null; // Or you can return a loading spinner if you prefer
    }

    return (
        <CProvider
            mode="payment"
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
            successUrl={urls.successUrl}
            cancelUrl={urls.cancelUrl}
            language="en-US"
            currency="EUR"
            billingAddressCollection={true}
            shouldPersist={true}
        >
            {children}
        </CProvider>
    );
};

export default CartProvider;