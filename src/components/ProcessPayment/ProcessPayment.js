import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Ie0mjSFXOGEwJeyyAsdJ5wArAcT75IcVpCWlEtudt3g0jUtbnK9QinWmEyZXEANoC5fzQpA3NyFEK7Ou8lskcWm001X8C0YPJ"
);

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
    </Elements>
  );
};

export default ProcessPayment;
