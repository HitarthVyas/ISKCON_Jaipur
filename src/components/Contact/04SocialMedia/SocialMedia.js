"use client";
import { motion } from "framer-motion";
import { Playfair } from "next/font/google";
import Link from 'next/link';

const playfair = Playfair({
  subsets: ["latin"],
});

const SocialMedia = () => {
  return (
    <div className="py-20 px-4">
      <h2
        className={`text-center pb-4 ${playfair.className} font-bold text-5xl sm:text-6xl`}
      >
        Follow Us On
      </h2>
      <div className="flex justify-center items-center gap-4 md:gap-20">
        <Link href="https://www.instagram.com/iskconjaipur.official/?igsh=MWRqbnl4M3o2ZXpucw%3D%3D" target="_blank">
          <motion.img
            src="/Home/Hero/social_media_icons/instagram.svg"
            className="h-10 sm:h-12 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          />
        </Link>
        <Link href="https://www.youtube.com/@iskcon_jaipur" target="_blank">
          <motion.img
            src="/Home/Hero/social_media_icons/youtube.svg"
            className="h-10 sm:h-12 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          />
        </Link>
        <Link href="https://wa.me/9649689649" target="_blank">
          <motion.img
            src="/Home/Hero/social_media_icons/whatsapp.svg"
            className="h-14 sm:h-16 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
