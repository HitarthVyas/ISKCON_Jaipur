"use client";
import React from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { useInView } from "react-intersection-observer";

const pop = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const CouncilMembersIntro = () => {
  const [imageRef1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [imageRef2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [imageRef3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [imageRef4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <div className="flex justify-center my-20 mx-32 max-sm:mx-5">
        <div className="max-w-[450px] px-4 md:max-w-[1200px] lg:max-w-[1550px]">
          <h3
            className={`${pop.className} mb-12 text-center text-[#6a6a6a] relative underline-after`}
          >
            Temple Council Members
          </h3>
          {/* First Card */}
          <motion.div
            className="flex lg:flex-row flex-col lg:gap-16 gap-10 items-center justify-center"
            initial={{ x: -100, opacity: 0 }}
            animate={inView1 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.img
              ref={imageRef1}
              src="/Connect/BhaktiVriksha/bhakti-vriksha.png"
              className="w-[200px] h-[200px] rounded-full"
              style={{ boxShadow: "60px 60px 120px 0px rgba(0, 0, 0, 0)" }}
              initial={{ opacity: 0 }}
              animate={inView1 ? { opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div
              className="text-gray-700 text-justify text-sm md:text-[15px]"
              style={{ boxShadow: "60px 60px 120px 0px rgba(0, 0, 0, 0)" }}
              initial={{ x: -100, opacity: 0 }}
              animate={inView1 ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            >
              <div
                className={`border-l-4 pl-4 ${pop.className} text-[#ea8044]`}
                style={{ borderColor: "#ea8044" }}
              >
                <h4>Pandit Dasa</h4>
                <h6 className="text-black">Chairman</h6>
              </div>
              <p className={`mt-5 ${pop.className} leading-7`}>
                Once upon a time in Dwarka, Mother Rohini was telling the queens
                of the Lord about the pastimes of the Lord with Radharani and
                other Gopis in Vrindavana. Hearing the pastimes narrated by
                Mother Rohini, Lord Krishna, Baladeva, and Subhadra became so
                delighted, overwhelmed with an emotional touch, and surprised
                that their eyes became wide, mouths remained open, and other
                parts became small and inserted inside their body.{" "}
                <b>
                  In this manner, Lord Krishna became Jagannath. When Devarshi
                  Narad took Darshan of this transcendental form, he requested
                  Lord to provide an opportunity to the whole world to have the
                  Darshan of this unique form.
                </b>
              </p>
            </motion.div>
          </motion.div>

          {/* Dotted Line Separator */}
          <div className="dotted-line mt-10"></div>

          {/* Second Card */}
          <motion.div
            className="flex lg:flex-row flex-col-reverse lg:gap-16 gap-10 items-center justify-center mt-16"
            initial={{ x: 100, opacity: 0 }}
            animate={inView2 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="text-gray-700 text-justify text-sm md:text-[15px]"
              style={{ boxShadow: "60px 60px 120px 0px rgba(0, 0, 0, 0)" }}
              initial={{ x: 100, opacity: 0 }}
              animate={inView2 ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div
                className={`border-l-4 pl-4 ${pop.className} text-[#ea8044]`}
                style={{ borderColor: "#ea8044" }}
              >
                <h4>Second Person</h4>
                <h6 className = "text-black">Vice Chairman</h6>
              </div>
              <p className={`mt-5 ${pop.className} leading-7`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue. Donec ullamcorper nulla non
                metus auctor fringilla. Integer posuere erat a ante venenatis
                dapibus posuere velit aliquet. Nulla vitae elit libero, a
                pharetra augue. Donec sed odio dui. Donec ullamcorper nulla non
                metus auctor fringilla.
              </p>
            </motion.div>
            <motion.img
              ref={imageRef2}
              src="/Connect/BhaktiVriksha/bhakti-vriksha.png"
              className="w-[200px] h-[200px] rounded-full"
              style={{ boxShadow: "60px 60px 120px 0px rgba(0, 0, 0, 0)" }}
              initial={{ opacity: 0 }}
              animate={inView2 ? { opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            />
          </motion.div>

          {/* Dotted Line Separator */}
          <div className="dotted-line mt-10"></div>

          {/* Third Card */}
          <motion.div
            className="flex lg:flex-row flex-col lg:gap-16 gap-10 items-center justify-center mt-16"
            initial={{ x: -100, opacity: 0 }}
            animate={inView3 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.img
              ref={imageRef3}
              src="/Connect/BhaktiVriksha/bhakti-vriksha.png"
              className="w-[200px] h-[200px] rounded-full"
              style={{ boxShadow: "60px 60px 120px 0px rgba(0, 0, 0, 0)" }}
              initial={{ opacity: 0 }}
              animate={inView3 ? { opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div
              className="text-gray-700 text-justify text-sm md:text-[15px]"
              style={{ boxShadow: "60px 60px 120px 0px rgba(0, 0, 0, 0)" }}
              initial={{ x: -100, opacity: 0 }}
              animate={inView3 ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            >
              <div
                className={`border-l-4 pl-4 ${pop.className} text-[#ea8044]`}
                style={{ borderColor: "#ea8044" }}
              >
                <h4>Third Person</h4>
                <h6 className = "text-black">Member</h6>
              </div>
              <p className={`mt-5 ${pop.className} leading-7`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue. Donec ullamcorper nulla non
                metus auctor fringilla. Integer posuere erat a ante venenatis
                dapibus posuere velit aliquet. Nulla vitae elit libero, a
                pharetra augue. Donec sed odio dui. Donec ullamcorper nulla non
                metus auctor fringilla.
              </p>
            </motion.div>
          </motion.div>

          {/* Dotted Line Separator */}
          <div className="dotted-line mt-10"></div>

          {/* Fourth Card */}
          <motion.div
            className="flex lg:flex-row flex-col-reverse lg:gap-16 gap-10 items-center justify-center mt-16"
            initial={{ x: 100, opacity: 0 }}
            animate={inView4 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="text-gray-700 text-justify text-sm md:text-[15px]"
              style={{ boxShadow: "60px 60px 120px 0px rgba(0, 0, 0, 0)" }}
              initial={{ x: 100, opacity: 0 }}
              animate={inView4 ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div
                className={`border-l-4 pl-4 ${pop.className} text-[#ea8044]`}
                style={{ borderColor: "#ea8044" }}
              >
                <h4>Fourth Person</h4>
                <h6 className = "text-black">Member</h6>
              </div>
              <p className={`mt-5 ${pop.className} leading-7`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue. Donec ullamcorper nulla non
                metus auctor fringilla. Integer posuere erat a ante venenatis
                dapibus posuere velit aliquet. Nulla vitae elit libero, a
                pharetra augue. Donec sed odio dui. Donec ullamcorper nulla non
                metus auctor fringilla.
              </p>
            </motion.div>
            <motion.img
              ref={imageRef4}
              src="/Connect/BhaktiVriksha/bhakti-vriksha.png"
              className="w-[200px] h-[200px] rounded-full"
              style={{ boxShadow: "60px 60px 120px 0px rgba(0, 0, 0, 0)" }}
              initial={{ opacity: 0 }}
              animate={inView4 ? { opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            />
          </motion.div>

          {/* Dotted Line Separator */}
          <div className="dotted-line mt-10"></div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .dotted-line {
          border-bottom: 0px dotted #ea8044;
          border-width: 0px 0px 6px 0px;
          height: 5px;
          width: 100%;
          margin-top: 30px;
          border-spacing: 60px;
        }
        .underline-after::after {
          content: "";
          display: block;
          width: 25%;
          margin: 0 auto;
          margin-top: 8px;
          border-bottom: 3px solid #ea8044;
        }
      `}</style>
    </>
  );
};

export default CouncilMembersIntro;
