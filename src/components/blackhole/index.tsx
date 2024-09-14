import Image from "next/image";
import React from "react";


const Blackhole = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video> */}
    <Image
      src="/blackhole.jpg"
      alt="blackhole"
      layout="fill"
      objectFit="cover"
      className="rotate-180"
    />
    </div>
  );
};

export default Blackhole;