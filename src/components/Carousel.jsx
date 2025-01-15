import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from "../assets/mainBanner-01.jpg";
import banner2 from "../assets/mainBanner-02.jpg";
import banner3 from "../assets/mainBanner-03.jpg";
import banner4 from "../assets/mainBanner-04.jpg";
import banner5 from "../assets/mainBanner-05.jpg";
import banner6 from "../assets/mainBanner-06.jpg";

const ImageCarousel = () => {
    const items = [banner1, banner2, banner3, banner4, banner5, banner6];

    return (
        <div className="relative max-w-full overflow-hidden mt-0">
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={2000}
                stopOnHover={true}
                showStatus={false}
            >
                {items.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-28 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
                        <img
                            src={item}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
