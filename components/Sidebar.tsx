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
            width={50}
            height={50}
            alt="logo"
            className="p-4"
          />
          <div className="hover:underline">Home</div>
        </div>
      </div>

      <div>
        <div className="flex items-center -mb-1">
          <Image
            src="/assets/events.svg"
            width={50}
            height={50}
            alt="logo"
            className="p-4"
          />
          <div className="hover:underline">Events</div>
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
              className="p-4"
            />
            <div className="hover:underline">Ongoing Events</div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <Image
              src="/assets/Vector1.svg"
              width={50}
              height={50}
              alt="logo"
              className="p-4"
            />
            <div className="hover:underline">Upcoming</div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <Image
              src="/assets/Vector2.svg"
              width={50}
              height={50}
              alt="logo"
              className="p-4"
            />
            <div className="hover:underline">Archive</div>
          </div>
        </div>
      </div>
      <div className="mx-6 mt-40 border-t border-gray-700">
      </div>

      <div className="-space-y-2">
      <div>
        <div className="flex items-center">
          <Image
            src="/assets/Vector3.svg"
            width={50}
            height={50}
            alt="logo"
            className="p-4"
          />
          <div className="hover:underline">Your Dashboard</div>
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
          <div className="hover:underline">Your Certificates</div>
        </div>
      </div>
      </div>

      <div className="pt-24 mx-4 text-xs text-gray-400">
        <div>Made with &lt;3 IEEE <br/>This is for sure not an easter egg.</div>
      </div>
    </div>
  );
};

export default Sidebar;