"use client";

import { Architects_Daughter, Dancing_Script } from "next/font/google";
import { homeServices } from "./homeServiceData";
import Link from "next/link";

const architects = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const HomeServices = () => {
  return (
    <div className="bg-[#d17a29] text-white pb-10">
      <div className={`pt-16 text-center ${architects.className}`}>
        <h1 className="text-6xl font-[400]">Our Services</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-2xl m-auto">
          {homeServices.map((service, i) => (
            <Link
              href={service.link}
              key={i}
              className="p-10 flex flex-col hover:scale-110 transition-all duration-300 items-center text-white hover:text-white no-underline hover:no-underline"
            >
              <img
                src={service.image}
                className="h-[150px] w-[175px] object-cover object-top"
                style={{
                  clipPath:
                    i % 2
                      ? "polygon(0 0, 100% 20%, 100% 100%, 0 80%)"
                      : "polygon(100% 0%, 0 20%, 0 100%, 100% 80%)",
                }}
              />
              <h1
                className={`${dancing.className} rotate-[${
                  i % 2 ? "9deg" : "-9deg"
                }]`}
              >
                {service.title}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
