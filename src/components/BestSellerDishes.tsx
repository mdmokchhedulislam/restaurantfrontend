"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AddCategoryModal from "./AddCategoryModal";
import AddFoodModal from "./AddFoodModal";
import { getCategories } from "@/services/category";
import { getFood } from "@/services/food";

// const categories = ["All", "Breakfast", "Lunch", "Dinner"]

type Category = {
  _id: string;
  name: string;
};
type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: {
    _id: string;
    name: string;
  };
  __v: number;
};

export default function BestSellerDishes() {
  const [activeCategory, setActiveCategory] = useState("All");

  const [categories, setCategories] = useState<Category[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);

  // console.log(activeCategory);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 👉 Step 1: categoryParam তৈরি কর
        let categoryParam;

        if (activeCategory === "All") {
          categoryParam = undefined; // সব দেখাবে
        } else {
          categoryParam = activeCategory; // নির্দিষ্ট category দেখাবে
        }

        // 👉 Step 2: API Call
        const [categoriesRes, foodsRes] = await Promise.all([
          getCategories(),
          getFood({
            category: categoryParam,
          }),
        ]);

        // 👉 Step 3: State সেট কর
        setCategories(categoriesRes.data || []);
        setFoods(foodsRes.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // 👉 Step 4: ফাংশন কল কর
    fetchData();
  }, [activeCategory]); // activeCategory চেঞ্জ হলেই আবার fetch হবে

  // console.log(foods);

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
  };

  const refetchCategories = async () => {
    const res = await getCategories();
    if (!(res instanceof Error)) {
      setCategories(res.data || []);
    }
  };
  const refetchFoods = async () => {
    const res = await getFood();
    if (!(res instanceof Error)) {
      setFoods(res.data || []); // ✅ ঠিক কাজ করলো
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="text-center  lg:mt-12 mt-5">
        <h2 className="lg:text-[55px] text-3xl font-bold text-[#1F1F1F] mb-[16px] lg:mb-[18px] tracking-tight">
          Our Best Seller Dishes
        </h2>
        <p className="lg:text-[25px] text-base text-gray-600  mx-auto leading-relaxed lg:mb-[68px] mb-[30px]">
          Our fresh garden salad is a light and refreshing option. It features a <br />
          mix of crisp lettuce, juicy tomatoes all tossed in your choice of <br />
          dressing.
        </p>
      </div>

      {/* Filter and Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center lg:mb-[71px] mb-[30px] gap-6">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <button
            onClick={() => handleCategoryFilter("All")}
            className={`px-6 lg:py-2  rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              activeCategory === "All"
                ? "bg-gray-900 text-white "
                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-400 hover:shadow-md"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category._id}
              onClick={() => handleCategoryFilter(category._id)} // ✅ এখন string পাঠাচ্ছি
              className={`px-6 lg:py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category._id
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-400 hover:shadow-md"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row items-center gap-4">
          <h1>
            <AddFoodModal onFoodAdded={refetchFoods} />
          </h1>
          <h1>
            <AddCategoryModal onCategoryAdded={refetchCategories} />
          </h1>
        </div>
      </div>

      {/* Dishes Grid */}
      <div className="hidden lg:block max-w-[1299px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Salad Fry Card */}
          {foods.map((food) => {
            return (
              <div
                key={food._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={food.image}
                  alt={food.name}
                  width={400}
                  height={300}
                  className="w-full h-[297px] object-cover mb-8"
                />
                <div className="px-5 pb-5">
                  <div className="flex flex-row items-center justify-between mb-4">
                    <h3 className="lg:text-2xl font-medium text-black mb-2">
                      {food.name}
                    </h3>
                    <h3 className="text-[20px] font-medium  mb-2 bg-[#F03328] text-white px-[10px] py-1 rounded-full">
                      {food.category.name}
                    </h3>
                  </div>
                  <div className="flex flex-row items-center justify-between space-x-1">
                    <div className="flex items-center space-x-1">
                      {renderStars(5)} {/* Example rating */}
                      <span className="text-sm text-gray-500"></span>
                    </div>
                    <div>
                      <p className="text-bold mb-4 font-bold text-xl text-[#000000]">
                        ${food.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:hidden block">
        <div className="grid grid-cols-2">
          <Image src={"/Frame001.png"} alt="photo" height={500} width={500} />
          <Image src={"/Frame001.png"} alt="photo" height={500} width={500} />
          <Image src={"/Frame001.png"} alt="photo" height={500} width={500} />
          <Image src={"/Frame001.png"} alt="photo" height={500} width={500} />
          <Image src={"/Frame001.png"} alt="photo" height={500} width={500} />
          <Image src={"/Frame001.png"} alt="photo" height={500} width={500} />
        </div>
      </div>
    </div>
  );
}
