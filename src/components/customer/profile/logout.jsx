"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function LogoutModal({ mode = false, onClose }) {
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
                alt="logout Icon"
                height={80}
                width={80}
                src="/customer/root/profile/logout.png"
              />
            </div>

            <div>
              <p className="text-center font-semibold">
                Are You Sure You Want To Logout?
              </p>
            </div>

            {/* Sub text */}
            <div>
              <p className="text-center text-[#9D9D9D]">
                Are you sure you want to log out of your account
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

function Logout() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main>
      <button
        className={cn(
          "flex items-center justify-start gap-3 rounded p-2 hover:bg-[#F6F6F6] cursor-pointer w-full"
        )}
        onClick={() => setModalOpen(true)}
      >
        <span>
          <LogOut size={19} className="text-[#9D9D9D]" />
        </span>
        <span className="text-[#9D9D9D] font-medium">Logout</span>
      </button>
      {modalOpen && (
        <LogoutModal mode={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </main>
  );
}

export default Logout;
