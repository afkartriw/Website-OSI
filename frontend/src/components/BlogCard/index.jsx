"use client";
import React from "react";
import useSWR from "swr";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import LoadingSpinner from "@/components/LoadingSpinner"; // Adjust the path as needed


const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

const truncateText = (text, maxWords) => {
  const words = text.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text;
};

const BlogCard = ({ title, date, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <Image
        className="w-full h-40 object-cover"
        src={imageUrl}
        alt={title}
        width={400}
        height={160}
      />
      <div className="py-6">
        <h3 className="text-sm font-semibold">{date}</h3>
        <div
          className="text-2xl mt-2 font-semibold mb-4 overflow-hidden max-h-25 hover:text-color-primary"
          dangerouslySetInnerHTML={{
            __html: truncateText(title, 20),
          }}
        />
      </div>
    </div>
  );
};

const BlogList = () => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { data: blogs, error, isLoading } = useSWR(`${backendUrl}/api/blogs`, fetcher);

  if (isLoading) return <LoadingSpinner />;

  if (error) return <p>Error fetching blogs.</p>;
  if (!blogs) return <p>Blogs not found.</p>;

  // Sort blogs by date or ID to get the latest ones
  const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestBlogs = sortedBlogs.slice(0, 6); // Get the latest 6 blogs

  return (
    <section className="py-20 px-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-color-dark mt-8">Our Blog</h1>
        <h1 className="text-3xl font-bold text-color-primary my-4">
          Sharing Insight
        </h1>
        <p className="text-gray-500">
          We are enthusiastic about using digital solutions to solve our
          client’s problems by developing outstanding projects. Take a look at
          this satisfied customer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {latestBlogs.length > 0 ? (
            latestBlogs.map((blog, index) => (
              <a key={index} href={`/blog/detail/${blog.id}`}>
                <BlogCard
                  title={blog.title}
                  date={formatDate(blog.date)}
                  imageUrl={blog.images_blog || "/images/default-image.png"}
                />
              </a>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
        <a className="mt-10 flex justify-center" href="/blog">
          <div className="text-color-primary flex items-center font-bold text-xl hover:text-blue-700">
            <span className="mr-2">Explore More</span>
            <ArrowUpRight
              size={28}
              color="currentColor"
              className="transition-colors duration-200"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default BlogList;
