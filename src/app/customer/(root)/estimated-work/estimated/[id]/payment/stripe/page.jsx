import PaymentCheckoutPageComp from "@/components/customer/estimate-details-page/checkout-page";
import StripePaymentElement from "@/components/customer/estimate-details-page/stripe";

async function StripePaymentpage({ params }) {
  const { id } = await params;
  return (
    <main>
      <section>
        <PaymentCheckoutPageComp
          id={id}
          paymentProp={<StripePaymentElement />}
        />
      </section>
    </main>
  );
}

export default StripePaymentpage;
