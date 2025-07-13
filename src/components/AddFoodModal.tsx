

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import Modal from "./Modal"
import { toast } from "sonner"
import axios from "axios"
import { getCategories } from "@/services/category"
import { addFood } from "@/services/food"
import {  Upload, DollarSign,} from "lucide-react"

interface Props {
  onFoodAdded?: () => void
}

export default function AddFoodModal({ onFoodAdded }: Props) {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchCategories = async () => {
      const catgegoris = await getCategories()
      //   console.log(catgegoris);
      setCategories(catgegoris.data || []) // Assuming the API returns an object with a 'data' property
    }

    fetchCategories()
  }, [])

  //   console.log(categories);

  const [isAddFood, setIsAddFodd] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    // Handle form submission logic here

    try {
      const formData = new FormData(e.target)
      const name = formData.get("name") as string
      const category = formData.get("category") as string
      const price = formData.get("price") as string
      const image = formData.get("image") as File

      const newFormData = new FormData()
      newFormData.append("file", image) // Add the image file
      newFormData.append("upload_preset", process.env.NEXT_PUBLIC_OUPLOAD_PRESET as string) // Your upload preset
      newFormData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME as string) // Not necessary for the request

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME as string}/image/upload`,
        newFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      )

      const imageUrl = response.data.url

      const foodData = {
        name,
        category,
        price: Number.parseFloat(price),
        image: imageUrl,
      }
      // console.log(foodData);

      const result = await addFood(foodData)
      //   toast.success("Category added successfully!");
      //   console.log(result);
      toast.success(result.message || "Food added successfully!")
      onFoodAdded?.()
      setIsAddFodd(false)
    } catch (error: any) {
      //   console.log(error);
      toast.error(error.message || "Failed to add food")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      {/* Trigger Buttons */}
      <div className="flex flex-wrap gap-4">
         <button
          onClick={() => setIsAddFodd(true)}
          className="px-6 lg:py-2 bg-black text-white rounded-full transition-colors"
        >
          Add Food
        </button>
      </div>

      {/* Form Modal */}
      <Modal isOpen={isAddFood} onClose={() => setIsAddFodd(false)} title="Add Food" size="lg">
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-20 -translate-y-8 translate-x-8"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-orange-100 rounded-full opacity-20 translate-y-4 -translate-x-4"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                Food Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-gray-50 focus:bg-white placeholder-gray-400 disabled:opacity-50"
                  placeholder="Enter delicious food name..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="block text-sm font-semibold text-gray-800 mb-2">
                Category
              </label>
              <div className="relative">
                <select
                  id="category"
                  name="category"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-gray-50 focus:bg-white disabled:opacity-50 appearance-none"
                >
                  <option value="">Select a category</option>
                  {categories.map((category: any) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="image" className="block text-sm font-semibold text-gray-800 mb-2">
                Food Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-gray-50 focus:bg-white disabled:opacity-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-orange-50 file:to-red-50 file:text-orange-700 hover:file:from-orange-100 hover:file:to-red-100"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Upload className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="price" className="block text-sm font-semibold text-gray-800 mb-2">
                Price
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min="0"
                  step="0.01"
                  required
                  disabled={isLoading}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-gray-50 focus:bg-white placeholder-gray-400 disabled:opacity-50"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setIsAddFodd(false)}
                disabled={isLoading}
                className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Adding...</span>
                  </>
                ) : (
                  <span>Add Food</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        title="Confirm Action"
        size="sm"
        closeOnOverlayClick={false}
      >
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Are you sure you want to delete this item?</p>
            <p className="text-gray-500 text-sm mt-1">This action cannot be undone.</p>
          </div>

          <div className="flex justify-center space-x-3">
            <button
              onClick={() => setIsConfirmModalOpen(false)}
              className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Handle delete action here
                setIsConfirmModalOpen(false)
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
