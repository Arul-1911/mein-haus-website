"use client";

import { EllipsisVertical, PenIcon, Trash } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const schema = yup.object({
  description: yup.string().required("Review is required"),
  punctuality: yup.number().required(),
  quality: yup.number().required(),
  responsiveness: yup.number().required(),
});

function EditReviewModal({ mode = false, onClose }) {
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
      description: "Meinhaus service was very nice...",
      punctuality: 4,
      quality: 4,
      responsiveness: 5,
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
          <DialogTitle>Edit Rating and Review</DialogTitle>
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
                  activeFillColor: "#FD760D",
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
                  activeFillColor: "#FD760D",
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
                  activeFillColor: "#FD760D",
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

function DeleteReviewModal({ mode = false, onClose }) {
  return (
    <Dialog open={mode} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent
        className="
           w-[95%] max-w-lg sm:max-w-md md:max-w-sm
           sm:rounded-lg rounded-2xl
           max-h-[95dvh] overflow-y-auto
           px-4 sm:px-6 py-4 border-none
         "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div>
          <div className="space-y-5 flex flex-col justify-center items-center">
            {/* Icon */}
            <div>
              <Image
                alt="Message Icon"
                height={80}
                width={80}
                src="/customer/root/completed-work/del-icon.png"
              />
            </div>

            <div>
              <p className="text-center font-semibold">
                Are You Sure You Want to Delete this Review?
              </p>
            </div>

            {/* Sub text */}
            <div>
              <p className="text-center text-[#9D9D9D]">
                This action cannot be undone. Once deleted, the data will be
                permanently removed from your account.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" onClick={onClose} className="w-full">
              Cancel
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 w-full">
              Confirm
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function EditReview() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  return (
    <main className="px-3 py-1 bg-white rounded-xl">
      {/* top section  */}
      <div className="flex justify-between items-center">
        <p className="font-medium">Your rating and review</p>
        {/* three dots  */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="my-3 text-md lg:text-lg lg:px-4 shadow-none cursor-pointer py-2 bg-white hover:bg-black/5 text-black rounded-4xl">
              <EllipsisVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" mr-3 mt-2 text-lg" align="center">
            <DropdownMenuGroup className="text-center text-[#545454]">
              <DropdownMenuItem>
                <button
                  onClick={() => setEditModalOpen(true)}
                  className="flex items-center gap-2 font-medium"
                >
                  <div>
                    <PenIcon />
                  </div>
                  <p>Edit Review</p>
                </button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button onClick={() => setDeleteModalOpen(true)}>
                  <div className="flex items-center gap-2 font-medium text-red-600">
                    <div>
                      <Trash className="text-red-600" />
                    </div>
                    <p>Delete Review</p>
                  </div>
                </button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* rating section  */}
      <div>
        <div>
          <div className="space-y-5">
            {/* Punctuality  */}
            <div className="flex justify-start gap-8 items-center">
              <label className=" w-30">Punctuality</label>
              <Rating
                style={{ maxWidth: 150 }}
                itemStyles={{
                  activeFillColor: "#FD760D",
                  inactiveFillColor: "#ffedd5",
                  itemShapes: Star,
                }}
                value={4}
                items={5}
              />
            </div>
            {/* Quality  */}
            <div className="flex justify-start gap-8 items-center">
              <label className=" w-30">Quality</label>
              <Rating
                style={{ maxWidth: 150 }}
                itemStyles={{
                  activeFillColor: "#FD760D",
                  inactiveFillColor: "#ffedd5",
                  itemShapes: Star,
                }}
                value={3}
                items={5}
              />
            </div>
            {/* Responsiveness  */}
            <div className="flex justify-start gap-8 items-center">
              <label className=" w-30">Responsiveness</label>
              <Rating
                style={{ maxWidth: 150 }}
                itemStyles={{
                  activeFillColor: "#FD760D",
                  inactiveFillColor: "#ffedd5",
                  itemShapes: Star,
                }}
                value={4}
                items={5}
              />
            </div>
          </div>
        </div>
      </div>
      {/* text section  */}
      <p className="text-[#545454] bg-[#F6F6F6] rounded-xl p-2 text-sm my-3">
        Windows on the second floor require ladder access. No obstructions
        identified. Large office windows on 5th and 6th floors need cleaning.
        Water-fed pole system required.
      </p>
      {editModalOpen && (
        <EditReviewModal
          mode={editModalOpen}
          onClose={() => setEditModalOpen(false)}
        />
      )}
      {deleteModalOpen && (
        <DeleteReviewModal
          mode={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
        />
      )}
    </main>
  );
}

export default EditReview;
