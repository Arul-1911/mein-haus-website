"use client";

import { useCreateContactUsMutation } from "@/features/website/apiWebsite";
import { yupResolver } from "@hookform/resolvers/yup";
import { Send } from "lucide-react";
import React from "react";
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
  const [createQueryReq, { isLoading, isError }] = useCreateContactUsMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const formData = new URLSearchParams();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      const res = await createQueryReq(formData.toString()).unwrap();
      if (res.success) {
        toast.success(res.message);
        reset();
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
              isLoading ? "cursor-not-allowed opacity-45" : "cursor-pointer"
            } rounded-md mt-4 p-3 text-center`}
            disabled={isLoading}
          >
            <span className="flex justify-center gap-3">
              {isLoading ? (
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
