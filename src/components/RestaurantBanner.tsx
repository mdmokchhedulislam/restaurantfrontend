// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { getFood } from "@/services/food";
// const foodItems = [
//   {
//     name: "BREAKFAST",
//     thumb: "/breakfast-hero.png",
//     hero: "/breakfast-hero.png",
//     bgColor: "#AD1519",
//   },
//   {
//     name: "Pancakes",
//     thumb: "/2.png",
//     hero: "/2.png",
//     bgColor: "#0A8754",
//   },
//   {
//     name: "French Toast",
//     thumb: "/3.png",
//     hero: "/3.png",
//     bgColor: "#1A1A40",
//   },
//   {
//     name: "Sandwich",
//     thumb: "/4.png",
//     hero: "/4.png",
//     bgColor: "#BF360C",
//   },
// ];
// type Food = {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
//   category: {
//     _id: string;
//     name: string;
//   };
//   __v: number;
// };

// export default function RestaurantBanner() {
//   const [activeItem, setActiveItem] = useState(foodItems[0]);
//   const [searchText, setSearchText] = useState("");
//   const [foods, setFoods] = useState<Food[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // 👉 Step 2: API Call
//         const [foodsRes] = await Promise.all([
//           getFood({
//             search: searchText,
//           }),
//         ]);

//         // 👉 Step 3: State সেট কর

//         setFoods(foodsRes.data || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     // 👉 Step 4: ফাংশন কল কর
//     fetchData();
//   }, [searchText]); //

//   console.log(foods);

  
//   return (
//     <div
//       className="relative min-h-screen overflow-hidden transition-colors duration-500"
//       style={{ backgroundColor: activeItem.bgColor }}
//     >
//       {/* Decorative Background Circles */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         <div className="absolute top-10 sm:top-20 -left-16 sm:-left-32 w-48 h-48 sm:w-96 sm:h-96 bg-white/10 rounded-full"></div>
//         <div className="absolute bottom-0 -right-10 sm:-right-20 w-40 h-40 sm:w-80 sm:h-80 bg-white/10 rounded-full"></div>
//       </div>

//       {/* Header */}
//       <header className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 sm:py-6 gap-4 sm:gap-0">
//         <h1 className="text-white text-lg sm:text-xl font-bold tracking-wider flex-1">
//           RESTAURANT
//         </h1>
//         <div className="relative w-full sm:w-auto flex-1">
//           <input
//             type="text"
//             placeholder="Search..."
//             onChange={(e) => setSearchText(e.target.value)}
//             className="w-full px-4 py-2 sm:py-3 pl-10 sm:pl-12 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white bg-white text-sm sm:text-base"
//           />
//           <svg
//             className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//             />
//           </svg>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="relative z-10 px-4 sm:px-6 py-6 sm:py-8">
//         <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8 lg:gap-12">
//           {/* Left Content */}
//           <div className="flex-1 max-w-2xl order-2 lg:order-1 text-center lg:text-left">
//             <h2 className="text-white text-5xl sm:text-6xl font-bold mb-4 leading-tight">
//               {activeItem.name.toUpperCase()}
//             </h2>
//             <p className="text-white text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-lg mx-auto lg:mx-0">
//               Breakfast, often referred to as the most important meal of the
//               day, provides essential nutrients to kick start our day. It
//               includes a variety of foods, like fruits, cereals, dairy products,
//               and proteins, that contribute to a balanced diet.
//             </p>

//             {/* Thumbnail Row + Indicator */}
//             <div className="relative flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-10">
//               {foodItems.map((item, idx) => (
//                 <div
//                   key={idx}
//                   onClick={() => setActiveItem(item)}
//                   className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden cursor-pointer border-2 transition duration-300 ${
//                     activeItem.name === item.name
//                       ? "border-white scale-110"
//                       : "border-transparent"
//                   }`}
//                 >
//                   <Image
//                     src={item.thumb}
//                     alt={item.name}
//                     width={96}
//                     height={96}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Content - Large Image */}
//           <div className="flex-shrink-0 order-1 lg:order-2">
//             <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl transition duration-500">
//               <Image
//                 src={activeItem.hero}
//                 alt={activeItem.name}
//                 width={500}
//                 height={500}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { getFood } from "@/services/food"

