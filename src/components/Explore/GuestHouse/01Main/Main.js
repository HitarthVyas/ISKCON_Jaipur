"use client";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

export default function GuestHouseMain() {
  return (
    <>
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
          backgroundImage: "url('/Explore/GuestHouse/MainPoster.jpg')",
        }}
        className="h-[100vh] mt-[65px]  bg-cover bg-top w-full"
      >
        <div className="absolute flex flex-col items-center w-full top-[60vh] justify-center">
          <motion.h1
            className={`font-bold text-white text-4xl sm:text-6xl text-center  ${dancing.className}`}
            style={{
              textShadow:
                "2px 2px black, 20px 20px 50px #d17a29, -20px -20px 50px #d17a29, -20px 20px 50px #d17a29, 20px -20px 50px black",
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome To GuestHouse
          </motion.h1>
        </div>
      </div>
    </>
  );
}
