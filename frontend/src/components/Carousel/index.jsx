"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

const Carousel = () => {
  const [careers, setCareers] = useState([]);
  const [currentCareerIndex, setCurrentCareerIndex] = useState(0);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchCareers = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/careers`);
      setCareers(response.data);
    } catch (error) {
      console.error("Error fetching the careers: ", error);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const nextCareer = () => {
    setCurrentCareerIndex((prevIndex) =>
      prevIndex === careers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCareer = () => {
    setCurrentCareerIndex((prevIndex) =>
      prevIndex === 0 ? careers.length - 1 : prevIndex - 1
    );
  };

  const currentCareer = careers[currentCareerIndex];

  return (
    <div className="relative w-full bg-blue-600 text-white my-14">
      {/* Container for content and navigation buttons */}
      <div className="relative w-full flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={prevCareer}
          className="absolute left-0 text-white p-3 rounded-full hover:bg-blue-700"
        >
          <CaretLeft size={96} color="#ffff" />
        </button>

        {/* Image and Content Section */}
        {currentCareer && (
          <div className="grid grid-cols-2 w-full mx-28 items-center relative my-6">
            <div className="relative p-5">
              <img
                src={
                  currentCareer.images_career || "/images/default-image.png"
                } // Use the fetched image URL or a default image
                alt={currentCareer.name}
                className="object-cover relative -mt-20 -mb-20 w-full h-[400px]"
              />
            </div>
            <div className="p-2 space-y-5">
              <h2 className="text-3xl font-bold">{currentCareer.name}</h2>
              <p className="text-lg mb-4">{currentCareer.description}</p>
              <div className="mt-6">
                <a
                  href="careers/joinus"
                  className="bg-yellow-400 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Next Button */}
        <button
          onClick={nextCareer}
          className="absolute right-0 text-white p-3 rounded-full hover:bg-blue-700"
        >
          <CaretRight size={96} color="#ffff" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
