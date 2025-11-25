"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  EllipsisVertical,
  NotebookPen,
  PenIcon,
  PlusCircle,
  Trash,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

const address = [
  {
    id: "loc-001",
    location: "221B Baker Street, London, UK",
    locationType: "home",
    isDefault: true,
  },
  {
    id: "loc-002",
    location: "12 Industrial Road, Birmingham, UK",
    locationType: "work",
    isDefault: false,
  },
  {
    id: "loc-003",
    location: "Kings Cross Station, Platform 4, London, UK",
    locationType: "others",
    isDefault: false,
  },
];

const schema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
  locationType: Yup.string()
    .oneOf(["home", "work", "others"], "Invalid location type")
    .required("Location type is required"),
  isDefault: Yup.boolean(),
});

// Edit address
function EditAddressModal({ mode, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      address: "221B Baker Street, London, UK",
      locationType: "home",
      isDefault: true,
    },
  });

  const onSubmit = (data) => {
    console.log("Updated Address:", data);
    onClose?.();
  };

  return (
    <Dialog open={mode} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="w-[95%] max-w-lg rounded-2xl p-5 border-none outline-none">
        <DialogHeader>
          <DialogTitle>Edit Address</DialogTitle>
        </DialogHeader>

        <Separator />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-1">
          {/* Address Text Field */}
          <div>
            <label className="block font-medium mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="Enter address"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Location Type Dropdown */}
          <div>
            <label className="block font-medium mb-1">
              Location Type <span className="text-red-500">*</span>
            </label>
            <select
              {...register("locationType")}
              className="border rounded-md p-2 cursor-pointer w-full"
            >
              <option value="">Select</option>
              <option value="home">Home</option>
              <option value="work">Work</option>
              <option value="others">Others</option>
            </select>

            {errors.locationType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.locationType.message}
              </p>
            )}
          </div>

          {/* Default Location Radio */}
          <div className="flex items-center gap-3">
            <input type="checkbox" {...register("isDefault")} />
            <label>Set as default</label>
          </div>

          <DialogFooter className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// Add address
function AddAddressModal({ mode, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      address: "",
      locationType: "",
      isDefault: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Updated Address:", data);
    onClose?.();
  };

  return (
    <Dialog open={mode} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="w-[95%] max-w-lg rounded-2xl p-5 border-none outline-none">
        <DialogHeader>
          <DialogTitle>Add Address</DialogTitle>
        </DialogHeader>

        <Separator />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-1">
          {/* Address Text Field */}
          <div>
            <label className="block font-medium mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="Enter address"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Location Type Dropdown */}
          <div>
            <label className="block font-medium mb-1">
              Location Type <span className="text-red-500">*</span>
            </label>
            <select
              {...register("locationType")}
              className="border rounded-md p-2 cursor-pointer w-full"
            >
              <option value="">Select</option>
              <option value="home">Home</option>
              <option value="work">Work</option>
              <option value="others">Others</option>
            </select>

            {errors.locationType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.locationType.message}
              </p>
            )}
          </div>

          {/* Default Location Radio */}
          <div className="flex items-center gap-3">
            <input type="checkbox" {...register("isDefault")} />
            <label>Set as default</label>
          </div>

          <DialogFooter className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// Delete address
function DeleteAddressModal({ mode = false, onClose }) {
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
                Are You Sure You Want to Delete this Address?
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

function AddressDetails() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  return (
    <main className="bg-white rounded-xl p-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl">Address Details</h2>
        <button
          value="add_new"
          className="text-[#1e9bd0] flex items-center gap-2 cursor-pointer"
          onClick={() => setAddModalOpen(true)}
        >
          <PlusCircle size={18} /> Add New Address
        </button>
      </div>
      <hr className="my-3" />
      <div>
        {/* Address section  */}
        <div>
          {address?.length > 0 &&
            address.map((item) => (
              <div className="bg-[#F9F9F9] border rounded-md p-3 border-[#E6E6E6] flex justify-between items-start my-6">
                <div>
                  <h2 className="font-medium text-md">{item.locationType}</h2>
                  <p className="text-[#9D9D9D]">{item.location}</p>
                  <button className="text-[#1E9BD0] mt-2">
                    {item.isDefault ? (
                      <span className="bg-[#1E9BD01F] p-1 px-2 rounded-2xl">
                        Default
                      </span>
                    ) : (
                      "Set as default"
                    )}
                  </button>
                </div>
                {/* three dots  */}
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="my-3 text-md lg:text-lg lg:px-4 cursor-pointer py-2 bg-transparent text-black shadow-none hover:bg-transparent rounded-4xl">
                        <EllipsisVertical />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className=" mr-3 mt-2 text-lg"
                      align="center"
                    >
                      <DropdownMenuGroup className="text-center text-[#545454]">
                        <DropdownMenuItem
                          onClick={() => setEditModalOpen(true)}
                          className="cursor-pointer"
                        >
                          <div className="flex items-center gap-2 font-medium">
                            <PenIcon />
                            <p>Edit</p>
                          </div>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                          <button onClick={() => setDeleteModalOpen(true)}>
                            <div className="flex items-center gap-2 font-medium text-red-600">
                              <Trash className="text-red-600" />
                              <p>Delete</p>
                            </div>
                          </button>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
        </div>
        {/* No address section  */}
        {address?.length === 0 && (
          <div className="flex flex-col gap-5 my-4 items-center">
            <div className="relative h-40 w-60">
              <Image
                fill
                alt="No address image"
                src="/customer/root/profile/no-address.png"
              />
            </div>
            <p className="font-medium text-[#545454]">
              Please provide your address here.
            </p>
            <Button variant="black">Add Address</Button>
          </div>
        )}
      </div>

      {editModalOpen && (
        <EditAddressModal
          mode={editModalOpen}
          onClose={() => setEditModalOpen(false)}
        />
      )}

      {addModalOpen && (
        <AddAddressModal
          mode={addModalOpen}
          onClose={() => setAddModalOpen(false)}
        />
      )}

      {deleteModalOpen && (
        <DeleteAddressModal
          mode={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
        />
      )}
    </main>
  );
}

export default AddressDetails;
