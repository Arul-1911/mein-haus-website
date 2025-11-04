import Photos from "../photos";
import InvoiceTable from "./invoice-table";

const invoiceDataArray = [
  {
    id: 2,
    bookingDetails: {
      bookingId: "#OD - 234J78934",
      issueDate: "03-02-2025",
    },
    companyInfo: {
      name: "MeinHaus",
      address: {
        street: "6 - 425, Hespeler Road",
        unit: "unit #303",
        city: "Cambridge",
        province: "Ontario",
        postalCode: "N1R8J6",
      },
      contact: {
        phone: "+1(844)777-4287",
        website: "www.meinhaus.ca",
      },
    },
    billToInfo: {
      name: "Testing Client One",
      address: {
        street: "431 Yonge Street",
        city: "Toronto",
        province: "Ontario",
        postalCode: "M5B IT3",
      },
      contact: {
        phone: "+1(844)777-4287",
        email: "testing1@gmail.com",
      },
    },
    invoiceItems: [
      {
        serviceType: "Appliance Installation",
        description:
          "Installation of new kitchen appliances (refrigerator, stove, dishwasher).",
        depositAmount: 199.0,
        projectCost: 5000.0,
      },
      {
        serviceType: "Electrical Outlet Upgrade",
        description: "Upgrade 3 electrical outlets to 20A for new appliances.",
        depositAmount: 50.0,
        projectCost: 350.0,
      },
    ],
    invoiceSummary: {
      totalProjectCost: 5350,
      salesTaxPercentage: 0.12,
      salesTaxAmount: 642,
      grandTotal: 5992,
      totalAmountPaid: 199,
      balanceRemaining: 5793,
    },
    amountToBePaid: {
      amountDue: 5350,
      salesTaxPercentage: 0.12,
      salesTaxAmount: 642,
      total: 5992,
    },
    agreement: {
      termsOfUseText: "I agree to the Terms of Use",
      disclaimerText:
        "This amount is to be paid for the purposes of booking your project and getting scheduled with our team members. This deposit will be held in trust by MeinHaus Online General Contractor and not released to the service providers until satisfactory progress has been achieved. Deposit is refundable with fees where applicable.",
    },
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
    ],
  },
  {
    id: 4,
    bookingDetails: {
      bookingId: "#OD - 567K098L2",
      issueDate: "15-01-2025",
    },
    companyInfo: {
      name: "MeinHaus",
      address: {
        street: "6 - 425, Hespeler Road",
        unit: "unit #303",
        city: "Cambridge",
        province: "Ontario",
        postalCode: "N1R8J6",
      },
      contact: {
        phone: "+1(844)777-4287",
        website: "www.meinhaus.ca",
      },
    },
    billToInfo: {
      name: "Client Two Inc.",
      address: {
        street: "123 Main Street",
        city: "Waterloo",
        province: "Ontario",
        postalCode: "N2L 3G1",
      },
      contact: {
        phone: "+1(519)123-4567",
        email: "client2@example.com",
      },
    },
    invoiceItems: [
      {
        serviceType: "Bathroom Renovation",
        description:
          "Complete overhaul of master bathroom including tiling, vanity, and shower.",
        depositAmount: 500.0,
        projectCost: 7500.0,
      },
      {
        serviceType: "Plumbing Fixture Replacement",
        description: "Installation of new toilet, sink, and shower fixtures.",
        depositAmount: 100.0,
        projectCost: 800.0,
      },
      {
        serviceType: "Painting Service",
        description: "Painting of bathroom walls and ceiling.",
        depositAmount: 75.0,
        projectCost: 400.0,
      },
    ],
    invoiceSummary: {
      totalProjectCost: 8700,
      salesTaxPercentage: 0.12,
      salesTaxAmount: 1044,
      grandTotal: 9744,
      totalAmountPaid: 675,
      balanceRemaining: 9069,
    },
    amountToBePaid: {
      amountDue: 8700,
      salesTaxPercentage: 0.12,
      salesTaxAmount: 1044,
      total: 9744,
    },
    agreement: {
      termsOfUseText: "I agree to the Terms of Use",
      disclaimerText:
        "This amount is to be paid for the purposes of booking your project and getting scheduled with our team members. This deposit will be held in trust by MeinHaus Online General Contractor and not released to the service providers until satisfactory progress has been achieved. Deposit is refundable with fees where applicable.",
    },
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
    ],
  },
  {
    id: 6,
    bookingDetails: {
      bookingId: "#OD - 890M123N4",
      issueDate: "20-03-2025",
    },
    companyInfo: {
      name: "MeinHaus",
      address: {
        street: "6 - 425, Hespeler Road",
        unit: "unit #303",
        city: "Cambridge",
        province: "Ontario",
        postalCode: "N1R8J6",
      },
      contact: {
        phone: "+1(844)777-4287",
        website: "www.meinhaus.ca",
      },
    },
    billToInfo: {
      name: "Homeowner Services",
      address: {
        street: "789 Elm Street",
        city: "Guelph",
        province: "Ontario",
        postalCode: "N1H 6J3",
      },
      contact: {
        phone: "+1(226)987-6543",
        email: "homeowner@service.com",
      },
    },
    invoiceItems: [
      {
        serviceType: "Deck Construction",
        description:
          "New wooden deck construction (10ft x 12ft) with railings.",
        depositAmount: 300.0,
        projectCost: 4000.0,
      },
      {
        serviceType: "Landscaping Services",
        description: "Basic garden bed preparation around new deck.",
        depositAmount: 50.0,
        projectCost: 250.0,
      },
    ],
    invoiceSummary: {
      totalProjectCost: 4250,
      salesTaxPercentage: 0.12,
      salesTaxAmount: 510,
      grandTotal: 4760,
      totalAmountPaid: 350,
      balanceRemaining: 4410,
    },
    amountToBePaid: {
      amountDue: 4250,
      salesTaxPercentage: 0.12,
      salesTaxAmount: 510,
      total: 4760,
    },
    agreement: {
      termsOfUseText: "I agree to the Terms of Use",
      disclaimerText:
        "This amount is to be paid for the purposes of booking your project and getting scheduled with our team members. This deposit will be held in trust by MeinHaus Online General Contractor and not released to the service providers until satisfactory progress has been achieved. Deposit is refundable with fees where applicable.",
    },
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2021/6/CA/KV/AP/52300782/renovation-services.jpg",
      "https://www.bhg.com/thmb/U3sY3Up-M6It4eE7wyu6_zKBZN0=/1920x0/filters:no_upscale():strip_icc()/stylemaker-secret-white-den-b21ab396-d2636ff8d24449a99561054dc983475b.jpg",
      "https://sweeten.com/wp-content/uploads/2017/04/01_300-Riverside_1.jpg",
      "https://topiko.com/prod/app/serviceimages/1766_1719205143.jpeg",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
      "https://plus.unsplash.com/premium_photo-1683120658096-5f9e31276ec8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogcZBZ5QKBAX_7_QQK4JczKv8OEWB1hFyzg&s",
    ],
  },
];

