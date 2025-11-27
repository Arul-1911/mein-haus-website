"use client";

import { Monitor, Smartphone } from "lucide-react";
import { useState } from "react";
import ConfirmPasswordModal from "./confirm-password";

const sessions = [
  {
    id: 1,
    device: "Laptop",
    deviceType: "desktop",
    browser: "Chrome on Windows",
    location: "Mumbai, India",
    continent: "Asia",
    ipAddress: "103.21.58.132",
    lastActive: "Active now",
    isCurrent: true,
  },
  {
    id: 2,
    device: "Mobile",
    deviceType: "mobile",
    browser: "Safari on iPhone",
    location: "Singapore",
    continent: "Asia",
    ipAddress: "202.94.70.45",
    lastActive: "2 hours ago",
    isCurrent: false,
  },
];

function BrowserSession() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleLogout = (sessionId) => {
    console.log(`Logging out session: ${sessionId}`);
  };

  return (
    <main className="bg-white rounded-xl p-4">
      <h2 className="font-semibold text-xl">Browser Sessions</h2>
      <p className="font-medium text-[#9D9D9D] text-sm">
        Manage and log out your active sessions on other browsers and devices.
      </p>
      <hr className="my-3" />
      <p className="font-medium text-[#9D9D9D] text-sm mb-6">
        If necessary, you may log out of all of your other browser sessions
        across all of your devices. Some of your recent sessions are listed
        below; however, this list may not be exhaustive. If you feel your
        account has been compromised, you should also update your password.
      </p>

      {/* Sessions List */}
      <div className="space-y-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                {/* Device Icon */}
                <div className="shrink-0">
                  {session.deviceType === "desktop" ? (
                    <Monitor />
                  ) : (
                    <Smartphone />
                  )}
                </div>

                {/* Session Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-base">
                      {session.device}
                    </h3>
                    {session.isCurrent && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                        Current Session
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    {session.browser}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#9D9D9D]">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {session.location} ({session.continent})
                    </span>
                    <span>IP: {session.ipAddress}</span>
                    <span className="font-medium text-gray-700">
                      {session.lastActive}
                    </span>
                  </div>
                </div>
              </div>

              {/* Logout Button */}
              {/* {!session.isCurrent && (
                <button
                  onClick={() => handleLogout(session.id)}
                  className="text-red-600 hover:text-red-700 text-sm font-medium px-3 py-1 hover:bg-red-50 rounded transition-colors"
                >
                  Log Out
                </button>
              )} */}
            </div>
          </div>
        ))}
      </div>

      {/* Log Out All Sessions Button */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <button
          className="bg-[#F2F2F2] hover:bg-[#F2F2F2] text-[#1E1E1E] px-6 py-2 rounded-lg font-medium transition-colors"
          onClick={() => setModalOpen(true)}
        >
          Logout other browser sessions
        </button>
      </div>

      {modalOpen && (
        <ConfirmPasswordModal
          mode={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Logout other browser sessions"
          description="Please enter you password to confirm you would like to log out of your other browser sessions across all of your devices."
        />
      )}
    </main>
  );
}

export default BrowserSession;
