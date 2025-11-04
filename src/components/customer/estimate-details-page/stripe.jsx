"use client";

import { useRouter } from "next/navigation";

const { Button } = require("@/components/ui/button");
const {
  useStripe,
  useElements,
  CardElement,
  Elements,
} = require("@stripe/react-stripe-js");
const { loadStripe } = require("@stripe/stripe-js");
const { useState, useEffect } = require("react");

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// -------------------- MOCK BACKEND CALL --------------------
async function mockCreatePaymentIntent({ id }) {
  console.log("Mock: Creating PaymentIntent for ID:", id);

  await new Promise((res) => setTimeout(res, 1000));

  return {
    clientSecret: "pi_mocked_secret_1234567890",
    amount: 5992,
    projectName: "Mock Project X",
  };
}

function StripeCheckoutForm({ id }) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(null);
  const [projectName, setProjectName] = useState("");

  const router = useRouter();

  // Payment Intent creation
  useEffect(() => {
    (async () => {
      const { clientSecret, amount, projectName } =
        await mockCreatePaymentIntent({ id });
      setClientSecret(clientSecret);
      setAmount(amount);
      setProjectName(projectName);
    })();
  }, [id]);

  // handling payment
  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);

    router.push(`/customer/estimated-work/success`);
  };

  return (
    <form
      onSubmit={handlePayment}
      className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6 space-y-4"
    >
      <h1 className="text-xl font-semibold text-center">
        Paying for {"Mein haus"}
      </h1>
      {amount && (
        <p className="text-center text-gray-600 mb-2">Amount: ${amount}</p>
      )}

      <div className="border p-3 rounded-md">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#32325d",
                fontFamily: "system-ui, sans-serif",
                "::placeholder": { color: "#a0aec0" },
                padding: "12px 0",
              },
              invalid: { color: "#e53e3e" },
            },
          }}
        />
      </div>
      <Button
        type="submit"
        disabled={!stripe || loading}
        className="w-full mt-4"
      >
        {loading ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  );
}

export default function StripePaymentElement({ id }) {
  return (
    <Elements stripe={stripePromise}>
      <StripeCheckoutForm id={id} />
    </Elements>
  );
}
