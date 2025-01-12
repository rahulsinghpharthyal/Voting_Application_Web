import React, { useState } from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";
import banner1 from "../assets/mainBanner-01.jpg";
import banner2 from "../assets/mainBanner-02.jpg";
import banner3 from "../assets/mainBanner-03.jpg";
import banner4 from "../assets/mainBanner-04.jpg";
import banner5 from "../assets/mainBanner-05.jpg";
import banner6 from "../assets/mainBanner-06.jpg";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        banner1, banner2,
        banner3, banner4,
        banner5, banner6,
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    return (
        <div className="relative w-full min-h-96 overflow-hidden">
            <div className="flex transition-transform duration-500 h-96" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((item, index) => (
                        <img key={index}  src={item}className="bg-white text-center rounded"/>
                    
                ))}
            </div>
            <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-xl text-white rounded"><GrPrevious/></button>
            <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-xl text-white rounded"><GrNext/></button>
        </div>
    );
};

export default Carousel;
