"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ContactCollaboration from "@/components/ContactCollaboration";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    age: "",
    career_id: "",
    CV: null,
    Portofolio: null,
    description: "",
  });

  const [careers, setCareers] = useState([]); // State to store careers
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000"; // Laravel backend URL

  // Fetch careers on component mount
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/careers`);
        setCareers(response.data);
      } catch (error) {
        console.error("Error fetching careers:", error);
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Failed to load career options. Please try again later.",
        });
      }
    };

    fetchCareers();
  }, []);

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change for CV and Portfolio
  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    // Validate file size (must be <= 2MB)
    if (file.size > 2 * 1024 * 1024) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "File size should not exceed 2MB!",
      });
      return;
    }

    // Validate file type (must be PDF)
    if (file.type !== "application/pdf") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Only PDF files are allowed!",
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: file,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show success message and go back to the previous page
Swal.fire({
  icon: "success",
  title: "Success",
  text: "Application submitted successfully!",
}).then(() => {
  // Go back to the previous page after success
  window.history.back();
});

    // Prepare FormData to send to the backend
    const formDataToSend = new FormData();
    formDataToSend.append("full_name", formData.full_name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("age", formData.age);
    formDataToSend.append("career_id", formData.career_id);

    formDataToSend.append("CV", formData.CV);
    if (formData.Portofolio) {
      formDataToSend.append("Portofolio", formData.Portofolio);
    }
    formDataToSend.append("description", formData.description);

    try {
      // Make POST request to submit form data
      await axios.post(`${backendUrl}/api/vacancies`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data", // Set header for file upload
        },
      });

      // Show success message and refresh the page
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Application submitted successfully!",
      }).then(() => {
        // Refresh the page after success
        window.location.reload();
      });

    } catch (error) {
      console.error("Error submitting the application:", error);

      let errorMessage = "There was an error submitting your application. Please try again.";
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }

      // Show error message if submission fails
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: errorMessage,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto bg-gray-100 p-8 shadow-lg mt-28 mb-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-color-primary">JOIN US</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleInputChange}
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 bg-gray-100"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 bg-gray-100"
            />
          </div>

          <div>
            <input
              type="text"
              name="phone"
              placeholder="No. Whatsapp"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 bg-gray-100"
            />
          </div>

          <div>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 bg-gray-100"
            />
          </div>

          {/* Dropdown for Careers */}
          <div>
            <select
              name="career_id"
              value={formData.career_id}
              onChange={handleInputChange}
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 bg-gray-100"
            >
              <option value="">Choose One</option>
              {careers.map((career) => (
                <option key={career.id} value={career.id}>
                  {career.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <label className="block font-medium text-gray-700">Upload CV Here</label>
              <input
                type="file"
                name="CV"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                accept=".pdf"
              />
              <p className="text-xs text-gray-500 mt-1">*format .pdf</p>
            </div>

            <div className="text-center">
              <label className="block font-medium text-gray-700">Upload Portfolio Here</label>
              <input
                type="file"
                name="Portofolio"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                accept=".pdf"
              />
              <p className="text-xs text-gray-500 mt-1">*format .pdf</p>
            </div>
          </div>

          <div>
            <textarea
              name="description"
              placeholder="Why should we consider you?"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 bg-gray-100"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="bg-color-primary text-white py-2 px-6 rounded-md w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ContactCollaboration />
    </>
  );
}
