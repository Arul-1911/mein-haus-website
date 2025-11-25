"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";

const validationSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("First name is required")
    .min(2, "Too short"),
  lastname: yup.string().required("Last name is required").min(1, "Too short"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches('/^[0-9]{10}$/, "Phone number must be 10 digits"'),
});

function PersonalInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("form data:", data);
  };
  return (
    <main className="bg-white rounded-xl p-4">
      <h2 className="font-semibold text-xl">Personal Information</h2>
      <hr
        className="my-3
      "
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* top section  */}
          <div className="grid md:grid-cols-2 md:gap-5">
            <div className="mb-4">
              <label className="block font-medium my-1">
                First Name
                <span className="text-red-500 text-lg mx-1 mt-3">*</span>
              </label>
              <input
                type="text"
                {...register("firstname")}
                className="border rounded p-2 w-full"
                placeholder="Enter first name"
                required
              />
              {errors.firstname && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block font-medium my-1">
                Last Name
                <span className="text-red-500 text-lg mx-1 mt-3">*</span>
              </label>
              <input
                type="text"
                {...register("lastname")}
                className="border rounded p-2 w-full"
                placeholder="Enter last name"
              />
              {errors.lastname && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.lastname.message}
                </p>
              )}
            </div>
          </div>

          {/* bottom section  */}
          <div className="grid md:gap-5 md:grid-cols-2">
            <div className="mb-4">
              <label className="block font-medium my-1">
                Email
                <span className="text-red-500 text-lg mx-1 mt-3">*</span>
              </label>
              <input
                type="email"
                {...register("email")}
                className="border rounded p-2 w-full"
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block font-medium my-1 text-md">
                Phone Number
                <span className="text-red-500 text-lg mx-1 mt-3">*</span>
              </label>
              <input
                type="text"
                {...register("phone")}
                className="border rounded p-2 w-full"
                placeholder="Enter phone number"
              />
              {errors.phone && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="text-white  rounded flex justify-end w-full">
            <Button variant="black">Update</Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default PersonalInformation;
