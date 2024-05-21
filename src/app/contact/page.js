"use client";

import ContactIcons from "@/components/Contact/01ContactIcons/ContactIcons";
import ContactForm from "@/components/Contact/02ContactForm/ContactForm";
import Queries from "@/components/Contact/02Queries/Queries";
import Maps from "@/components/Contact/03Map/Maps";
import SocialMedia from "@/components/Contact/04SocialMedia/SocialMedia";

const page = () => {
  return (
    <div className="bg-white">
      <img
        src="/Contact/Contact_Us.png"
        className="w-full object-cover mt-16"
      />
      <ContactIcons />
      <div className="flex flex-wrap gap-10 items-center justify-evenly pb-10">
        <Queries />
        <Maps />
      </div>
        {/* <ContactForm /> */}
      <SocialMedia />
    </div>
  );
};

export default page;
