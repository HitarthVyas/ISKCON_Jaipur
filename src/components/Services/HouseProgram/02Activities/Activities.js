"use client";

import Image from "next/image";
import { activities } from "./activitiesData";

const Activities = () => {
  return (
    <div className="py-14 bg-[#d17a29] text-white">
      <h1 className="text-center font-medium pb-7">Our Activities</h1>
      <div className="flex gap-5 flex-wrap justify-evenly max-w-screen-2xl m-auto">
      {/* <div className="grid gap-8 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center max-w-screen-2xl m-auto"> */}
        {activities.map((activity, i) => (
          <div className="max-w-80 rounded bg-gray-100 h-[346px]" key={i}>
            <div className="p-3 flex items-center flex-col">
              <h5 className="mb-5 text-center text-2xl font-bold tracking-tight text-gray-900">
                {activity.title}
              </h5>
              <div className="mb-5 w-72">
                <Image
                  src="/IJP/ijpBanner.jpg"
                  alt="Description of your image"
                  width={500}
                  height={300}
                  className=""
                />
              </div>
              <p className="mb-2 text-justify font-normal text-sm text-gray-800">
                {activity.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
