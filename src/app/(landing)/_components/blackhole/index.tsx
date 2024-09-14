
// import Image from "next/image";
// import React from "react";


// const Blackhole = () => {
//   return (
//     // <div >
//     //   {/* <video
//     //     autoPlay
//     //     muted
//     //     loop
//     //     className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover "
//     //   >
//     //     <source src="/blackhole.webm" type="video/webm" />
//     //   </video> */}
//     //     <Image
//     //       priority
//     //       src="/blackhole.jpg"
//     //       className="opacity-[0.95]"
//     //       alt="blackhole"
//     //       sizes="100vw"
//     //       fill
//     //       objectFit="contain"
//     //       style={{ objectFit: 'contain' }}
//     //     />
//     // </div>
//     <div className="relative py-20">
//     <div className="w-full h-3/6 absolute rounded-[50%] radial--blur opacity-40 mx-10" />
//     <div className="w-full aspect-video relative">
//       <Image
//         priority
//         src="/blackhole.jpg"
//         className="opacity-[0.95]"
//         alt="snippet"
//         sizes="100vw"
//         fill
//       //   objectFit="contain"
//         style={{ objectFit: 'contain' }}
//       />
//     </div>
//   </div>
//   );
// };

// export default Blackhole;

// import Image from "next/image";
// import React from "react";

// const Blackhole = () => {
//   return (
//     <div className="relative w-full h-screen">
//       <Image
//         priority
//         src="/blackhole.jpg"
//         alt="blackhole"
//         sizes="100vw"
//         fill
//         style={{ objectFit: 'cover' }} // Ensures the image fills the entire screen
//       />
//     </div>
//   );
// };

// export default Blackhole;

import React from "react";

const Blackhole = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Blackhole;
