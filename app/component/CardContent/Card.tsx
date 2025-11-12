import React from "react";
import CardCarousel from "../components/ui/card-carousel";
const Card = () => {
  const images = [
    { src: "/img1.jpg", alt: "Image 1" },
    { src: "/img2.jpg", alt: "Image 2" },
    { src: "/img3.jpg", alt: "Image 3" },
  ];
  return (
    <div>
      <CardCarousel
        images={images}
        autoplayDelay={1000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
};

export default Card;
