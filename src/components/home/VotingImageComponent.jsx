import React from "react";
import img1 from "../../assets/building-banner-01.jpg";
import img2 from "../../assets/india-map-banner-02.jpg";
import img3 from "../../assets/vote-banner-04.jpg";
import img4 from "../../assets/voterday-banner-03.jpg";
import img5 from "../../assets/voting-day-banner-05.jpg";

const VotingImageComponent = () => {
  return (
    <div className="flex justify-center mt-5">
      <div className="w-full p-2">
        <img
          src={img1}
          alt="Government Building"
          className="max-w-[680px] h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="h-96">
        <div className="w-full p-2">
          <img
            src={img2}
            alt="Historical Election Map"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="w-full p-2">
          <img
            src={img4}
            alt="Sand Sculpture"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
      </div>
      <div>
      <div className="w-full p-2">
          <img
            src={img3}
            alt="People Forming Vote"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="w-full p-2">
          <img
            src={img5}
            alt="Person Carrying Election Materials"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default VotingImageComponent;
