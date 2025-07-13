"use client"

import Image from "next/image"
import Marquee from "react-fast-marquee"

const partners = [
  {
    id: 1,
    name: "Restaurant",
    logo: "/image 61.png",
  },
  {
    id: 2,
    name: "Bakery",
    logo: "/image 62.png",
  },
  {
    id: 3,
    name: "Quality Assured",
    logo: "/image 63.png",
  },
  {
    id: 4,
    name: "Fresh Food",
    logo: "/image 64.png",
  },
  {
    id: 5,
    name: "Bistro",
    logo: "/image 65.png",
  },
  {
    id: 6,
    name: "Organic",
    logo: "/image 66.png",
  },
]

export default function PartnersSection() {
  return (
    <section className="w-full bg-white lg:mt-80 mt-10 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="lg:text-base text-sm text-[#A52A2A] uppercase tracking-wider mb-2">PARTNERS & CLIENTS</p>
          <h2 className="text-2xl lg:text-[48px] font-bold text-[#333333]">We work with the best people</h2>
        </div>

        
        

        {/* Optional: Second row with reverse direction for more visual appeal */}
        <div className="overflow-hidden mt-8">
          <Marquee direction="right" speed={90} gradient={false} pauseOnHover={true} className="py-4">
            {partners.map((partner) => (
              <div key={`reverse-${partner.id}`} className="flex items-center justify-center mx-8 lg:mx-12">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
