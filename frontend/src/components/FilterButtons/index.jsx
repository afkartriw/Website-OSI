// components/FilterButtons.js
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const FilterButtons = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Mengambil data kategori dari API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/project-categories`);
        // Tambahkan "All Project" sebagai kategori pertama dengan id_category = 0
        setCategories([{ id_category: 0, name_category: "All Project" }, ...response.data]);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };

    fetchCategories();
  }, [backendUrl]);

  return (
    <div className="flex justify-center space-x-4 my-16">
      {categories.map((category) => (
        <button
          key={category.id_category}
          onClick={() => setSelectedCategory(category.id_category)} // Gunakan id_category sebagai filter
          className={`px-6 py-2 rounded-full border ${
            selectedCategory === category.id_category ? "bg-blue-600 text-white" : "border-gray-400 text-gray-600"
          } hover:bg-blue-600 hover:text-white transition-all`}
        >
          {category.name_category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
