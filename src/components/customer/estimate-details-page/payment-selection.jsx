"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

const paymentOptions = [
  {
    id: "stripe",
    name: "Credit Card Payment",
    desc: "Pay each project as we complete it.",
    img: "/customer/root/estimate/stripe.png",
    url: "/customer/payment/stripe",
  },
  {
    id: "klarna",
    name: "Klarna: Buy Now, Pay Later",
    desc: "Pay in installments with Klarna.",
    img: "/customer/root/estimate/klarnaa.png",
    url: "/customer/payment/klarna",
  },
];

export default function PaymentMethodSelection() {
  const [selected, setSelected] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();

  const handleCheckout = () => {
    if (!selected || !accepted) return;
    router.push(paymentOptions.find((p) => p.id === selected).url);
  };

  return (
    <section className="max-w-xl my-4 mx-auto space-y-6">
      {/* Payment cards */}
      <div className="grid grid-cols-1 gap-4">
        {paymentOptions.map((option) => {
          const isSelected = selected === option.id;
          return (
            <Card
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`cursor-pointer rounded-md transition-all p-2 border hover:bg-primary/10 ${
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-gray-300 hover:border-primary/60"
              }`}
            >
              <CardContent className="flex flex-row items-center gap-3 justify-start p-1 space-y-1">
                <Image
                  src={option.img}
                  alt={option.name}
                  width={34}
                  height={34}
                  className="object-cover rounded-sm"
                />
                <div className="font-medium">
                  <p className="text-sm">{option.name}</p>
                  <p className="text-xs font-normal">{option.desc}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Terms & conditions */}
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" checked={accepted} onCheckedChange={setAccepted} />
        <label htmlFor="terms" className="text-sm text-gray-700">
          I accept the{" "}
          <a
            href="/customer/terms&conditions"
            target="_blank"
            className="text-primary"
          >
            Terms and Conditions
          </a>
        </label>
      </div>

      {/* Checkout button */}
      <Button
        className={`w-full p-7 text-lg ${
          !selected || !accepted ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={!selected || !accepted}
        onClick={handleCheckout}
      >
        Checkout Now
      </Button>
    </section>
  );
}
