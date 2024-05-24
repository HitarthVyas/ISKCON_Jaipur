"use client"

import BvIntro from "@/components/Connect/BhaktiVriksha/01Intro/BvIntro"
import Objectives from "@/components/Connect/BhaktiVriksha/02Objectives/Objectives"
import Contact from "@/components/Connect/BhaktiVriksha/03Contact/Contact"
import Link from "next/link"

const page = () => {
  return (
    <div>
      <div>
        <div
          className="relative h-screen w-full bg-cover bg-top"
          style={{ backgroundImage: "url('/Connect/BhaktiVriksha/bhakti-vriksha.png')" }}
        >
          <Link
            href="#contact"
            className="absolute w-full flex justify-center top-[80vh] no-underline hover:no-underline active:no-underline"
          >
            <button className="py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold top-[80vh]">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <BvIntro />
      <Objectives />
      <Contact />
    </div>
  )
}

export default page