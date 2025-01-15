import React from "react";
import img1 from "../../assets/building-banner-01.jpg";
import img2 from "../../assets/india-map-banner-02.jpg";
import img3 from "../../assets/vote-banner-04.jpg";
import img4 from "../../assets/voterday-banner-03.jpg";
import img5 from "../../assets/voting-day-banner-05.jpg";

const VotingImageComponent = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-5">
      {/* Image 1 */}
      <div className="w-full md:w-[48%] lg:w-[32%] p-2">
        <img
          src={img1}
          alt="Government Building"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Image 2 */}
      <div className="w-full md:w-[48%] lg:w-[32%] p-2">
        <img
          src={img2}
          alt="Historical Election Map"
          className="w-full h-auto rounded-lg shadow-md lg:h-96"
        />
      </div>

      {/* Image 3 */}
      <div className="w-full md:w-[48%] lg:w-[32%] p-2">
        <img
          src={img3}
          alt="People Forming Vote"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Image 4 */}
      <div className="w-full md:w-[48%] lg:w-[32%] p-2">
        <img
          src={img4}
          alt="Sand Sculpture"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Image 5 */}
      <div className="w-full md:w-[48%] lg:w-[32%] p-2 lg:ml-[450px]">
        <img
          src={img5}
          alt="Person Carrying Election Materials"
          className="w-full h-auto rounded-lg shadow-md lg:h-72"
        />
      </div>
    </div>
  );
};

export default VotingImageComponent;
