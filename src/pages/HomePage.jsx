import React from 'react'
import TimeLine from '../components/TimeLine'
import ImageCarousel from '../components/Carousel'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-white w-full">
      {/* Carousel Section */}
      <div className="w-full lg:mt-0">
        <ImageCarousel />
      </div>

      {/* TimeLine Section */}
      <div className="w-full sm:px-3">
        <TimeLine />
      </div>
    </div>
  );
};


export default HomePage
