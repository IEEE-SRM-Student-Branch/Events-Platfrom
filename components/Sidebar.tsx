import Image from "next/image";
import React, { FunctionComponent } from "react";

const Sidebar: FunctionComponent = () => {
  return (
    <div className="h-screen w-2/12 bg-white bg-opacity-5  backdrop-blur-lg drop-shadow-lg  rounded-xl cursor-pointer">
      <Image
        src="/assets/logo.svg"
        width={80}
        height={80}
        alt="logo"
        className="p-4"
      />

      <div className="-space-y-2">
      <div>
        <div className="flex items-center">
          <Image
            src="/assets/Home.svg"
            width={60}
            height={60}
            alt="logo"
            className="p-4 ml-6"
          />
          <div className="hover:underline text-xl">Home</div>
        </div>
      </div>

      <div>
        <div className="flex items-center -mb-1">
          <Image
            src="/assets/events.svg"
            width={55}
            height={55}
            alt="logo"
            className="p-4 ml-7"
          />
          <div className="hover:underline text-xl">Events</div>
        </div>
      </div>
      </div>

      <div className=" ml-4 -space-y-2">
        <div>
          <div className="flex items-center">
            <Image
              src="/assets/Vector.svg"
              width={50}
              height={50}
              alt="logo"
              className="p-4 ml-10"
            />
            <div className="hover:underline text-xl">Ongoing Events</div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <Image
              src="/assets/Vector1.svg"
              width={50}
              height={50}
              alt="logo"
              className="p-4 ml-10"
            />
            <div className="hover:underline text-xl">Upcoming</div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <Image
              src="/assets/Vector2.svg"
              width={50}
              height={50}
              alt="logo"
              className="p-4 ml-10"
            />
            <div className="hover:underline text-xl">Archive</div>
          </div>
        </div>
      </div>
      <div className="mx-6 mt-40 border-t border-gray-700">
      </div>

      <div className="-space-y-2">
      <div>
        <div className="flex items-center pt-4">
          <Image
            src="/assets/Vector3.svg"
            width={50}
            height={50}
            alt="logo"
            className="p-4"
          />
          <div className="hover:underline text-xl">Your Dashboard</div>
        </div>
      </div>

      <div>
        <div className="flex items-center -mb-1">
          <Image
            src="/assets/Vector4.svg"
            width={50}
            height={50}
            alt="logo"
            className="p-4"
          />
          <div className="hover:underline text-xl">Your Certificates</div>
        </div>
      </div>
      </div>

      <div className="pt-24 mx-4 text-x text-gray-400">
        <div>Made with &lt;3 IEEE <br/>This is for sure not an easter egg.</div>
      </div>
    </div>
  );
};

export default Sidebar;