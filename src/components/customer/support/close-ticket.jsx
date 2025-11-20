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
import { Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  description: yup.string().required("Notes is required"),
});

// Query Modal
function KeepOpenModal({ mode = false, onClose }) {
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
          w-[95%] max-w-lg sm:max-w-md md:max-w-sm
          sm:rounded-lg rounded-2xl
          max-h-[95dvh] overflow-y-auto
          px-4 sm:px-6 py-4 border-none
        "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5 flex flex-col justify-center items-center">
            {/* Icon */}
            <div>
              <Image
                alt="Message Icon"
                height={80}
                width={80}
                src="/customer/root/support/close-ticket.png"
              />
            </div>

            <div>
              <p className="text-center font-semibold">
                Are You Sure You Want To Close The Ticket?
              </p>
            </div>

            {/* Sub text */}
            <div>
              <p className="text-center text-[#9D9D9D]">
                The support team has requested to resolve the query. Are you
                satisfied with the assistance provided?
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" onClick={onClose} className="w-full">
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-black text-white hover:bg-gray-800 w-full"
            >
              Confirm
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function KeepOpenButton() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main>
      <div>
        <div>
          <Button
            className="bg-secondary hover:bg-secondary text-white"
            onClick={() => setModalOpen(true)}
          >
            Keep Open
          </Button>
        </div>
      </div>
      {modalOpen && (
        <KeepOpenModal mode={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </main>
  );
}

export default KeepOpenButton;
