import Faq from "@/components/website/Faq";
import NoContent from "@/components/website/no-content";

const faqData = [
  {
    id: 1,
    question: "What is the refund policy?",
    answer:
      "We offer a 30-day refund policy for all our services. If you are not satisfied with our services, please contact us within 30 days of your purchase and we will refund your payment.",
  },
  {
    id: 2,
    question: "What is the refund policy?",
    answer:
      "We offer a 30-day refund policy for all our services. If you are not satisfied with our services, please contact us within 30 days of your purchase and we will refund your payment.",
  },
  {
    id: 3,
    question: "What is the refund policy?",
    answer:
      "We offer a 30-day refund policy for all our services. If you are not satisfied with our services, please contact us within 30 days of your purchase and we will refund your payment.",
  },
  {
    id: 4,
    question: "What is the refund policy?",
    answer:
      "We offer a 30-day refund policy for all our services. If you are not satisfied with our services, please contact us within 30 days of your purchase and we will refund your payment.",
  },
  {
    id: 5,
    question: "What is the refund policy?",
    answer:
      "We offer a 30-day refund policy for all our services. If you are not satisfied with our services, please contact us within 30 days of your purchase and we will refund your payment.",
  },
  {
    id: 6,
    question: "What is the refund policy?",
    answer:
      "We offer a 30-day refund policy for all our services. If you are not satisfied with our services, please contact us within 30 days of your purchase and we will refund your payment.",
  },
];

function Page() {
  if (!faqData.length) {
    return (
      <div>
        <NoContent />
      </div>
    );
  }
  return (
    <section className="w-full mt-8 mb-14 px-3 md:px-4 lg:px-2 max-w-3xl mx-auto">
      <h2 className="font-semibold text-center text-4xl">
        We're here to answer all your questions
      </h2>
      <p className="text-base text-center my-4 text-[#ABABAB]">
        If you're new to this platform, don't worry — we've got you covered!
        Here are some frequently asked questions to help you get started.
      </p>
      <div>
        <Faq data={faqData} />
      </div>
    </section>
  );
}

export default Page;
