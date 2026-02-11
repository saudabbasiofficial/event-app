import React from "react";

const Card = () => {
  return (
    <>
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
    </>
  );
};

export default Card;
