"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const schema = yup.object({
  description: yup.string().required("Review is required"),
  punctuality: yup.number().required(),
  quality: yup.number().required(),
  responsiveness: yup.number().required(),
});

function AddReviewModal({ mode = false, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      description: "",
      punctuality: 1,
      quality: 1,
      responsiveness: 1,
    },
  });

  const onSubmit = (data) => {
    console.log({
      ...data,
    });

    onClose?.();
  };

  return (
    <Dialog open={mode} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent
        className="
          w-[95%] max-w-lg sm:max-w-md md:max-w-lg
          sm:rounded-lg rounded-2xl
          max-h-[95dvh] overflow-y-auto
          px-4 sm:px-6 py-4 border-none
        "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <DialogHeader>
          <DialogTitle>Provide Rating and Review</DialogTitle>
        </DialogHeader>

        <Separator />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5">
            {/* Punctuality  */}
            <div className="flex justify-start gap-8 items-center">
              <label className="font-medium w-30">Punctuality</label>
              <Rating
                style={{ maxWidth: 150 }}
                itemStyles={{
                  activeFillColor: "#f59e0b",
                  inactiveFillColor: "#ffedd5",
                  itemShapes: Star,
                }}
                value={watch("punctuality")}
                onChange={(val) => setValue("punctuality", val)}
                items={5}
                isRequired
              />
              {errors.punctuality && (
                <p className="text-red-500 text-xs mt-1">
                  Punctuality Rating required
                </p>
              )}
            </div>
            {/* Quality  */}
            <div className="flex justify-start gap-8 items-center">
              <label className="font-medium w-30">Quality</label>
              <Rating
                style={{ maxWidth: 150 }}
                itemStyles={{
                  activeFillColor: "#f59e0b",
                  inactiveFillColor: "#ffedd5",
                  itemShapes: Star,
                }}
                value={watch("quality")}
                onChange={(val) => setValue("quality", val)}
                items={5}
                isRequired
              />
              {errors.quality && (
                <p className="text-red-500 text-xs mt-1">
                  Quality Rating required
                </p>
              )}
            </div>
            {/* Responsiveness  */}
            <div className="flex justify-start gap-8 items-center">
              <label className="font-medium w-30">Responsiveness</label>
              <Rating
                style={{ maxWidth: 150 }}
                itemStyles={{
                  activeFillColor: "#f59e0b",
                  inactiveFillColor: "#ffedd5",
                  itemShapes: Star,
                }}
                value={watch("responsiveness")}
                onChange={(val) => setValue("responsiveness", val)}
                items={5}
                isRequired
              />
              {errors.responsiveness && (
                <p className="text-red-500 text-xs mt-1">
                  responsiveness Rating required
                </p>
              )}
            </div>
            {/* Description */}
            <div>
              <label className="block  font-medium mb-1">
                Review <sub className="mt-5 text-red-600 text-lg">*</sub>
              </label>
              <Textarea
                placeholder="Write a review..."
                {...register("description")}
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          {/* Footer */}
          <DialogFooter className="mt-6 flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-black text-white hover:bg-gray-800"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function AddReview() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className="p-3 bg-[#FD760D1F] flex justify-between gap-4 items-center rounded-xl">
      <div>
        <p className="flex items-center gap-3 mb-2">
          <span>
            <button
              onClick={() => setModalOpen(true)}
              className="font-medium text-[#FD760D] flex  gap-2"
            >
              Provide Rating and Review
              <MoveRight className="font-medium text-[#FD760D]" />
            </button>
          </span>
        </p>
        <p className="text-[#262626] font-normal text-xs">
          Share your rating and review to help us serve you better and assist
          others in finding trusted professionals.
        </p>
      </div>
      <div className="relative h-20 w-50">
        <Image
          src="/customer/root/completed-work/add-rating-img.png"
          alt="Rating icon"
          fill
        />
      </div>
      {modalOpen && (
        <AddReviewModal mode={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </main>
  );
}

export default AddReview;
