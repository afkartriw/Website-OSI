import React from 'react';

const VideoSection = () => {
  return (
    <section className="flex justify-center items-center py-16 bg-video mt-10 px-32">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        
        {/* Video Section */}
        <div className="md:w-1/2 bg-gray-500 p-0 flex justify-center items-center">
          <video
            src="/videos/UNS.mp4"
            controls
            className="w-full h-full rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Text Section */}
        <div className="md:w-1/2 bg-color-primary p-10 text-white space-y-5">
          <h2 className="text-3xl font-bold">Mulai Kariermu Bersama Kami</h2>
          <p className="text-gray-200">
            Di Omden Solution Indonesia, kami siap untuk mengembangkan potensi dan membantu Anda mencapai tujuan karier yang lebih tinggi. Mulai pengalaman kariermu bersama kami!
          </p>
          
          <ul className="space-y-4">
            <li className="bg-white text-color-primary px-4 py-2 rounded-full inline-flex items-center space-x-2">
              <span className="bg-gray-300 w-3 h-3 rounded-full"></span>
              <span>Mobile app easy management & access</span>
            </li>
            <li className="bg-white text-color-primary px-4 py-2 rounded-full inline-flex items-center space-x-2">
              <span className="bg-gray-300 w-3 h-3 rounded-full"></span>
              <span>Mobile app easy management & access</span>
            </li>
            <li className="bg-white text-color-primary px-4 py-2 rounded-full inline-flex items-center space-x-2">
              <span className="bg-gray-300 w-3 h-3 rounded-full"></span>
              <span>Mobile app easy management & access</span>
            </li>
          </ul>
          
          <a href="#" className="text-gray-200 underline inline-flex items-center space-x-2 mt-4">
            <span>More about us</span>
            <span>&#10132;</span> {/* Arrow icon */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
