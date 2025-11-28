"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import ConfirmPasswordModal from "./confirm-password";

export default function DeleteAccountButton() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <section>
      <RadioGroup
        onValueChange={(value) => setIsConfirmed(value === "option-one")}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one" className="text-[#3A3A3A]">
            By confirming, you acknowledge that you understand and accept these
            conditions.
          </Label>
        </div>
      </RadioGroup>
      <button
        className="flex items-center gap-2 mt-4 bg-[#F32E2E] hover:bg-[#F32E2E]/90 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => setModalOpen(true)}
        disabled={!isConfirmed}
      >
        <span>
          <Trash2Icon size={18} className="disabled:cursor-not-allowed" />
        </span>
        <span className="disabled:cursor-not-allowed">Delete Account</span>
      </button>
      {modalOpen && (
        <ConfirmPasswordModal
          mode={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Confirm account deletion"
          description="Please enter your password to confirm the permanent deletion of your account."
        />
      )}
    </section>
  );
}
