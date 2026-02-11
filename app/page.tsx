import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-screen flex justify-center p-10 max-md:flex-col items-center gap-5 px-20 max-sm:px-5 bg-purple-50">
        {/* Text Area */}
        <div className="md:w-1/2">
          <h1 className="font-bold text-5xl  mb-4">
            Host, Connect,
            <br /> Celebrate: Your Events, Our Platform.
          </h1>
          <p className="mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Magni, nisi. Quisquam, odio voluptates,{" "}
          </p>
          <button className="bg-violet-500 text-white px-6 py-2 font-medium text-lg rounded-full max-md:w-full ">
            Explore Now
          </button>
        </div>

        {/* Image Area */}
        <div className="">
          <Image
            width={500}
            height={500}
            alt="image"
            src={"/hero.png"}
            className="object-contain md:h-120 w-full"
          />
        </div>
      </section>

      <h1 className="text-3xl font-bold py-10 px-20">
        Trusted by Thounsand of Events
      </h1>

      <section className="px-10 flex py-20">
        <div className="shadow-xl rounded-xl">
          <div className="">
            <img
              src={"/eventbanner.jpg"}
              alt=""
              className="rounded-t-xl w-80 object-cover"
            />
          </div>

          <div className="p-2 py-3">
            <div className="flex gap-2">
              <p className="px-1 rounded-full bg-green-200 font-semibold text-green-800">
                $100
              </p>
              <p className="bg-gray-100 font-semibold text-gray-600 rounded-full px-1">
                Tech
              </p>
            </div>
            <p className="pt-1">Fri, Dec 15, 7:00AM</p>
            <h1 className="text-xl font-bold py-1 ">Leap Tech Startup Event</h1>
            <p>Karachi</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
