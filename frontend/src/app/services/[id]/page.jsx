"use client"; // Mark the component as client-side

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactCollaboration from "@/components/ContactCollaboration";
import WeareHiring from "@/components/WeareHiring";
import Link from "next/link"; // Import Link from next

async function getServiceData(id) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const response = await axios.get(`${backendUrl}/api/services/${id}`); // Fix template literal
    return response.data;
  } catch (error) {
    console.error("Error fetching service data:", error);
    return null;
  }
}

async function getAllServices() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const response = await axios.get(`${backendUrl}/api/services`); // Fix template literal
    return response.data;
  } catch (error) {
    console.error("Error fetching all services:", error);
    return [];
  }
}

export default function Services({ params }) {
  const [service, setService] = useState(null);
  const [allServices, setAllServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = params;

  useEffect(() => {
    const fetchServiceData = async () => {
      setLoading(true);
      if (id) {
        const service = await getServiceData(id);
        setService(service);
      }
      const services = await getAllServices();
      setAllServices(services);
      setLoading(false);
    };
    fetchServiceData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-4 border-t-transparent border-color-loading w-24 h-24 absolute"></div>
        <Image
          className="rounded-full"
          src="/images/logo2.png"
          alt="Loading"
          width={80}
          height={80}
        />
      </div>
    );
  }

  if (!service) {
    return <p>Service not found.</p>;
  }

  return (
    <>
      <Navbar />
      <main className="my-28 px-32">
        <div className="flex space-x-8">
          <aside className="w-1/4 bg-color-accent p-6 rounded-xl shadow self-start">
            <ul className="space-y-2">
              {allServices.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.id}`}
                    className="flex items-center py-2 text-color-primary border-b-2 border-dotted border-gray-400"
                  >
                    <img
                      src={srv.icon_service2}
                      alt="Service Logo"
                      className="mr-2"
                    />
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <section className="w-3/4">
            <h2 className="text-5xl font-bold">{service.name}</h2>
            <Image
              src={service.images_service}
              width={750}
              height={300}
              alt={service.name}
              className="my-8 rounded-3xl"
            />
            <div className="my-6">
              <p className="text-gray-700">{service.description}</p>
            </div>
          </section>
        </div>
      </main>
      <WeareHiring />
      <ContactCollaboration />
    </>
  );
}
