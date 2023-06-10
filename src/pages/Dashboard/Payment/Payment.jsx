import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import CheckoutForm from "./CheckoutForm";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <SectionTitle
        subHeading="please process"
        heading="Payment"
      ></SectionTitle>
      <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
