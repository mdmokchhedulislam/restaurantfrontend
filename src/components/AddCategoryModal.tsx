
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Modal from "./Modal";
import { toast } from "sonner";
import { createCategory } from "@/services/category";

interface Props {
  onCategoryAdded?: () => void;
}

export default function AddCategoryModal({ onCategoryAdded }: Props) {
  const [isAddCategory, setIsAddCategory] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Handle form submission logic here

    const name = e.target.name.value;
    // console.log(name);
    const categoryData = {
      name,
    };
    // console.log(categoryData);
    try {
      const result = await createCategory(categoryData);
      //   toast.success("Category added successfully!");
      //   console.log(result);
      toast.success(result.message || "Category added successfully!");
      onCategoryAdded?.();

      setIsAddCategory(false);
    } catch (error: any) {
      //   console.log(error);
      toast.error(error.message || "Failed to add category");
    }
  };

  return (
    <div>
      {/* Trigger Buttons */}
      <button
        onClick={() => setIsAddCategory(true)}
        className="px-6 lg:py-2 bg-black text-white rounded-full transition-colors"
      >
        Add Category
      </button>

      {/* Form Modal */}
      <Modal
        isOpen={isAddCategory}
        onClose={() => setIsAddCategory(false)}
        title="Add Category"
        size="lg"
      >
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 -translate-y-8 translate-x-8"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-20 translate-y-4 -translate-x-4"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Category Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-gray-50 focus:bg-white disabled:opacity-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-orange-50 file:to-red-50 file:text-orange-700 hover:file:from-orange-100 hover:file:to-red-100"
                  placeholder="Enter a creative category name..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setIsAddCategory(false)}
                className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center gap-2"
              >
                Create
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
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">
              Are you sure you want to delete this item?
            </p>
            <p className="text-gray-500 text-sm mt-1">
              This action cannot be undone.
            </p>
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
                setIsConfirmModalOpen(false);
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
