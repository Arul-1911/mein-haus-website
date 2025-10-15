"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, PlusCircle, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  title: yup.string().required("Title is required"),
  timeDone: yup.string().required("Select estimated time"),
  description: yup.string().required("Description is required"),
  address: yup.string().required("Select or add an address"),
});

export default function CreateEstimate({ mode = false, onClose }) {
  const [images, setImages] = useState([]);
  const router = useRouter();

  // Addresses
  const addresses = [
    {
      id: 1,
      label:
        "123 Main Street 123 Main Street 123 Main Street 123 Main Street 123 Main Street 123 Main Street123 Main Street",
    },
    { id: 2, label: "456 Elm Avenue" },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: { title: "", timeDone: "", description: "", address: "" },
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
          <DialogTitle>Create Estimate</DialogTitle>
        </DialogHeader>

        <Separator />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Title <sub className="mt-5 text-red-600 text-lg">*</sub>
              </label>
              <Input placeholder="Enter title" {...register("title")} />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Time Done */}
            <div>
              <label className="block text-sm font-medium mb-1">
                When do you want your project done?{" "}
                <sub className="mt-5 text-red-600 text-lg">*</sub>
              </label>
              <Select
                value={watch("timeDone")}
                onValueChange={(val) =>
                  setValue("timeDone", val, { shouldValidate: true })
                }
                defaultValue={watch("timeDone")}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ASAP">ASAP</SelectItem>
                  <SelectItem value="Less Than 1 Week">
                    Less Than 1 Week
                  </SelectItem>
                  <SelectItem value="Less Than 2 Week">
                    Less Than 2 Week
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.timeDone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.timeDone.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Description <sub className="mt-5 text-red-600 text-lg">*</sub>
              </label>
              <Textarea
                placeholder="Enter description"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Address <sub className="mt-5 text-red-600 text-lg">*</sub>
              </label>
              {addresses.length > 0 ? (
                <Select
                  value={watch("address")}
                  onValueChange={(val) => {
                    if (val === "add_new") {
                      router.push("/profile/add-address");
                      return;
                    }
                    setValue("address", val, { shouldValidate: true });
                  }}
                  defaultValue={watch("address")}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {addresses.map((addr) => (
                      <SelectItem
                        key={addr.id}
                        value={addr.label}
                        className="whitespace-normal break-words"
                      >
                        {addr.label.length > 35
                          ? addr.label.slice(0, 35) + "..."
                          : addr.label}
                      </SelectItem>
                    ))}
                    <SelectItem
                      value="add_new"
                      className="text-[#1e9bd0] cursor-pointer"
                    >
                      <PlusCircle /> Add New Address
                    </SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <p
                  onClick={() => router.push("/profile/add-address")}
                  className="text-red-500 cursor-pointer text-sm"
                >
                  No address found. Click here to add address.
                </p>
              )}
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.address.message}
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
