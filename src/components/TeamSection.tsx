// "use client";

// import Image from "next/image";

// interface TeamMember {
//   id: number;
//   name: string;
//   role: string;
//   image: string;
// }

// const teamMembers: TeamMember[] = [
//   {
//     id: 1,
//     name: "Mark Henry",
//     role: "Author",
//     image: "/MarkHenry.png",
//   },
//   {
//     id: 2,
//     name: "Lucky Helen",
//     role: "Author",
//     image: "/MarkHenry.png",
//   },
//   {
//     id: 3,
//     name: "Moon Henry",
//     role: "Founder",
//     image: "/MarkHenry.png",
//   },
//   {
//     id: 4,
//     name: "Tom Morrow",
//     role: "Specialist",
//     image: "/MarkHenry.png",
//   },
// ];

// export default function TeamSection() {
//   return (
//     <section className="w-full lg:relative">
//       {/* Header Section */}
//       <div className="bg-[#AD1519] text-white py-16 sm:py-24 lg:py-36 px-4 relative">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
//             Team Member
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
//             Varius sed pharetra dictum neque massa congue
//           </p>
//         </div>
//       </div>

//       {/* Team Members - Normal flow on mobile/tablet, absolute on large screens */}
//       {/* For large device */}
//       <div className="hidden lg:block">
//         <div className=" py-8 lg:py-0 lg:absolute lg:top-40 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:translate-y-1/2 w-full max-w-6xl px-4 lg:px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//             {teamMembers.map((member) => (
//               <div key={member.id} className="text-center group">
//                 <div className="mb-3 sm:mb-4 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 p-2 ">
//                   <Image
//                     src={member.image || "/placeholder.svg"}
//                     alt={member.name}
//                     width={200}
//                     height={200}
//                     className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-lg"
//                   />
//                 </div>
//                 <div className="space-y-1  rounded-lg p-3 shadow-sm">
//                   <h3 className="text-base sm:text-lg font-semibold text-gray-900">
//                     {member.name}
//                   </h3>
//                   <p className="text-gray-600 text-xs sm:text-sm">
//                     {member.role}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="lg:hidden block">
// <div className="absulate top-50">
//           <div className="grid grid-cols-2">
//             {teamMembers.map((member) => (
//               <div key={member.id} className="text-center group">
//                 <div className=" overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ">
//                   <Image
//                     src={member.image || "/placeholder.svg"}
//                     alt={member.name}
//                     width={200}
//                     height={200}
//                     className="w-full h-40 sm:h-48 md:h-52 object-cover "
//                   />
//                 </div>
                
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mark Henry",
    role: "Author",
    image: "/MarkHenry.png",
  },
  {
    id: 2,
    name: "Lucky Helen",
    role: "Author",
    image: "/MarkHenry.png",
  },
  {
    id: 3,
    name: "Moon Henry",
    role: "Founder",
    image: "/MarkHenry.png",
  },
  {
    id: 4,
    name: "Tom Morrow",
    role: "Specialist",
    image: "/MarkHenry.png",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full lg:relative max-w-[1920px] mx-auto">
      {/* Header Section */}
      <div className="bg-[#AD1519] text-white py-16 sm:py-24 lg:py-36 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Team Member
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Varius sed pharetra dictum neque massa congue
          </p>
        </div>
      </div>

      {/* Desktop View: Absolute Positioned */}
      <div className="hidden lg:block">
        <div className="py-8 lg:py-0 lg:absolute lg:top-40 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:translate-y-1/2 w-full max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="mb-3 sm:mb-4 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 p-2">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-1 rounded-lg p-3 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile & Tablet View */}
      <div className="block lg:hidden relative mt-[-40px] px-4">
        <div className="grid grid-cols-2 ">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="overflow-hidden  transition-transform duration-300 hover:scale-105">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-40 sm:h-48 md:h-52 object-cover"
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
