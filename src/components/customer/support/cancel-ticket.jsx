"use client";

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
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

const schema = yup.object({
  reason: yup.string().required("reason is required"),
});

// Query Modal
function CancelTicketModal({ mode = false, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: { description: "" },
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
          <DialogTitle>Query Cancellation</DialogTitle>
        </DialogHeader>

        <Separator />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5">
            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Reason <sub className="mt-5 text-red-600 text-lg">*</sub>
              </label>
              <Textarea
                placeholder="Write reason for cancellation here..."
                {...register("reason")}
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

function CancelTicketButton() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main>
      <div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="my-3 text-xl shadow-none lg:text-lg lg:px-4 cursor-pointer py-2 bg-white hover:bg-white text-black rounded-4xl">
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" mr-3 mt-2 text-lg" align="center">
              <button
                onClick={() => setModalOpen(true)}
                className="text-end ml-2 text-sm text-red-500 cursor-pointer"
              >
                Cancel Query
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {modalOpen && (
        <CancelTicketModal
          mode={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </main>
  );
}

export default CancelTicketButton;
