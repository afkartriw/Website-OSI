"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // State for logos pagination
  const [testimonialIndex, setTestimonialIndex] = useState(0); // State for testimonial pagination
  const logosPerPage = 12; // Number of logos to display per page

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const response = await axios.get(`${backendUrl}/api/perusahaans`);
        setClients(response.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  // Calculate total pages for logos
  const totalPages = Math.ceil(clients.length / logosPerPage);

  // Calculate total testimonials (based on the clients array)
  const totalTestimonials = clients.length;

  // Display logos for the current page
  const currentLogos = clients.slice(currentPage * logosPerPage, (currentPage + 1) * logosPerPage);

  // Inisialisasi ulang halaman jika jumlah data berubah
  useEffect(() => {
    setCurrentPage(0); // Reset to the first page if clients data changes
  }, [clients]);

  // Pagination otomatis untuk logo
  useEffect(() => {
    if (totalPages > 0) {
      const interval = setInterval(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      }, 5000); // Ganti halaman setiap 5 detik

      return () => clearInterval(interval);
    }
  }, [totalPages]);

  // Pagination otomatis untuk testimonial
  useEffect(() => {
    if (totalTestimonials > 0) {
      const interval = setInterval(() => {
        setTestimonialIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
      }, 8000); // Ganti testimonial setiap 8 detik

      return () => clearInterval(interval);
    }
  }, [totalTestimonials]);

  // Ambil pathname untuk menentukan judul
  const pathname = usePathname();

  return (
    <>
      <section className="bg-white py-24 px-32" id="Clients">
        <div>
          <h2 className="text-3xl font-bold text-color-dark mb-4">
            Our Experiences
          </h2>
          <h3 className="text-3xl font-bold text-color-primary mb-6">
            The Amazing Clients
          </h3>
          <p className="text-gray-600 mb-12">
            We are enthusiastic about using digital solutions to solve our
            clients' <br />
            problems by developing outstanding projects. Take a look at this
            satisfied customer.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mx-auto my-12 h-80">
            {currentLogos.map((client, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={client.logo}
                  alt={client.nama_perusahaan}
                  className="h-24 mb-4"
                />
                <p className="text-sm">{client.nama_perusahaan}</p>
              </div>
            ))}
          </div>

          {/* Pagination controls for logos */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`block w-8 h-1 mx-1 rounded-full ${currentPage === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Bagian untuk testimonial */}
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-full flex">
            <div className="w-1/2 flex items-start">
              <h2 className="text-4xl font-bold text-color-dark leading-tight">
                What Client’s Says <br />
                <span className="text-color-primary">About Us</span>
              </h2>
            </div>

            <div className="w-1/2">
              <div className="flex items-start space-x-4">
                <div className="flex-grow">
                  {clients.length > 0 && (
                    <>
                      <p className="text-lg text-gray-600 mb-4 italic">
                        {clients[testimonialIndex]?.testimony || "No testimony available"}
                      </p>

                      <div className="flex items-center">
                        <div className="flex items-center">
                          <img
                            src={clients[testimonialIndex]?.logo}
                            alt="Client Avatar"
                            className="w-12 flex-shrink-0"
                          />
                          <div className="ml-4">
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-800 mr-2">
                                {clients[testimonialIndex]?.nama_client}
                              </span>
                              <span className="text-sm text-gray-600">
                                {clients[testimonialIndex]?.nama_perusahaan}
                              </span>
                            </div>
                            <span className="text-sm text-gray-600">{clients[testimonialIndex]?.role}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Navigasi titik di bagian bawah untuk testimonial */}
              <div className="flex justify-start my-6 space-x-2">
                {Array.from({ length: totalTestimonials }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full ${testimonialIndex === i ? "bg-blue-600" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
