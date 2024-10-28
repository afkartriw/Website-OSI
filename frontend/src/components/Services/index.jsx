"use client";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import Link from "next/link";

const Services = () => {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Untuk mengontrol halaman saat ini
  const servicesPerPage = 3; // Menampilkan 3 services per halaman
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // Ambil URL backend dari env

  // Mengambil data Services dari API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/services`);
        setServices(response.data); // Update dengan data yang diterima
        console.log(response.data); // Lihat data yang diterima
      } catch (error) {
        console.error("Error fetching the services: ", error);
      }
    };

    fetchServices();
  }, [backendUrl]);

  // Auto-slide setiap 3 detik
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) =>
        prevPage === Math.floor(services.length / servicesPerPage)
          ? 0
          : prevPage + 1
      );
    }, 3000); // Bergerak setiap 3 detik

    return () => clearInterval(intervalId); // Hapus interval saat komponen tidak dipakai
  }, [services.length]);

  // Fungsi untuk mengontrol garis pagination
  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === Math.floor(services.length / servicesPerPage)
        ? 0
        : prevPage + 1
    );
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0
        ? Math.floor(services.length / servicesPerPage)
        : prevPage - 1
    );
  };

  // Menghitung index untuk memotong data services
  const startIndex = currentPage * servicesPerPage;
  const displayedServices = services.slice(
    startIndex,
    startIndex + servicesPerPage
  );

  // Total halaman pagination
  const totalPages = Math.ceil(services.length / servicesPerPage);

  const handleContactClick = (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Scroll to the contact section directly
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // If the contact element doesn't exist, redirect to home
      window.location.href = "/#contact";
    }
  };

  return (
    <section className="bg-blue-50 py-24 px-32" id="services">
      <div className="max-w-7xl">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 base:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Do the right digitalization, Do the digitalization right to create a
            fair world
          </p>
        </div>

        {/* Menampilkan 3 layanan berdasarkan halaman saat ini */}
        <div className="mt-12 grid gap-6 grid-cols-1 base:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className={`p-8 rounded-2xl text-color-bright ${
                service.id % 2 === 0 ? "bg-services" : "bg-services2"
              }`}
            >
              <img src={service.icon_service} alt={service.name} />
              <div
                className={` ${
                  service.id % 2 !== 0 ? "text-color-primary" : ""
                }`}
              >
                <h3 className="text-3xl my-6 h-16">{service.name}</h3>
                <p className="description text-base h-32">
                  {service.description}
                </p>
              </div>

              <Link
                href={`/services/${service.id}`} // Sesuaikan dengan nama properti yang benar
                className={`mt-16 inline-flex items-center font-medium ${
                  service.id % 2 !== 0 ? "text-color-primary" : "text-white"
                }`}
              >
                See Detail <ArrowUpRight size={20} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Garis Pagination - di tengah */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          {/* Garis pagination */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`cursor-pointer w-16 h-1 ${
                currentPage === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex-1 p-8 mt-6 rounded-2xl bg-services5 text-white h-64">
        <img src="/images/services/start.png" alt="Logo" />
        <div className="py-3">
          <p className="mt-2 text-xl">
            Start your business today and let us help you to solve your problem.
          </p>
        </div>
        <a
          href="#contact"
          onClick={handleContactClick}
          className="mt-4 inline-flex items-center font-medium text-white"
        >
          See Detail <ArrowUpRight size={20} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Services;
