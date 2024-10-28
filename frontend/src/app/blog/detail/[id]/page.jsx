"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactCollaboration from "@/components/ContactCollaboration";
import Navbar from "@/components/Navbar";
import { CalendarMinus } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link"; // Import Link
import LoadingSpinner from "@/components/LoadingSpinner"; // Adjust the path as needed


// Fetch blog data based on ID
async function getBlogData(id) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const response = await axios.get(`${backendUrl}/api/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

// Fetch all recent blogs
async function getAllBlogs() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const response = await axios.get(`${backendUrl}/api/blogs`);
    // Sort blogs by ID in descending order (newest first)
    return response.data.sort((a, b) => b.id - a.id);
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    return [];
  }
}

// Fetch keywords
const fetchKeywords = async (setKeywords) => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // Move this variable here
  try {
    const response = await axios.get(`${backendUrl}/api/keywords`);
    setKeywords(response.data); // Assuming response.data is an array of keywords
  } catch (error) {
    console.error("Error fetching the keywords: ", error);
  }
};



export default function BlogDetail({ params }) {
  const { id } = params;
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [keywords, setKeywords] = useState([]); // State for keywords
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const loadData = async () => {
      setLoading(true); // Set loading to true
      const blogData = await getBlogData(id);
      setBlog(blogData);
      const allBlogs = await getAllBlogs();
      setRecentBlogs(allBlogs);
      await fetchKeywords(setKeywords); // Fetch keywords on component mount
      setLoading(false); // Set loading to false after fetch completes
    };

    loadData();
  }, [id]);

  if (loading) return <LoadingSpinner />; // Show loading spinner while fetching data

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  // Filter out the current blog from recent blogs
  const filteredRecentBlogs = recentBlogs.filter(
    (recentBlog) => recentBlog.id !== parseInt(id)
  );

  // Get the two most recent blogs after filtering
  const latestBlogs = filteredRecentBlogs.slice(0, 2);

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
    <>
      <Navbar />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-24 py-8">
          {/* Main Blog Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Blog Content */}
            <div className="md:col-span-2">
              <div className="bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={blog.images_blog}
                  alt={blog.title}
                  className="w-full h-128 object-cover rounded-2xl"
                />
                <div className="px-10 py-8">
                  <div className="text-sm flex">
                    <CalendarMinus size={20} color="#4b5ff7" />
                    <p className="text-color-primary ml-2">
                      {formatDate(blog.date)}
                    </p>
                    {keywords.map(
                      (keyword) =>
                        keyword.id === blog.keyword_blog_id && (
                          <p
                            key={keyword.id}
                            className="ml-4 font-bold text-color-accent2"
                          >
                            {keyword.name_keyword}
                          </p>
                        )
                    )}
                  </div>
                  <h1 className="text-2xl font-bold mb-4 text-color-dark">
                    {blog.title}
                  </h1>
                  <div
                    className="text-gray-700 mb-6 border-y-2 border-gray-600 border-dashed py-4 space-y-3"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* Recent Blogs */}
              <div className="bg-color-bright px-4 mb-6">
                <h3 className="text-2xl font-bold mb-4">Recent Blogs</h3>
                <div className="flex flex-col space-y-4">
                  {latestBlogs.map((recentBlog) => (
                    <a
                      key={recentBlog.id}
                      href={`/blog/detail/${recentBlog.id}`}
                    >
                      <div className="bg-white overflow-hidden border-b-2">
                        <img
                          className="w-full h-40 object-cover rounded-lg"
                          src={recentBlog.images_blog}
                          alt={recentBlog.title}
                        />
                        <div className="py-6">
                          <div className="text-sm flex">
                            <CalendarMinus size={15} color="#4b5ff7" />
                            <h3 className="text-xs font-semibold text-gray-400 ml-2">
                              {formatDate(recentBlog.date)}
                            </h3>
                          </div>
                          <p className="text-base mt-2 leading-none text-color-dark">
                            {recentBlog.title}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Keywords */}
              <div className="bg-white p-4 mb-6">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2 my-6">
                  {keywords.map((keyword) => (
                    <Link
                      key={keyword.id}
                      href={`/blog/?keywordId=${keyword.id}`}
                      passHref
                    >
                      <button className="text-color-accent2 px-5 py-2 rounded-full border border-gray-400 hover:text-white hover:bg-color-accent2">
                        {keyword.name_keyword}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Any Questions Section */}
              <div className="bg-color-primary text-white p-6 rounded-3xl justify-center items-center text-center">
                <h3 className="text-2xl mb-4">
                  Any Questions? <br /> Let's talk
                </h3>
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="text-color-bright px-4 py-1 rounded-full border border-color-bright"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactCollaboration />
    </>
  );
}

// Enable dynamic rendering by specifying the segment to be dynamic
export const dynamic = "force-dynamic";
