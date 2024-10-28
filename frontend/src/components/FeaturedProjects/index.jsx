"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // Ambil URL backend dari env

  // Mengambil data project dari API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/projects`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data); // Set state projects dengan data dari API
      } catch (error) {
        console.error("Error fetching the projects: ", error);
      }
    };

    fetchProjects();
  }, [backendUrl]);

  return (
    <section className="bg-featured text-white pt-16 px-32 md:px-28 lg:px-32">
      {/* Header */}
      <div className="mb-14 text-left">
        <h2 className="text-4xl font-bold mb-4">Our Featured Projects</h2>
        <p className="text-lg max-w-3xl ">
          We are committed to providing global solutions to resolve our clients’
          problems.
        </p>
        <p>Take a look at these satisfied customers.</p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-16 rounded-lg">
        {projects.slice(0, 4).map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row items-stretch">
            {/* Project Image Section */}
            <div
              className={`flex w-full md:w-1/2 ${
                index % 2 === 1
                  ? "md:order-1 justify-start"
                  : "md:order-2 justify-end"
              }`}
            >
              <Image
                src={project.picture} // Use default image if not available
                alt={project.name_project}
                width={520} // Image width
                height={800} // Image height
                className="rounded-lg"
              />
            </div>

            {/* Project Text Section */}
            <div
              className={`flex flex-col justify-between w-full md:w-1/2 ${
                index % 2 === 1
                  ? "md:order-2 justify-end ml-16"
                  : "md:order-1 justify-start"
              }`}
            >
              <div>
                <h3 className="text-white text-4xl font-bold mb-4">
                  {project.name_project}
                </h3>
                <div className="flex flex-col items-start text-lg my-8">
                  <span className="font-semibold">
                    {project.perusahaan.nama_perusahaan}
                    <span className="mx-2">—</span>
                    {project.category.name_category}
                  </span>

                  <span className="mt-1 font-semibold">
                    {new Date(project.tanggal).getFullYear()}
                  </span>
                </div>

                <p className="mb-10 leading-relaxed text-lg pr-10">
                  {project.description1}
                </p>
              </div>

              {/* See Detail Project Button */}
              <div className="mt-auto">
                <a
                  href={`/works/${project.id_project}`}
                  className="inline-flex items-center bg-white text-color-primary font-semibold px-6 py-3 rounded-full transition duration-300 hover:bg-color-accent whitespace-nowrap"
                >
                  See Detail Project{" "}
                  <ArrowRight size={20} color="#164875" className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore All Projects Button */}
      <div className="text-2xl text-center py-16 justify-center">
        <a href="/works">Explore All Projects</a>
      </div>
    </section>
  );
};

export default FeaturedProjects;
