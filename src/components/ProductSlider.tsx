'use client'
import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";


interface CenterModeProps {
    slides: string[];
  }
  


function CenterMode({ slides }: CenterModeProps) {
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            {/* <img src={slide} alt={`Slide ${index}`} /> */}
            <Image
						src={slide}
						width={300}
						height={400}
						alt="product"
						className="w-full h-[500px] rounded-md object-center object-contain"
					/> 
          </div>
        ))}

      </Slider>
  );
}

export default CenterMode;
