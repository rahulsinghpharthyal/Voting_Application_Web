import React from "react";

const LoadingPage = () => {
  return (
    <>
      <div class="relative w-full min-h-96 overflow-hidden bg-gray-200 animate-pulse"></div>
      <div class="flex justify-center items-center py-10 px-10 animate-pulse">
        <div class="flex items-center space-x-8 relative">
          <div class="h-1 w-10 bg-gray-200 flex items-center"></div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200"></div>
            <span class="mt-2 text-center bg-gray-200 w-16"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
