"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import ConfirmPasswordModal from "./confirm-password";

function TwoFactor() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className="bg-white rounded-xl p-4 mt-6">
      <h2 className="font-semibold text-md">Two Factor Authentication</h2>
      <p className="text-[#9D9D9D] text-sm font-medium">
        Add additional security to your account using two factor authentication.
      </p>
      <hr
        className="my-3
      "
      />
      <div>
        <h2 className="font-semibold text-md mt-2">
          You have not enabled two factor authentication.
        </h2>
        <p className="text-[#9D9D9D] mt-1 text-sm font-medium">
          When two factor authentication is enabled, you will be prompted for a
          secure, random token during authentication. You may retrieve this
          token from your phone's Google Authenticator application.
        </p>
        <div className="text-white mt-4  rounded flex justify-end w-full">
          <Button
            variant="black"
            className="bg-[#67A90B] text-white hover:bg-[#67A90B]/90"
            onClick={() => setModalOpen(true)}
          >
            Enable
          </Button>
        </div>
      </div>
      {modalOpen && (
        <ConfirmPasswordModal
          mode={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </main>
  );
}

export default TwoFactor;
