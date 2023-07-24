'use client'
import CustomerOnly from "@/private/CustomerOnly";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import CheckoutForm from "@/components/custormer/CheckoutForm/CheckoutForm";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);
const CheckoutPage = () => {
    const [clientSecret, setClientSecret] = useState('')
    const {axiosSecure} = useAxiosSecure()

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", {price: 150})
            .then((data) => {setClientSecret(data.data.clientSecret); console.log(data.data.clientSecret);})
            .catch(e=> console.log(e.message))
    }, []);

    console.log(clientSecret);


    const appearance = {
        theme: 'stripe',
      };
    const options = {
        clientSecret,
        appearance
    }

    return (
        // <CustomerOnly>
        <div className="h-screen flex items-center justify-center">
            {clientSecret && <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
            </Elements>}
        </div>
        // </CustomerOnly>

    );
};

export default CheckoutPage;