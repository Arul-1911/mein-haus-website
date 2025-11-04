import PaymentCheckoutPageComp from "@/components/customer/estimate-details-page/checkout-page";

async function KlarnaPaymentPage({ params }) {
  const { id } = await params;
  return (
    <main>
      <div>
        <PaymentCheckoutPageComp id={id} />
      </div>
    </main>
  );
}

export default KlarnaPaymentPage;
