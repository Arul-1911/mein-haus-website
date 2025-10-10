"use client";

import {
  BookUser,
  Clock,
  FileText,
  MessageSquare,
  Upload,
  X,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../ui/button";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required !"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+?[\d\s-]{8,}$/, "Invalid phone number"),
  fullname: yup
    .string()
    .required("Name is required !")
    .min(2, "name must be at least 2 characters long"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),
});

const SkipCreateProject = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);
  const [address, setAddress] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({});

  const timeOptions = [
    {
      value: "",
      label: "When would you like to have this done?",
      disabled: true,
    },
    { value: "ASAP", label: "ASAP" },
    { value: "Less than 1 week", label: "Less than 1 week" },
    { value: "Less than 1 month", label: "Less than 1 month" },
  ];

  const handleTimeSelect = (value) => {
    setSelectedTime(value);
    setValue("time", value, { shouldValidate: true });
    setIsDropdownOpen(false);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    const allImages = [...previewImages, ...newImages];
    setPreviewImages(allImages);
    setValue(
      "images",
      allImages.map((img) => img.file),
      { shouldValidate: true }
    );
  };

  const handleRemoveImages = (index) => {
    setPreviewImages((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index]?.url);
      updated.splice(index, 1);
      setValue(
        "images",
        updated.map((img) => img.file)
      );
      return updated;
    });
  };

  return (
    <section className="flex flex-col gap-4">
      {/* Project Title */}
      <div className="relative">
        <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
          <FileText className="w-5 h-5 text-black ml-3" />
          <input
            type="text"
            id="project_title"
            {...register("title", {
              required: "Project title is required",
            })}
            className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
            placeholder="Title (e.g. Bathroom Renovation)"
          />
        </div>
        {errors.title && (
          <span className="text-red-500 text-xs mt-1">
            {errors.title.message}
          </span>
        )}
      </div>

      {/* Project Description */}
      <div className="relative">
        <div className="flex p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
          <MessageSquare className="w-5 h-5 text-black ml-3 mt-2" />
          <textarea
            id="project_description"
            {...register("description", {
              required: "Project description is required",
            })}
            className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
            placeholder="Description"
            rows="2"
          ></textarea>
        </div>
        {errors.description && (
          <span className="text-red-500 text-xs mt-1">
            {errors.description.message}
          </span>
        )}
      </div>

      {/* Time Dropdown */}
      <div className="relative">
        <div
          className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Clock className="w-5 h-5 text-black ml-3" />
          <span className="w-full p-2 pl-5 text-sm text-gray-500">
            {selectedTime || "When would you like to have this done?"}
          </span>
          <svg
            className={`w-5 h-5 mr-3 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        {isDropdownOpen && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {timeOptions.map((option) => (
              <li
                key={option.value}
                className={`p-2 text-sm hover:bg-gray-100 ${
                  option.disabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                onClick={() =>
                  !option.disabled && handleTimeSelect(option.value)
                }
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        <input
          type="hidden"
          id="selected-value"
          {...register("time", {
            required: "Please select a time option",
          })}
          value={selectedTime}
        />
        {errors.time && (
          <span className="text-red-500 text-xs mt-1">
            {errors.time.message}
          </span>
        )}
      </div>

      {/* Address */}
      <div className="relative">
        <div className="flex items-center p-1 hover:border bg-[#F6F6F6] rounded-md hover:border-black focus-within:border-black">
          <BookUser className="w-5 h-5 text-black ml-3" />
          <input
            type="text"
            id="new_address"
            {...register("address", {
              required: "Address is required",
            })}
            className="w-full p-2 pl-5 text-sm rounded-md focus:outline-none"
            placeholder="Address"
            autoComplete="off"
            onChange={(e) => {
              setAddress(e.target.value);
              setValue("address", e.target.value, { shouldValidate: true });
            }}
          />
        </div>
        {errors.address && (
          <span className="text-red-500 text-xs mt-1">
            {errors.address.message}
          </span>
        )}
      </div>

      {/* File Upload */}
      <div className="border-dashed border-4 bg-[#F6F6F6] rounded-md p-4 text-center">
        <label htmlFor="file-input" className="cursor-pointer">
          <Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />
        </label>
        <p className="text-gray-500 text-sm font-medium">
          Upload clear photos of project area.
        </p>
        <p className="text-gray-400 text-xs mb-2">
          PNG, JPG, JPEG (10 MB maximum file size)
        </p>
        <label
          htmlFor="file-input"
          className="inline-block text-[var(--primary)] bg-[var(--primary-light)] font-semibold px-4 py-2 rounded-md cursor-pointer"
        >
          <Upload className="w-4 h-4 inline-block mr-2" />
          Upload
        </label>
        <input
          type="file"
          id="file-input"
          name="images[]"
          accept="image/png, image/gif, image/jpeg, image/jpg, image/svg+xml, image/webp"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Image preview section */}
      <div id="image-preview" className="mt-4 grid grid-cols-3 gap-3">
        {previewImages?.map((img, idx) => (
          <div key={idx} className="relative group">
            <img
              src={img.url}
              alt={`Image preview-${idx}`}
              className="w-full h-24 object-cover rounded-md border"
            />
            <button
              type="button"
              onClick={() => handleRemoveImages(idx)}
              className="absolute top-1 right-1 bg-black/80 text-red-500 rounded-full p-1 hover:bg-black/30 cursor-pointer"
            >
              <X size={10} />
            </button>
          </div>
        ))}
      </div>

      <div className="cursor-pointer">
        <Button className="w-full text-[#FFFFFF] font-semibold text-lg cursor-pointer">
          Submit
        </Button>
      </div>
    </section>
  );
};

export default SkipCreateProject;
