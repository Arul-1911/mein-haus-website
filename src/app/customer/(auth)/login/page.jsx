import Link from "next/link";
import React from "react";

const CustomerLoginPage = () => {
  return (
    <>
      <div>Customer login page</div>
      <div>
        Dont have an account register{" "}
        <Link href="/customer/register">here</Link>
      </div>
    </>
  );
};

export default CustomerLoginPage;
