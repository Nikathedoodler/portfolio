import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header1() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-12 flex-col">
      <div className="flex flex-col items-left justify-center">
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "string", stiffness: 100 }}
          className="text-4xl font-black tracking-tight mb-8"
        >
          Hey it’s,
        </motion.h1>

        {/* Profile Card */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-full max-w-xl"
        >
          <div className="rounded-[3rem] bg-[#18181b] shadow-xl px-8 pt-5 pb-6 flex flex-col z-10 relative -mb-8">
            {/* Status Row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-xs text-gray-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#b3ff6a] mr-2"></span>
                Available for work
              </div>
              <div className="flex items-center text-xs text-gray-400 font-semibold">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                7:15PM
              </div>
            </div>

            {/* Profile Row */}
            <div className="flex items-center mb-4">
              <img
                src="/avatar-placeholder.png"
                alt="Jay Dwivedi"
                className="w-14 h-14 rounded-full object-cover border-2 border-white mr-4"
              />
              <div>
                <div className="text-xl font-bold text-white">Nika Kakulia</div>
                <div className="text-sm text-gray-400">Frontend Developer</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-2">
              <button className="flex-1 bg-[#232326] hover:bg-[#b3ff6a] hover:text-[#18181b] text-white rounded-2xl py-3 font-semibold transition-colors flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 2.5 3 5 3 5s3-2.5 3-5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 11c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 2.5 3 5 3 5s3-2.5 3-5z"
                  />
                </svg>
                Hire Me
              </button>
              <button className="flex-1 bg-[#232326] hover:bg-[#b3ff6a] hover:text-[#18181b] text-white rounded-2xl py-3 font-semibold transition-colors flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9h8M8 13h6"
                  />
                </svg>
                Copy Email
              </button>
            </div>
          </div>
          {/* Green Creativity Bar */}
          <div className="absolute left-0 right-0 -bottom-16 flex flex-col items-center z-0">
            <div className="rounded-b-[2rem] pt-16 pb-4 bg-lime-400 w-full h-20 flex items-center justify-center text-[#18181b] font-semibold text-sm shadow-lg">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              UI so clean you’ll want to eat off it
            </div>
          </div>
        </motion.div>

        {/* Tagline Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 flex flex-col items-center justify-center w-full max-w-lg"
        >
          <div className="text-3xl font-semibold text-gray-400 leading-snug text-left w-full">
            Professional pixel pusher
            <span className="inline-flex mx-2">
              <img
                src="/coffee1.jpg"
                alt="coffee"
                className="w-8 h-8 rounded-md object-cover mx-0.5"
              />
              <img
                src="/coffee2.jpg"
                alt="coffee"
                className="w-8 h-8 rounded-md object-cover mx-0.5"
              />
            </span>
            and
            <br />
            semicolon
            <span className="inline-block align-middle mx-2 w-14 h-7 bg-gray-100 rounded-full"></span>
            enthusiast.
          </div>
          <div className="mt-4 text-3xl font-semibold text-gray-400 w-full text-left flex flex-col">
            <span>
              I turn Figma dreams into browser realities (and nightmares).
              <span className="inline-block ml-3 align-middle">
                <img
                  src="/music-widget.png"
                  alt="music widget"
                  className="w-20 h-8 rounded-xl shadow"
                />
              </span>
              .
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
