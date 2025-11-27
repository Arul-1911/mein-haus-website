"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";

const validationSchema = yup.object().shape({
  currentpassword: yup
    .string()
    .required("Current password is required")
    .min(6, "Too short"),
  newpassword: yup
    .string()
    .required("New password is required")
    .min(6, "Too short")
    .notOneOf(
      [yup.ref("currentpassword")],
      "New password must be diffrent from old password"
    ),
  confirmpassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("newpassword")], "Password do not match"),
});

function UpdatePassword() {
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
      <h2 className="font-semibold text-xl">Update Password</h2>
      <p className="font-medium text-[#9D9D9D]">
        Ensure your account is using a long, random password to stay secure.
      </p>
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
                Current password
                <span className="text-red-500 text-lg mx-1 mt-3">*</span>
              </label>
              <input
                type="text"
                {...register("currentpassword")}
                className="border rounded p-2 w-full"
                placeholder="Enter current password"
                required
              />
              {errors.currentpassword && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.currentpassword.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block font-medium my-1">
                New password
                <span className="text-red-500 text-lg mx-1 mt-3">*</span>
              </label>
              <input
                type="text"
                {...register("newpassword")}
                className="border rounded p-2 w-full"
                placeholder="Enter new password"
              />
              {errors.newpassword && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.newpassword.message}
                </p>
              )}
            </div>
          </div>

          {/* bottom section  */}
          <div className="grid md:gap-5 md:grid-cols-2">
            <div className="mb-4">
              <label className="block font-medium my-1">
                Confirm password
                <span className="text-red-500 text-lg mx-1 mt-3">*</span>
              </label>
              <input
                type="text"
                {...register("confirmpassword")}
                className="border rounded p-2 w-full"
                placeholder="Enter confirm password"
              />
              {errors.confirmpassword && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.confirmpassword.message}
                </p>
              )}
            </div>
          </div>

          <div className="text-white  rounded flex justify-end w-full">
            <Button variant="black">Save</Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default UpdatePassword;
