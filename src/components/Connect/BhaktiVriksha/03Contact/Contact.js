"use client";

import { Roboto_Condensed } from "next/font/google";
import { contactData } from "./contactData";

const reddit = Roboto_Condensed({
  subsets: ["latin"],
});

const Contact = () => {
  return (
    <div className="py-16 m-auto">
      <h2
        className={`${reddit.className} text-5xl font-semibold text-orange-900 text-center pb-5`}
        id="contact"
      >
        CONTACT US: 9649689649
      </h2>
      <div className="py-10 px-6 flex justify-center gap-5 flex-wrap">
        {contactData.map((item, index) => (
          <div className="w-[220px] rounded hover:scale-105 transition-all duration-500 pt-2 pb-3 pl-2 bg-gradient-to-br to-[#d17a29] from-black text-white">
            <h6 className="pb-2 font-medium">{item.name}</h6>
            <h5 className="">{item.number}</h5>
            <div className="flex pt-3">
              <img src="/Home/Hero/location.svg" className="pr-2" />
              <span className="text-base">{item.address}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
