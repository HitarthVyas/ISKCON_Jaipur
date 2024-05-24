import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";
import { qualities } from "./qualities";

const play = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const MyComponent = ({ point }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="h-full w-full bg-black/50 flex justify-center p-2 flex-col"
      initial={{ opacity: 0 }} // Initial hidden state
      animate={{ opacity: isHovered ? 1 : 0 }} // Visible state with animation
      transition={{ duration: 0.5 }} // Transition duration
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className={`${play.className} text-justify text-[12px] m-0 text-gray-100`}
        style={{
          textAlignLast: "center",
        }}
      >
        {point}
      </p>
    </motion.div>
  );
};

const Objectives = () => {
  return (
    <div className={`py-10 text-center bg-[#ececec]`}>
      <h1 className={`${play.className} pb-5 px-2`}>
        Srila <span className="text-[#d17a29]">Prabhupada</span>: The Ocean of Qualities
      </h1>
      <div className="flex gap-x-2 gap-y-4 flex-row flex-wrap justify-center">
        {qualities.map((quality, index) => (
          <motion.div
            className="bg-white"
            key={index}
            initial={{ opacity: 0, y: 50 }} // Initial hidden state
            animate={{ opacity: 1, y: 0 }} // Visible state with animation
            transition={{ duration: 0.5, delay: index * 0.2 }} // Transition duration with a consistent delay
          >
            <h5 className={`${play.className}`}>{quality.title}</h5>
            <div
              className="w-[180px] h-[180px] text-white bg-contain"
              style={{ backgroundImage: `url(${quality.img})` }}
            >
              <MyComponent point={quality.point} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Objectives;
