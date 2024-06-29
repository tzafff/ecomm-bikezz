import {useShoppingCart} from "use-shopping-cart";
const CheckoutBtn = () => {
    const { redirectToCheckout, cartDetails } = useShoppingCart();
    const handleCheckout = async () => {
        try {
            const res = await redirectToCheckout();
            if(res?.error()) {
                console.log(res)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button className="btn btn-primary w-full rounded-full" onClick={handleCheckout}>Proceed to checkout</button>
    )
}
export default CheckoutBtn
