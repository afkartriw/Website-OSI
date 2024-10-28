// LoadingSpinner.js
import React from "react";
import Image from "next/image";

const LoadingSpinner = () => (
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

export default LoadingSpinner;
