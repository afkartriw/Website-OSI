"use client"; // This directive makes the component a Client Component

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import BlogCard from "@/components/BlogCard";
import Clients from "@/components/Clients";
import ContactCollaboration from "@/components/ContactCollaboration";
import Facts from "@/components/Facts";
import FeaturedProjects from "@/components/FeaturedProjects";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

const Page = () => {
  const [description1, setDescription1] = useState(""); // State untuk menyimpan description1
  const [backgroundUrl, setBackgroundUrl] = useState('/images/bg.png'); // Default background image

  useEffect(() => {
    // Ambil URL dari environment variable
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Mengambil data settings dari API Laravel
    const fetchSettings = async () => {
      try {
        // Mengambil data dari endpoint GET /api/settings
        const response = await axios.get(`${backendUrl}/api/settings`);
        // Jika data ditemukan, set state description1 dan backgroundUrl
        if (response.data.length > 0) {
          const settings = response.data[0]; // Ambil setting pertama
          setDescription1(settings.description1); // Set description1 dari API
          setBackgroundUrl(settings.background); // Set backgroundUrl dari API (jika diperlukan)
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex items-center justify-center relative">
        <div className="px-32 py-24 grid grid-cols-1 lg:grid-cols-2">
          {/* Bagian Kiri: Text Section */}
          <div className="flex flex-col justify-center max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-color-primary leading-tight">
              Your business is actually{" "}
              <span className="text-color-secondary">amazing.</span> But your{" "}
              <span className="text-color-secondary">website & mobile app</span>{" "}
              are not.{" "}
              <span className="text-color-secondary">Let us help you.</span>
            </h1>
            {/* Ganti teks deskripsi dengan state description1 */}
            <p className="mt-6 text-lg text-gray-700">
              {description1} {/* Menampilkan description1 dari API */}
            </p>
            <div className="mt-8 relative group">
              <a
                href="#Clients"
                className="inline-block bg-blue-900 text-white pl-8 pr-2 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out group-hover:px-8"
              >
                Start Collaborate
                <span className="inline-block opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 transform group-hover:translate-x-2 ml-2">
                  ➔
                </span>
              </a>
            </div>
          </div>

          {/* Bagian Kanan: Image Section */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/images/Illustration.png" // Ganti dengan path gambar yang benar
              alt="Business dashboard"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Gambar WhatsApp */}
        <div className="fixed bottom-5 left-5 z-50">
          <a
            href="https://wa.me/123456789" // Ganti dengan nomor WhatsApp Anda
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/wa.png" // Ganti dengan path gambar WhatsApp Anda
              alt="WhatsApp"
              width={110}
              height={110}
            />
          </a>
        </div>

        {/* Gambar Kanan Bawah */}
        <div className="absolute bottom-0 right-0">
          <Image
            src="/images/icon-right.png" // Ganti dengan path gambar yang benar
            alt="Icon Kanan Bawah"
            width={270}
            height={270}
          />
        </div>
      </div>

      <FeaturedProjects />
      <Facts />
      <Clients />
      <Services id="services" />
      <BlogCard />
      <ContactCollaboration />
    </>
  );
};

export default Page;
