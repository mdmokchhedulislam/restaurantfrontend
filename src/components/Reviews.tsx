"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  text: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    author: {
      name: "Tayyab Sohail",
      role: "UX/UI Designer",
      avatar:
        "http://res.cloudinary.com/dn7oeugls/image/upload/v1750734884/ldzpnek2vopselof1rey.jpg",
    },
    rating: 5,
  },
  {
    id: 2,
    text: "Absolutely incredible dining experience! The attention to detail in every dish was remarkable. The flavors were perfectly balanced and the presentation was stunning.",
    author: {
      name: "Sarah Chen",
      role: "Food Blogger",
      avatar:
        "http://res.cloudinary.com/dn7oeugls/image/upload/v1750734884/ldzpnek2vopselof1rey.jpg",
    },
    rating: 5,
  },
  {
    id: 3,
    text: "Outstanding service and exceptional quality. Every bite was a delightful surprise. The chef's creativity really shines through in each carefully crafted dish.",
    author: {
      name: "Marcus Johnson",
      role: "Restaurant Critic",
      avatar:
        "http://res.cloudinary.com/dn7oeugls/image/upload/v1750734884/ldzpnek2vopselof1rey.jpg",
    },
    rating: 5,
  },
];

export default function Reviews() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const currentData = testimonials[currentTestimonial];

  return (
    <div className="">
      <div className="bg-white rounded-3xl overflow-hidden">
        <div className="grid lg:grid-cols-2  justify-between gap-8 lg:gap-[105px]">
          {/* Left Content Section */}
          <div className=" flex flex-col justify-center space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-xl lg:text-[50px] text-[30px] font-bold text-[#000000]">
                Customer <span className="text-[#A52A2A]">Feedback</span>
              </h1>
            </div>

            {/* Testimonial Text */}
            <div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Fresh, flavorful, and just the right amount of heat. <br /> The tuna was buttery, the rice well-seasoned, and <br /> the chili mayo added a great kick. A must-try for <br /> sushi lovers.
              </p>
            </div>

            {/* Rating Stars */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < currentData.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Author Info and Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={currentData.author.avatar || "/placeholder.svg"}
                    alt={currentData.author.name}
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-gray-200"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {currentData.author.name}
                  </h3>
                  <p className="text-gray-600">{currentData.author.role}</p>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-red-500 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className=" flex items-center justify-center  ">
            <div className="transform  transition-transform duration-300">
              <Image
                src="/person.png"
                alt="Professional Chef"
                width={400}
                height={500}
                className="w-full  object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
