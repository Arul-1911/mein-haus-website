import Link from "next/link";
import React from "react";

const CustomerRegisterPage = () => {
  return (
    <>
      <div>Customer Register page</div>
      <div>
        already have an account login <Link href="/customer/login">here</Link>
      </div>
    </>
  );
};

export default CustomerRegisterPage;
