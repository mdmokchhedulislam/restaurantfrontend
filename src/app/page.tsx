import BestSellerDishes from "@/components/BestSellerDishes";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnerSection";
import RestaurantBanner from "@/components/RestaurantBanner";
import Reviews from "@/components/Reviews";
import TeamSection from "@/components/TeamSection";
import React from "react";

const page = () => {
  return (
    <div>
      <RestaurantBanner />
      <div className="container mx-auto px-4">
        <BestSellerDishes />
        <Reviews />
      </div>
      <TeamSection />
      <div className="container mx-auto px-4">
        <PartnersSection />
      </div>
      <Footer/>
    </div>
  );
};

export default page;
