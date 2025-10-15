"use client";

import { useCreateContactUsMutation } from "@/features/website/apiWebsite";
import { yupResolver } from "@hookform/resolvers/yup";
import { Send } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required !")
    .min(2, "name must be at least 2 characters long"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required !"),
  message: yup.string().required("Message is required !"),
});

const ContactusForm = () => {
  // const [createQueryReq, { isLoading, isError }] = useCreateContactUsMutation();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // const onSubmit = async (data) => {
  //   const formData = new URLSearchParams();

  //   formData.append("name", data.name);
  //   formData.append("email", data.email);
  //   formData.append("message", data.message);

  //   try {
  //     const res = await createQueryReq(formData.toString()).unwrap();
  //     if (res.success) {
  //       toast.success(res.message);
  //       reset();
  //     }
  //   } catch (error) {
  //     toast.error(error.message);
  //     console.log(error);
  //   }
  // };

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("type", "contact");

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PHP_API_URL}/admin/customer-lead`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (res.status == 201) {
        toast.success("Request sent!");
        reset();
      } else {
        let errorMsg = "Failed to send  request!";
        try {
          const errData = await res.json();

          if (errData.errors) {
            // Flatten all error messages
            errorMsg = Object.values(errData.errors).flat().join("\n");
          } else if (errData.message) {
            errorMsg = errData.message;
          }
        } catch {
          // If backend sent non-JSON
        }

        toast.error(errorMsg);
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error, please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col">
      <div>
        <h2 className="font-semibold text-3xl my-2 text-center">Contact Us</h2>
        <p className="text-[#9D9D9D] font-normal px-1 text-lg text-center">
          Get in touch with us for support or inquiries.
        </p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center lg:items-baseline"
        >
          <input
            type="text"
            {...register("name")}
            // disabled={isLoading}
            disabled={loading}
            placeholder="Full Name *"
            className="bg-[#F6F6F6] w-[90%] my-2 mt-7 p-3 rounded-md"
          />
          {errors.name && (
            <span className="text-red-500 text-md mt-1">
              {errors.name.message}
            </span>
          )}
          <input
            type="email"
            {...register("email")}
            // disabled={isLoading}
            disabled={loading}
            placeholder="Email *"
            className="bg-[#F6F6F6] w-[90%] my-2 p-3 rounded-md"
          />
          {errors.email && (
            <span className="text-red-500 text-md mt-1">
              {errors.email.message}
            </span>
          )}
          <textarea
            name="message"
            {...register("message")}
            placeholder="Message *"
            // disabled={isLoading}
            disabled={loading}
            id=""
            className="bg-[#F6F6F6] w-[90%] my-2 p-3 rounded-md"
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-md mt-1">
              {errors.message.message}
            </span>
          )}
          <button
            className={`bg-black text-white w-[90%] ${
              // isLoading ? "cursor-not-allowed opacity-45" : "cursor-pointer"
              loading ? "cursor-not-allowed opacity-45" : "cursor-pointer"
            } rounded-md mt-4 p-3 text-center`}
            // disabled={isLoading}
            disabled={loading}
          >
            <span className="flex justify-center gap-3">
              {/* {isLoading ? ( */}
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send />
                </>
              )}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactusForm;
