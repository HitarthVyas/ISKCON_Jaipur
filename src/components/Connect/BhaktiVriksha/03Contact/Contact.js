"use client";

import { Playfair } from "next/font/google";

const play = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const Contact = () => {
  return (
    <h2
      className={`font-medium text-orange-900 text-center py-10`}
      id="contact"
    >
      <span className={`${play.className} text-5xl font-semibold`}>
        CONTACT US:
      </span>{" "}
      9649689649
    </h2>
  );
};

export default Contact;
