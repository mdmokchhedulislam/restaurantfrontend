"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-[#880808] text-white lg:mt-10 mt-5 max-w-[1920px] mx-auto">
      <div className="container mx-auto  py-6 lg:py-8">
        {/* Mobile Layout (default) */}
        <div className="block md:hidden space-y-6">
          {/* Restaurant Section - Mobile */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wide">
              Restaurant
            </h3>
            <p className="text-sm text-red-100 leading-relaxed px-2">
              Subscribe our newsletter and get discount 25%off
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex max-w-sm mx-auto px-4"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-black text-sm rounded-l border-none outline-none bg-white"
                required
              />
              <button
                type="submit"
                className="bg-[#A52A2A]  px-4  py-2 rounded-r transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
            <div className="flex justify-center space-x-3 pt-2">
              <Link
                href="/"
                className="w-8 h-8  rounded-full flex items-center justify-center "
              >
                <Image
                  src="/image 75.png"
                  alt="Facebook"
                  width={16}
                  height={16}
                  className="w-8 h-8"
                />
              </Link>

              <Link
                href="/"
                className="w-8 h-8  rounded-full flex items-center justify-center "
              >
                <Image
                  src="/image 77.png"
                  alt="Facebook"
                  width={16}
                  height={16}
                  className="w-8 h-8"
                />
              </Link>
              <Link
                href="/"
                className="w-8 h-8 rounded-full flex items-center justify-center"
              >
                <Image
                  src="/image 76.png"
                  alt="Facebook"
                  width={16}
                  height={16}
                  className="w-8 h-8"
                />
              </Link>
              <Link
                href="/"
                className="w-8 h-8 rounded-full flex items-center justify-center"
              >
                <Image
                  src="/image 78.png"
                  alt="Facebook"
                  width={16}
                  height={16}
                  className="w-8 h-8"
                />
              </Link>
              <Link
                href="/"
                className="w-8 h-8 rounded-full flex items-center justify-center"
              >
                <Image
                  src="/image 79.png"
                  alt="Facebook"
                  width={16}
                  height={16}
                  className="w-8 h-8"
                />
              </Link>
            </div>
          </div>

          {/* Contact Us Section - Mobile */}
          <div className="text-center space-y-4 border-t border-red-700 pt-6">
            <h3 className="text-lg font-bold uppercase tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-red-100">
              <div className="flex items-start justify-center gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p className="text-center leading-relaxed">
                  3517 W. Gray St. Utica,
                  <br />
                  Pennsylvania 57867
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <p>(480) 555-0103</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <p>M.Alyaqout@4house.Co</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Links Section - Mobile */}
          <div className="text-center space-y-4 border-t border-red-700 pt-6">
            <h3 className="text-lg font-bold uppercase tracking-wide">Links</h3>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-red-100">
              <Link href="/" className="hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Our Menu
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Team
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Instagram Gallery Section - Mobile */}
          <div className="text-center space-y-4 border-t border-red-700 pt-6 hidden md:block">
            <h3 className="text-lg font-bold uppercase tracking-wide">
              Instagram Gallery
            </h3>
            <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
              <Image
                src={`/1.png`}
                alt={`Food`}
                width={80}
                height={80}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
              <Image
                src={`/1.png`}
                alt={`Food`}
                width={80}
                height={80}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Tablet Layout (md) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Restaurant Section - Tablet */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-wide">
                  Restaurant
                </h3>
                <p className="text-sm text-red-100">
                  Subscribe our newsletter and get discount 25%off
                </p>
                <form onSubmit={handleSubmit} className="flex max-w-md">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-black text-sm rounded-l border-none outline-none bg-white"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </form>
                <div className="flex space-x-3">
                  <Link
                    href="/"
                    className="w-8 h-8  rounded-full flex items-center justify-center "
                  >
                    <Image
                      src="/image 75.png"
                      alt="Facebook"
                      width={16}
                      height={16}
                      className="w-8 h-8"
                    />
                  </Link>

                  <Link
                    href="/"
                    className="w-8 h-8  rounded-full flex items-center justify-center "
                  >
                    <Image
                      src="/image 77.png"
                      alt="Facebook"
                      width={16}
                      height={16}
                      className="w-8 h-8"
                    />
                  </Link>
                  <Link
                    href="/"
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    <Image
                      src="/image 76.png"
                      alt="Facebook"
                      width={16}
                      height={16}
                      className="w-8 h-8"
                    />
                  </Link>
                  <Link
                    href="/"
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    <Image
                      src="/image 78.png"
                      alt="Facebook"
                      width={16}
                      height={16}
                      className="w-8 h-8"
                    />
                  </Link>
                  <Link
                    href="/"
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    <Image
                      src="/image 79.png"
                      alt="Facebook"
                      width={16}
                      height={16}
                      className="w-8 h-8"
                    />
                  </Link>
                </div>
              </div>

              {/* Contact Us Section - Tablet */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-wide">
                  Contact Us
                </h3>
                <div className="space-y-3 text-sm text-red-100">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <p>(480) 555-0103</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <p>M.Alyaqout@4house.Co</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Links Section - Tablet */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-wide">
                  Links
                </h3>
                <ul className="space-y-2 text-sm text-red-100">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-white transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-white transition-colors"
                    >
                      Our Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-white transition-colors"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-white transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Instagram Gallery Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-wide">
                  Instagram Gallery
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <Image
                    src={`/1.png`}
                    alt={`Food`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                  />
                  <Image
                    src={`/2.png`}
                    alt={`Food`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                  />
                  <Image
                    src={`/3.png`}
                    alt={`Food`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                  />
                  <Image
                    src={`/4.png`}
                    alt={`Food`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                  />
                  <Image
                    src={`/5.png`}
                    alt={`Food`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                  />
                  <Image
                    src={`/6.png`}
                    alt={`Food`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between">
            {/* Restaurant Section - Desktop */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-wide">
                Restaurant
              </h3>
              <p className="text-sm text-red-100 leading-relaxed">
                Subscribe our newsletter and get discount 25%off
              </p>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-black text-sm rounded-l border-none outline-none bg-white"
                  required
                />
                <button
                  type="submit"
                  className="lg:bg-orange-500 bg-[#A52A2A] hover:bg-orange-600 px-3 py-2 rounded-r transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </form>
              <div className="flex space-x-3">
                <Link
                  href="/"
                  className="w-8 h-8  rounded-full flex items-center justify-center "
                >
                  <Image
                    src="/image 75.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                    className="w-8 h-8"
                  />
                </Link>

                <Link
                  href="/"
                  className="w-8 h-8  rounded-full flex items-center justify-center "
                >
                  <Image
                    src="/image 77.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                    className="w-8 h-8"
                  />
                </Link>
                <Link
                  href="/"
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                >
                  <Image
                    src="/image 76.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                    className="w-8 h-8"
                  />
                </Link>
                <Link
                  href="/"
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                >
                  <Image
                    src="/image 78.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                    className="w-8 h-8"
                  />
                </Link>
                <Link
                  href="/"
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                >
                  <Image
                    src="/image 79.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                    className="w-8 h-8"
                  />
                </Link>
              </div>
            </div>

            {/* Contact Us Section - Desktop */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-wide">
                Contact Us
              </h3>
              <div className="space-y-4 text-sm text-red-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="leading-relaxed">
                    3517 W. Gray St. Utica, Pennsylvania 57867
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <p>(480) 555-0103</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <p>M.Alyaqout@4house.Co</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Links Section - Desktop */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-wide">
                Links
              </h3>
              <ul className="space-y-3 text-sm text-red-100">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Our Menu
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Instagram Gallery Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-wide">
                Instagram Gallery
              </h3>
              <div className="grid grid-cols-3 gap-2">
                <Image
                  src={`/1.png`}
                  alt={`Food`}
                  width={80}
                  height={80}
                  className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer rounded"
                  sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                />
                <Image
                  src={`/2.png`}
                  alt={`Food`}
                  width={80}
                  height={80}
                  className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer rounded"
                  sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                />
                <Image
                  src={`/3.png`}
                  alt={`Food`}
                  width={80}
                  height={80}
                  className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer rounded"
                  sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                />
                <Image
                  src={`/4.png`}
                  alt={`Food`}
                  width={80}
                  height={80}
                  className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer rounded"
                  sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                />
                <Image
                  src={`/5.png`}
                  alt={`Food`}
                  width={80}
                  height={80}
                  className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer rounded"
                  sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                />
                <Image
                  src={`/6.png`}
                  alt={`Food`}
                  width={80}
                  height={80}
                  className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer rounded"
                  sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - All Devices */}
      <div className="w-full bg-[#A52A2A] py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-red-100 text-sm gap-2">
          <p className="text-[16px] md:text-sm text-center md:text-left">
            © 2024. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs md:text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Partner
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
