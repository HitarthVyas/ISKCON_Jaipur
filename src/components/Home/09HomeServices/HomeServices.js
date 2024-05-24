"use client";

import { Architects_Daughter, Dancing_Script } from "next/font/google";
import { homeServices } from "./homeServiceData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const architects = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const HomeServices = () => {
  const [animationState, setAnimationState] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setAnimationState(true);
    }
  }, [inView]);

  return (
    <div className="bg-[#d17a29] text-white pb-10">
      <div className={`pt-16 text-center ${architects.className}`}>
        <h1 className="text-6xl font-[400]">Our Services</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-2xl m-auto">
          {homeServices.map((service, i) => (
            <Link href={service.link} key={i} className="hover:no-underline no-underline hover:scale-110 transition-all duration-500">
              <motion.div
                className="flex flex-col items-center gap-5 py-10 text-white"
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={animationState ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="">
                  <img
                    src={service.image}
                    className="h-[150px] w-[175px] object-cover object-center m-auto"
                    style={{
                      clipPath:
                        i % 2
                          ? "polygon(0 0, 100% 20%, 100% 100%, 0 80%)"
                          : "polygon(100% 0%, 0 20%, 0 100%, 100% 80%)",
                    }}
                  />
                  <h1
                    className={`text-center ${dancing.className}`}
                    style={{
                      transform: `rotate(${i % 2 ? "9deg" : "-9deg"})`,
                    }}
                  >
                    {service.title}
                  </h1>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
