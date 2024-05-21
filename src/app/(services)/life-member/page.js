"use client";

import { Dancing_Script, Playfair } from "next/font/google";
import Link from "next/link";
import { members } from "./lifeData";

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const page = () => {
  return (
    <div>
      {/* <div
        className="relative h-screen w-full bg-cover bg-top"
        style={{ backgroundImage: "url('/IJP/ijpBanner.jpg')" }}
      >
        <Link
          href="#contact"
          className="absolute w-full flex justify-center top-[80vh] no-underline hover:no-underline active:no-underline"
        >
          <button className="py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold top-[80vh]">
            Contact Us
          </button>
        </Link>
      </div> */}

      <div className="sm:px-5 px-1 pr-4 pt-[80px] bg-black">
        <div className="flex items-center lg:flex-row flex-col gap-10 max-w-screen-xl m-auto">
          {/* <h1 className={`text-center font-medium w-2/5 ${dancing.className}`}>
            LIFE MEMBERSHIP PATRON
          </h1> */}
          <div>
            <img
              src="/Services/LifeMember/membership.png"
              className="w-full lg:min-w-[350px]"
            />
          </div>
          <div>
            <h2 className={`text-white pb-4 font-medium sm:text-left text-center`}>Benefits You Get</h2>
            <ul className="mb-0">
              {members.map((member, i) => (
                <li className="flex gap-2 m-2 text-justify mx-0" key={i}>
                  <img
                    src="/Services/LifeMember/right.svg"
                    className="self-start mt-1"
                  ></img>
                  <span className="sm:text-base text-white">{member}</span>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h2
        className={`font-medium text-orange-100 text-center py-10 bg-black`}
        id="contact"
      >
        <span className={`${play.className} text-5xl font-semibold text-white `}>
          CONTACT US:
        </span>{" "}
        +919649689649
      </h2>
    </div>
  );
};

export default page;
