"use client";

import Services from "@/components/Services/CommunityHall/01Services/Services";
import { Dancing_Script, Playfair } from "next/font/google";
import Link from "next/link";

const bookings = [
  "House Program",
  "Birthday Party",
  "Anniversary",
  "Marriage",
  "Corporate Events",
  "Spiritual Events",
  "Feast",
  "Other Bookings",
];

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const page = () => {
  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-top"
        style={{
          backgroundImage: "url('/Services/CommunityHall/community-hall.jpg')",
        }}
      >
        <h1
          className={`${dancing.className} absolute p-4 w-full text-center text-white text-5xl sm:text-7xl top-1/2`}
          style={{ textShadow: "0px 0px 5px black" }}
        >
          Community Hall
        </h1>
        <Link
          href="#contact"
          className="absolute w-full flex justify-center top-[80vh] no-underline hover:no-underline active:no-underline"
        >
          <button className="py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold top-[80vh]">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="py-10">
        <h1
          className={`${play.className} text-center text-orange-900 font-medium`}
        >
          Bookings For
        </h1>
        <div className="flex flex-wrap gap-4 justify-center p-5">
          {bookings.map((booking, i) => (
            <button key={i} className="text-white text-base font-medium bg-[#d17a29] px-3 py-1 rounded-full">
              {booking}
            </button>
          ))}
        </div>
        <h2
          className={`font-medium text-3xl text-orange-900 text-center pt-10`}
          id="contact"
        >
          <span className={`${play.className} text-4xl font-semibold`}>
            CONTACT US:
          </span>{" "}
          9649689649
        </h2>
      </div>
    </div>
  );
};

export default page;
