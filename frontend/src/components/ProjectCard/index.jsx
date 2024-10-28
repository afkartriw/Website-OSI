"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]); // State untuk menyimpan data project
  const [categories, setCategories] = useState([]); // State untuk menyimpan data kategori
  const [selectedCategory, setSelectedCategory] = useState(0); // State untuk kategori yang dipilih (0 untuk "All Project")
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Fungsi untuk mengambil data project dari API sesuai kategori yang dipilih
  const fetchProjects = async (categoryId) => {
    try {
      let url = `${backendUrl}/api/projects`;
      if (categoryId !== 0) { // Jika id_category bukan 0 (All Project)
        url += `?category_id=${categoryId}`; // Tambahkan parameter category_id ke URL
      }
      const response = await axios.get(url);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching the projects: ", error);
    }
  };

  // Fungsi untuk mengambil data kategori dari API
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/project-categories`);
      // Tambahkan "All Project" sebagai kategori pertama dengan id_category = 0
      setCategories([{ id_category: 0, name_category: "All Project" }, ...response.data]);
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  };

  // Ambil data project ketika kategori berubah
  useEffect(() => {
    fetchProjects(selectedCategory); // Panggil fungsi fetchProjects dengan id_category
  }, [selectedCategory]);

  // Ambil data kategori saat komponen pertama kali dimuat
  useEffect(() => {
    fetchCategories(); // Panggil fungsi fetchCategories
  }, []);

  return (
    <section className="mx-32">
      {/* Filter Buttons */}
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
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-20">
  {projects.map((project) => (
    <div key={project.id_project} className="relative rounded-lg overflow-hidden shadow-lg group">
      {/* Gunakan Next.js Image untuk optimasi gambar */}
      <div className="w-full h-[350px]"> {/* Ubah di sini untuk membuat kontainer persegi */}
        <Image
          src={project.picture || "/images/default-project.png"} // Jika gambar tidak tersedia, gunakan gambar default
          alt={project.name_project}
          width={400}
          height={400} // Tetap ubah ini untuk menjaga aspek rasio
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" // Tetap h-full
          style={{ objectFit: "cover" }}
          priority={true} // Prioritaskan pemuatan gambar ini
        />
      </div>

      {/* Overlay yang muncul saat hover */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link href={`/works/${project.id_project}`} className="text-white text-lg font-semibold px-6 py-3 border-2 border-white rounded-full">
          See Detail Project
        </Link>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default ProjectCard;
