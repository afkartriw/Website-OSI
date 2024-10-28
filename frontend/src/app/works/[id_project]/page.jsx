"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import ContactCollaboration from "@/components/ContactCollaboration";
import Navbar from "@/components/Navbar";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
} from "@phosphor-icons/react/dist/ssr";

export default function ProjectDetails() {
  const [projectData, setProjectData] = useState(null);
  const [allProjects, setAllProjects] = useState([]); // Store all projects
  const router = useRouter();
  const { id_project } = useParams();

  // Fetching all projects
  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/projects");
        const data = await response.json();
        setAllProjects(data);
      } catch (error) {
        console.error("Error fetching all projects:", error);
      }
    };

    fetchAllProjects();
  }, []);

  // Fetching current project based on id_project
  useEffect(() => {
    const fetchProjectData = async () => {
      if (id_project) {
        try {
          const response = await fetch(`http://localhost:8000/api/projects/${id_project}`);
          const data = await response.json();
          setProjectData(data);
        } catch (error) {
          console.error("Error fetching project data:", error);
        }
      }
    };

    fetchProjectData();
  }, [id_project]);

  // Get the current project index
  const currentIndex = allProjects.findIndex(
    (project) => project.id_project === parseInt(id_project)
  );

  // Function to navigate to the next project
  const goToNextProject = () => {
    if (currentIndex > 0) {
      const previousProjectId = allProjects[currentIndex - 1].id_project;
      router.push(`/works/${previousProjectId}`);
    }
  };

  // Function to navigate to the previous project
  const goToPreviousProject = () => {
    if (currentIndex < allProjects.length - 1) {
      const nextProjectId = allProjects[currentIndex + 1].id_project;
      router.push(`/works/${nextProjectId}`);
    }
  };

  return (
    <>
      <Navbar />

      {/* Header Section */}
      <header className="bg-blue-900 text-white text-center">
        <div className="relative h-screen">
          <img
            src="/images/bg/bg-project.png"
            alt="Work Image"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-4xl mb-8">Welcome to</h1>
              <h1 className="text-8xl font-bold">
                {projectData?.name_project}
              </h1>
              <p className="mt-4 text-4xl" style={{ letterSpacing: "0.2em" }}>
                {projectData?.sub_title}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Project Details Section */}
      <section className="w-full">
        <div className="grid grid-cols-4">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-semibold text-center">
              Project <span className="italic underline">Details</span>
            </h1>
          </div>

          <div className="bg-color-secondary py-5 flex items-center justify-center">
            <img
              src="/images/project/1.png"
              alt="Project Date"
              className="mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">DATE RELEASE</h3>
              <p>{projectData?.tanggal}</p>
            </div>
          </div>

          <div className="bg-color-secondary py-5 flex items-center justify-center border-x border-color-primary">
            <img
              src="/images/project/2.png"
              alt="Client Name"
              className="mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">CLIENT NAME</h3>
              <p>{projectData?.perusahaan.nama_perusahaan}</p>
            </div>
          </div>

          <div className="bg-color-secondary py-5 flex items-center justify-center">
            <img
              src="/images/project/3.png"
              alt="Project Type"
              className="mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">PROJECT TYPE</h3>
              <p>{projectData?.category.name_category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mx-32 mt-10 bg-white">
        <h3 className="text-xl text-color-primary">Overview</h3>
        <h3 className="text-3xl font-bold mb-4 text-color-primary">
          Project Overview.
        </h3>
        <p className="text-gray-600 text-justify">
          {projectData?.description1}
        </p>
        <div className="flex gap-4 my-12">
          <div className="w-2/3 bg-gray-300 h-96 rounded-2xl">
            <img
              src={projectData?.picture01}
              alt="Project Image 1"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-4 w-1/3">
            <div
              className="bg-gray-300 rounded-2xl"
              style={{ height: "11.5rem" }}
            >
              <img
                src={projectData?.picture02}
                alt="Project Image 2"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div
              className="bg-gray-300 rounded-2xl"
              style={{ height: "11.5rem" }}
            >
              <img
                src={projectData?.picture03}
                alt="Project Image 3"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
        {/* PROBLEM & SOLUTION Section */}
        <h3 className="text-xl text-color-primary">PROBLEM & SOLUTION</h3>
        <h3 className="text-3xl font-bold mb-4 text-color-primary">
          Why Must {projectData?.name_project}?
        </h3>
        <p className="text-gray-600 text-justify">
          {projectData?.description2}
        </p>
        <div className="bg-white">
          <div className="container mx-auto">
            {/* Fitur Ikon */}
            <div className="flex justify-around items-center border-y-2 border-gray-500 py-10 space-x-4 my-16">
              {projectData?.superiorities?.map((superiority, index) => (
                <div key={index} className="text-center">
                  <div className="w-28 h-28 mx-auto rounded-full border border-black flex items-center justify-center">
                    <img
                      src={
                        superiority.logo_superiority ||
                        "/images/default-icon.png"
                      } // Assuming each superiority has an icon
                      alt={superiority.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    {superiority.name}
                  </h3>
                  <p className="text-gray-500">{superiority.description}</p>
                </div>
              ))}
            </div>

            {/* Deskripsi Fitur */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-300 h-96 rounded-lg">
                <img
                  src={projectData?.picture04}
                  alt="Project Image 4"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div>
                <h4 className="text-lg uppercase">App Features</h4>
                <h2 className="text-4xl font-bold mb-4">Keunggulan Fitur</h2>
                <p className="text-gray-600">{projectData?.description3}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Section */}
        <div className="py-10 my-10 border-y-2 border-gray-500 border-dashed">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={goToPreviousProject}
                disabled={currentIndex === allProjects.length - 1}
                className={`flex items-center justify-center ${
                  currentIndex === allProjects.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <ArrowCircleLeft size={96} />
              </button>
              <div className="ml-4">
                <h3 className="text-gray-500 text-lg">Previous</h3>
                <h2 className="text-3xl font-semibold text-color-primary">
                  Project
                </h2>
              </div>
            </div>

            <div className="flex items-center">
              <div className="mr-4 text-right">
                <h3 className="text-gray-500 text-lg">Next</h3>
                <h2 className="text-3xl font-semibold text-color-primary">
                  Project
                </h2>
              </div>
              <button
                onClick={goToNextProject}
                disabled={currentIndex === 0}
                className={`flex items-center justify-center ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ArrowCircleRight size={96} />
              </button>
            </div>
          </div>
        </div>{" "}
      </section>

      <ContactCollaboration />
    </>
  );
}
