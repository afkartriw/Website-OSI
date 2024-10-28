"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const ProfilOsi = () => {
  // State untuk menyimpan deskripsi dari API
  const [description2, setDescription2] = useState("");

  // Fetch data dari API Laravel ketika komponen di-mount
  useEffect(() => {
    // Ambil URL dari environment variable
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Fungsi untuk mengambil data settings dari API Laravel
    const fetchSettings = async () => {
      try {
        // Mengambil data dari endpoint GET /api/settings
        const response = await axios.get(`${backendUrl}/api/settings`);

        // Jika data ditemukan, set state description2
        if (response.data.length > 0) {
          const settings = response.data[0]; // Ambil setting pertama dari array
          setDescription2(settings.description2); // Set description2 dari API
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };

    // Panggil fungsi fetchSettings untuk mengambil data
    fetchSettings();
  }, []); // Empty dependency array berarti useEffect ini hanya dijalankan sekali saat komponen di-mount

  return (
    <section className="bg-custom px-32 pt-20 pb-10">
      <header>
        <h1 className="text-3xl font-bold text-color-primary">
          PT. OEMAH SOLUTION INDONESIA
        </h1>
        <p className="text-gray-500 mt-2">
          {description2} {/* Tampilkan description2 dari state */}
        </p>
      </header>

      <section className="my-10">
        <h2 className="text-4xl font-bold text-color-dark">Our Vision</h2>
        <p className="text-4xl font-bold text-color-dark mt-2 mb-4">
          OSI to be{" "}
          <span className="text-color-primary text-4xl">
            Future Information Technology Solution.
          </span>
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-color-dark">Our Mission</h2>
        <div className="flex flex-col md:flex-row justify-center mt-8 space-y-4 md:space-y-0 md:space-x-8 mb-10">
          <div className="bg-color-bright p-8 rounded-lg h-52 bg-01">
            <p className="text-color-primary mt-20">
              Improving the Efficiency of Information Technology.
            </p>
          </div>
          <div className="bg-color-bright p-8 rounded-lg h-52 bg-02">
            <p className="text-color-primary mt-20">
              Always Innovating in the Field of Information Technology.
            </p>
          </div>
          <div className="bg-color-bright p-8 rounded-lg  h-52 bg-03">
            <p className="text-color-primary mt-20">
              Providing Creative Solutions of Information Technology.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProfilOsi;
