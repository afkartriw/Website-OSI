"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ArrowRight,
  CalendarMinus,
  CaretDown,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Benar

const FactCard = () => {
  const [articles, setArticles] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const [showKeyword, setShowKeyword] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const articlesPerPage = 4;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter(); // Initialize useRouter

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

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/blogs`);
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching the articles: ", error);
    }
  };

  const fetchKeywords = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/keywords`);
      setKeywords(response.data);
    } catch (error) {
      console.error("Error fetching the keywords: ", error);
    }
  };

  useEffect(() => {
    fetchArticles();
    fetchKeywords();
  }, []);

  // Filter articles based on selected keyword and search query
  const filteredArticles = articles.filter((article) => {
    const matchesKeyword = selectedKeyword
      ? article.keyword_blog_id === selectedKeyword.id
      : true;

    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()); // Check if title or description contains the search query

    return matchesKeyword && matchesSearch;
  });

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredArticles.length / articlesPerPage)) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const toggleKeyword = () => {
    setShowKeyword(!showKeyword);
  };

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
    setCurrentPage(1);
    setShowKeyword(false);
    router.push(`/blog/?keywordId=${keyword.id}`); // Pindah ke halaman dengan keywordId
  };

  const handleAllClick = () => {
    setSelectedKeyword(null);
    setCurrentPage(1);
    router.push("/blog"); // Reset URL jika menampilkan semua artikel
  };

  // Update state based on URL keywordId
  useEffect(() => {
    const keywordIdFromUrl = new URLSearchParams(window.location.search).get(
      "keywordId"
    );
    if (keywordIdFromUrl && keywords.length > 0) {
      const selected = keywords.find(
        (keyword) => keyword.id === parseInt(keywordIdFromUrl)
      );
      if (selected) {
        setSelectedKeyword(selected);
      }
    }
  }, [keywords]);

  return (
    <section className="p-6 py-20 px-32 bg-blog">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Our Facts</h1>
          <p className="text-gray-500 mt-2">
            In this blog, we share the latest information, <br></br> tips, and
            insights about this company profile.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            className={`font-medium text-gray-700 ${
              selectedKeyword ? "" : "border-b-2 border-blue-600"
            }`}
            onClick={handleAllClick}
          >
            All
          </button>
          <div className="flex gap-4 items-center relative">
            <button
              className="flex items-center font-medium text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-b-color-accent2 transition duration-200"
              onClick={toggleKeyword}
            >
              Categories
              <CaretDown size={20} className="ml-1" />
            </button>

            {showKeyword && (
              <div className="absolute top-10 left-0 bg-white border border-gray-200 rounded shadow-lg p-4 z-10 w-64">
                {keywords.map((keyword) => (
                  <div
                    className="flex items-center mb-2 cursor-pointer"
                    key={keyword.id}
                    onClick={() => handleKeywordClick(keyword)}
                  >
                    <span className="mr-2 hover:text-color-accent2">
                      {keyword.name_keyword}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery} // Bind input value to searchQuery
              onChange={(event) => setSearchQuery(event.target.value)} // Update state on input change
            />
            <button className="bg-blue-600 h-10 text-white px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-lg">
              <MagnifyingGlass size={20} />
            </button>
          </div>
        </div>
      </div>

      {currentArticles.length > 0 ? (
        currentArticles.map((article, index) => (
          <div className="bg-color-bright p-8 rounded-3xl mb-6" key={index}>
            <div className="flex items-start">
              <div className="relative">
                <Image
                  src={article.images_blog || "/images/default-image.png"}
                  alt="Thumbnail"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="ml-8 flex-1">
                <div className="text-sm flex">
                  <div className="flex items-center">
                    <CalendarMinus size={20} color="#4b5ff7" />
                    <span className="ml-2">{formatDate(article.date)}</span>
                    {keywords.map(
                      (keyword) =>
                        keyword.id === article.keyword_blog_id && (
                          <button
                            key={keyword.id}
                            className="text-color-accent2 px-3 py-1 rounded-full border-2 ml-2 hover:bg-color-accent2 hover:text-color-accent"
                          >
                            {keyword.name_keyword}
                          </button>
                        )
                    )}
                  </div>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mt-3 h-12">
                  {article.title}
                </h2>
                <div
                  className="text-gray-600 text-sm h-20 my-4"
                  dangerouslySetInnerHTML={{
                    __html: truncateText(article.description, 40),
                  }}
                />
                <a
                  href={`/blog/detail/${article.id}`}
                  className="px-4 py-3 bg-blue-600 w-36 text-color-bright font-medium rounded-lg flex items-center justify-between"
                >
                  <a>Read More</a>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No articles found.</p>
      )}

      <div className="flex items-center space-x-2 my-8 justify-center">
        <button
          className={`text-gray-500 hover:text-black ${
            currentPage === 1 ? "cursor-not-allowed" : ""
          }`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from(
          { length: Math.ceil(filteredArticles.length / articlesPerPage) },
          (_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                className={`px-3 py-1 rounded-md ${
                  pageNumber === currentPage
                    ? "bg-blue-600 text-color-bright"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => {
                  setCurrentPage(pageNumber);
                  window.scrollTo(0, 0);
                }}
              >
                {pageNumber}
              </button>
            );
          }
        )}

        <button
          className={`text-gray-500 hover:text-black ${
            currentPage === Math.ceil(filteredArticles.length / articlesPerPage)
              ? "cursor-not-allowed"
              : ""
          }`}
          onClick={nextPage}
          disabled={
            currentPage === Math.ceil(filteredArticles.length / articlesPerPage)
          }
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default FactCard;
