'use client'
import React, { useState } from 'react';
import LoadingSpinner from '../HelpingCompo/LoadingSpinner';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js hasn't yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }
    
        setIsLoading(true);
        setMessage('')
    
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: "http://localhost:3000",
            isRequired: false
          },
        });
    
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message);
        } else {
          setMessage("An unexpected error occurred.");
        }
    
        setIsLoading(false);
      };
    
      const paymentElementOptions = {
        layout: "tabs",
      };


      

    return (
        <form onSubmit={handlePaymentSubmit} className='space-y-4 bg-green-500 bg-opacity-20 rounded p-5'>
            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <button type='submit' disabled={isLoading || !stripe || !elements} className={`${isLoading ? 'my-btn-one-disable' : 'my-btn-one'}`}>{isLoading ? <div className='loading bg-orange-500'></div> : 'Pay'}</button>
            <p>{message}</p>
        </form>
    );
};

export default CheckoutForm;