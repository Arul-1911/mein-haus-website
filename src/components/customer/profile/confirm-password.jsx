"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const validationSchema = yup.object().shape({
  currentPassword: yup.string().required("Current Password is required"),
});

export default function ConfirmPasswordModal({
  mode = false,
  onClose,
  title = "Confirm Password",
  description = "For your security, please confirm your password to continue.",
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Password confirmed:", data);
    // Add your password confirmation logic here
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <>
      <Dialog open={mode} onOpenChange={(isOpen) => !isOpen && handleClose()}>
        <DialogContent
          className="
        w-[95%] max-w-lg sm:max-w-md md:max-w-sm
        sm:rounded-lg rounded-2xl
           max-h-[95dvh] overflow-y-auto
            sm:px-6 border-none
           "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
            <hr />
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              {/* Confirm password */}
              <label className="block font-medium my-2">
                Confirm password
                <span className="text-red-500 text-lg mx-1">*</span>
              </label>
              <Input
                type="password"
                placeholder="Enter your password"
                {...register("currentPassword")}
                className={
                  errors.currentPassword
                    ? "border-red-500 outline-red-500 focus:outline-red-500"
                    : ""
                }
              />
              {errors.currentPassword && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.currentPassword.message}
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="w-full"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-black text-white hover:bg-gray-800 w-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
