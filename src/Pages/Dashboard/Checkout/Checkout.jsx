import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../../Components/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Checkout = () => {
    return (
        <div>
            <h1 className="text-2xl text-center max-w-60 mx-auto py-2 rounded mb-3 bg-gradient-to-r from-[#b2e0e2] via-[#92cccf] to-[#6ab1b3] text-white animate__animated animate__bounce">--- Checkout ---</h1>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Checkout;