async function PaymentCheckoutPageComp({ id, paymentProp }) {
  //   const { id } = await params;

  const data = invoiceDataArray?.find((item) => Number(item.id) === Number(id));

  return (
    <main className="bg-[#F9F9F9]">
      <section className="max-w-7xl py-8 px-3 mx-auto">
        {/* Top */}
        <div className="flex flex-wrap gap-5 items-center justify-center">
          <h2 className="font-semibold text-center text-xl">
            Thanks for choosing MeinHaus Online General Contractor
          </h2>
        </div>
        {/* content section  */}
        <div className="grid grid-cols-12 gap-7 my-6">
          {/* left   */}
          <div className="col-span-12 lg:col-span-8">
            <div className="mx-auto px-1">
              {/* booking id  section */}
              <div className="flex justify-between bg-white rounded-2xl p-3">
                <div>
                  <p className="text-[#9D9D9D] font-medium">Book ID</p>
                  <p className="font-semibold">
                    {data.bookingDetails.bookingId}
                  </p>
                </div>
                <div>
                  <p className="text-[#9D9D9D] font-medium">Issue Date</p>
                  <p className="font-semibold">
                    {data.bookingDetails.issueDate}
                  </p>
                </div>
              </div>
              {/* billing to  */}
              <div className="flex max-sm:flex-wrap gap-3 justify-between bg-white rounded-2xl p-3 my-4">
                <div className="max-w-xs">
                  <h2 className="font-medium text-xl text-primary">MeinHaus</h2>
                  <div className="mt-3 text-sm">
                    6-425, Hespeler Road unit #303 Cambridge, Ontario, N1R8J6
                    <br /> +1(844)777-4287 <br /> www.meinhaus.ca
                  </div>
                </div>
                <div className="max-w-xs text-start  md:text-end">
                  <h2 className="font-medium text-xl text-secondary">
                    Bill To
                  </h2>
                  <div className="mt-3 text-sm">
                    {data.billToInfo.name}
                    {data.billToInfo.address.street}
                    {data.billToInfo.address.city}
                    <br />
                    {data.billToInfo.address.province}
                    {data.billToInfo.address.postalCode}
                    <br />
                    {data.billToInfo.contact.phone}
                    <br />
                    {data.billToInfo.contact.email}
                  </div>
                </div>
              </div>
              {/* Invoice details  */}
              {data.invoiceItems?.length > 0 && (
                <div>
                  <h2 className="font-semibold text-lg">Invoice Details</h2>
                  <div className="bg-white rounded-2xl p-3 my-4">
                    <InvoiceTable
                      items={data.invoiceItems}
                      showDelete={false}
                    />
                  </div>
                </div>
              )}
              {/* Project photos  */}
              {data?.images?.length > 0 && (
                <div>
                  <h2 className="font-semibold text-lg my-4">Project Photos</h2>
                  <Photos photos={data?.images || []} />
                </div>
              )}
            </div>
          </div>
          {/* right   */}
          <div className="col-span-12 lg:col-span-4">
            <div className="mx-auto px-1">
              {/* Invoice summary  */}
              <div className="bg-white rounded-2xl p-3">
                <h2 className="font-semibold text-xl">Invoice summary</h2>
                <hr className="my-2" />
                <div className="space-y-2">
                  <p className="flex items-center justify-between">
                    <span className="text-[#9D9D9D] font-medium text-sm">
                      Total Project Cost
                    </span>{" "}
                    <span className="font-semibold">
                      ${data.invoiceSummary.totalProjectCost}
                    </span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="text-[#9D9D9D] font-medium text-sm">{`Sales Tax (${data.invoiceSummary.salesTaxPercentage}%)`}</span>{" "}
                    <span className="font-semibold">
                      ${data.invoiceSummary.salesTaxAmount}
                    </span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="text-[#9D9D9D] font-medium text-sm">
                      Grand Total
                    </span>{" "}
                    <span className="font-semibold">
                      ${data.invoiceSummary.grandTotal}
                    </span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="text-[#9D9D9D] font-medium text-sm">
                      Total Amount Paid
                    </span>{" "}
                    <span className="font-semibold">
                      ${data.invoiceSummary.totalAmountPaid}
                    </span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="text-[#9D9D9D] font-medium text-sm">
                      Balance Remaining
                    </span>{" "}
                    <span className="font-semibold">
                      ${data.invoiceSummary.balanceRemaining}
                    </span>
                  </p>
                </div>
              </div>
              {/* amount paid  */}
              <div className="bg-white rounded-2xl p-3 my-5">
                <h2 className="font-semibold text-xl">Amount to be paid</h2>
                <hr className="my-2" />
                <div className="space-y-2">
                  <p className="flex items-center justify-between">
                    <span className="text-[#9D9D9D] font-medium text-sm">
                      Amount due
                    </span>{" "}
                    <span className="font-semibold">
                      ${data.invoiceSummary.totalProjectCost}
                    </span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="text-[#9D9D9D] font-medium text-sm">{`Sales Tax (${data.invoiceSummary.salesTaxPercentage}%)`}</span>{" "}
                    <span className="font-semibold">
                      ${data.invoiceSummary.salesTaxAmount}
                    </span>
                  </p>
                  <hr />
                  <p className="flex items-center justify-between">
                    <span className="text-[#9D9D9D] font-medium text-sm">
                      Total
                    </span>{" "}
                    <span className="font-semibold">
                      ${data.invoiceSummary.grandTotal}
                    </span>
                  </p>
                </div>
              </div>
              {/* payment method  */}
              <div className="">{paymentProp}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PaymentCheckoutPageComp;
