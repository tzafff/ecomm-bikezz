"use client"

import {Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet"
import {useShoppingCart} from "use-shopping-cart";
import {ScrollArea} from "@/components/ui/scroll-area";
import CartItem from "@/components/CartItem";
import CheckoutBtn from "@/components/CheckoutBtn";

const CartSidebar = () => {
    const {
        cartCount,
        cartDetails,
        shouldDisplayCart,
        handleCartClick,
        totalPrice
    } = useShoppingCart();

    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-left mb-12">My Shopping Cart({cartCount})</SheetTitle>
                </SheetHeader>
                <>
                    {cartCount === 0 ? (
                        <div className="flex flex-col items-center justify-center w-full h-[760px]">
                            <h5 className="text-black/50">Your cart is empty</h5>
                        </div>
                    ) : (
                        <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
                            {cartDetails && Object.entries(cartDetails).map(([key, item]) => {
                                return <CartItem item={item} key={key}/>
                            })}
                        </ScrollArea>
                    )}
                </>
                {cartCount > 0 &&
                    <div>
                        <div className="flex justify-between font-semibold">
                            <div className="uppercase mb-2">Total</div>
                            <div>{totalPrice}€</div>
                        </div>
                        <CheckoutBtn />
                    </div>}
            </SheetContent>
        </Sheet>
    )
}
export default CartSidebar
