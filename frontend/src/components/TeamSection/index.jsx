"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]); // State for team members
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const membersPerPage = 4; // Number of members to display per page
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Function to fetch team members from API
  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/team-members`);
      setTeamMembers(response.data);
    } catch (error) {
      console.error("Error fetching the team members: ", error);
    }
  };

  // Fetch team members when the component mounts
  useEffect(() => {
    fetchTeamMembers();
  }, []);

  // Calculate current members based on the current page
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = teamMembers.slice(indexOfFirstMember, indexOfLastMember);

  // Calculate total pages
  const totalPages = Math.ceil(teamMembers.length / membersPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="mx-32 pt-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-color-dark mb-8">
          Meet Our <br />
          <span className="text-color-primary">
            Experiences & Amazing Teams
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {currentMembers.map((member) => (
            <div key={member.id} className="text-center h-96 w-64">
              <div className="h-80 bg-gray-300 rounded-md mb-4 relative overflow-hidden">
                {/* Use Next.js Image for image optimization */}
                <Image
                  src={member.photo || "/images/default-team-member.png"}
                  alt={member.name}
                  width={256}
                  height={320}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center my-16">
        {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`block w-6 h-1 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-blue-600' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
