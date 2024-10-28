"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const TechStack = () => {
  const [categories, setCategories] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchCategoriesAndTechnologies = async () => {
    try {
      const [categoriesResponse, technologiesResponse] = await Promise.all([
        axios.get(`${backendUrl}/api/technology-categories`),
        axios.get(`${backendUrl}/api/technologies`),
      ]);

      setCategories(categoriesResponse.data);
      setTechnologies(technologiesResponse.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchCategoriesAndTechnologies();
  }, []);

  return (
    <section className="min-h-screen bg-color-accent py-20">
      <div className="px-32">
        <h2 className="text-2xl font-bold text-color-primary mb-4">
          See Our Tech Stack
        </h2>

        {/* Loop through categories */}
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.id}>
              <p className="text-lg text-color-dark mb-8 font-bold my-10">
                {category.name_category}
              </p>
              <div className="grid grid-cols-8 gap-6">
                {/* Filter and display technologies related to each category */}
                {technologies
                  .filter((tech) => tech.technology_category_id === category.id)
                  .map((tech) => (
                    <div
                      key={tech.id}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="flex justify-center w-20 mb-2">
                        <Image
                          src={tech.logo_url || "/images/placeholder.png"} // Display placeholder if logo is missing
                          alt={tech.name_technology}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm text-blue-900">
                        {tech.name_technology}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg text-color-dark">No categories available.</p>
        )}
      </div>
    </section>
  );
};

export default TechStack;
