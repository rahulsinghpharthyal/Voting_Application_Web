import React from "react";
import BookCover from "../components/BookCover";
import image1 from "../assets/Presidents.png";
import image2 from "../assets/leap-of-faith.png";
import image3 from "../assets/an-atlas.png";
import image4 from "../assets/booth-level-officer.png";

const MediaAndPublication = () => {
  const content = [
    {
      image: image1,
      heading: "Election the first Citizen",
      parah: "An Illustrated Chronicle of India's Presidential Elections",
    },
    {
      image: image2,
      heading: "Leap of Faith Second Edition",
      parah: "Journey of Indian Elections",
    },
    {
      image: image3,
      heading: "An Atlas",
      parah: "Genral Election 2024 India",
    },
    {
      image: image4,
      heading: "Booth Level Officer",
      parah: "E-patrika",
    },
  ];
  return (
    <div className="flex flex-wrap gap-4 bg-[#eab2081f]">
      {content.map((value, index) => (
        <BookCover key={index} data={value} />
      ))}
    </div>
  );
};

export default MediaAndPublication;