const foodItems = [
  {
    name: "BREAKFAST",
    thumb: "/breakfast-hero.png",
    hero: "/breakfast-hero.png",
    bgColor: "#AD1519",
  },
  {
    name: "Pancakes",
    thumb: "/2.png",
    hero: "/2.png",
    bgColor: "#0A8754",
  },
  {
    name: "French Toast",
    thumb: "/3.png",
    hero: "/3.png",
    bgColor: "#1A1A40",
  },
  {
    name: "Sandwich",
    thumb: "/4.png",
    hero: "/4.png",
    bgColor: "#BF360C",
  },
]

type Food = {
  _id: string
  name: string
  price: number
  image: string
  category: {
    _id: string
    name: string
  }
  __v: number
}

export default function RestaurantBanner() {
  const [activeItem, setActiveItem] = useState(foodItems[0])
  const [searchText, setSearchText] = useState("")
  const [foods, setFoods] = useState<Food[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 👉 Step 2: API Call
        const [foodsRes] = await Promise.all([
          getFood({
            search: searchText,
          }),
        ])

        // 👉 Step 3: State সেট কর
        setFoods(foodsRes.data || [])
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    // 👉 Step 4: ফাংশন কল কর
    fetchData()
  }, [searchText])

  // console.log(foods)

  // Show modal when there are foods and search text is not empty
  const showSearchModal = foods.length > 0 && searchText.trim() !== ""

  return (
    <div
      className="relative max-h-[964px] max-w-[1920px] mx-auto overflow-hidden transition-colors duration-500 "
      style={{ backgroundColor: activeItem.bgColor }}
    >
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 sm:top-20 -left-16 sm:-left-32 w-48 h-48 sm:w-96 sm:h-96 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-0 -right-10 sm:-right-20 w-40 h-40 sm:w-80 sm:h-80 bg-white/10 rounded-full"></div>
      </div>

      {/* Header */}
      <header className="relative z-20 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 sm:py-6 gap-4 sm:gap-0 container mx-auto">
        <h1 className="text-white text-lg sm:text-xl font-bold tracking-wider flex-1">RESTAURANT</h1>
        <div className="relative w-full sm:w-auto flex-1">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full md:max-w-[821px] px-4 py-2 sm:py-3 pl-10 sm:pl-12 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white bg-white text-sm sm:text-base"
          />
          <svg
            className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          {/* Search Results Modal */}
          {showSearchModal && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-[9999]">
              <div className="p-3 sm:p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800">Search Results ({foods.length})</h3>
                  <button
                    onClick={() => setSearchText("")}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {foods.map((food) => (
                    <div
                      key={food._id}
                      className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                        <Image
                          src={food.image || "/placeholder.svg"}
                          alt={food.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-medium text-gray-900 truncate">{food.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-500 truncate">{food.category.name}</p>
                        <p className="text-sm sm:text-base font-semibold text-green-600">${food.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-white text-5xl sm:text-6xl font-bold mb-4 leading-tight">
              {activeItem.name.toUpperCase()}
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-lg mx-auto lg:mx-0">
              Breakfast, often referred to as the most important meal of the day, provides essential nutrients to kick
              start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that
              contribute to a balanced diet.
            </p>

            {/* Thumbnail Row + Indicator */}
            <div className="relative flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-10">
              {foodItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveItem(item)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden cursor-pointer border-2 transition duration-300 ${
                    activeItem.name === item.name ? "border-white scale-110" : "border-transparent"
                  }`}
                >
                  <Image
                    src={item.thumb || "/placeholder.svg"}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Large Image */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl transition duration-500">
              <Image
                src={activeItem.hero || "/placeholder.svg"}
                alt={activeItem.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
