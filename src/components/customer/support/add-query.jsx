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
function AddQueryModal({ mode = false, onClose }) {
  const [images, setImages] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: { description: "" },
  });

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (images.length + files.length > 5) {
      alert("You can upload up to 5 images only.");
      return;
    }
    setImages((prev) => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (data) => {
    console.log({
      ...data,
      images,
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
          <DialogTitle>Ask Query</DialogTitle>
        </DialogHeader>

        <Separator />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5">
            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Query <sub className="mt-5 text-red-600 text-lg">*</sub>
              </label>
              <Textarea
                placeholder="Enter your query here..."
                {...register("description")}
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Images */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Images (optional, max 5)
              </label>
              <div className="flex flex-wrap mt-5 gap-3">
                {images.map((file, index) => (
                  <div key={index} className="relative w-20 h-20">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt="uploaded"
                      fill
                      className="rounded-lg object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
                {images.length < 5 && (
                  <label className="w-20 h-20 flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                    <Plus className="text-gray-500" />
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
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

function AddQueryButton() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main>
      <div>
        <div>
          <Button variant="black" onClick={() => setModalOpen(true)}>
            <span>
              <Plus />
            </span>
            <span>Ask Query</span>
          </Button>
        </div>
      </div>
      {modalOpen && (
        <AddQueryModal mode={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </main>
  );
}

export default AddQueryButton;
