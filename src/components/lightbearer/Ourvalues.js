import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../joyforce/ImageScroll.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

// import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ImageScroll() {
  const images = [
    "/joy/joy1.jpeg",
    "/joy/joy2.jpeg",
    "/joy/joy3.jpg",
    "/joy/joy4.jpg",
    "/joy/joy5.jpg",
    "/joy/joy6.jpg",
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const toggleOpen = (state) => () => setOpen(state);

  const handleImageClick = (index) => {
    setIndex(index);
    toggleOpen(true)();
  };

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const intervalId = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 5000); // Slide every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        loop={true} // Enable loop mode
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt="slide_image"
              onClick={() => handleImageClick(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/*<Lightbox
        open={open}
        onClose={toggleOpen(false)}
        index={index}
        slides={images}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />*/}
    </div>
  );
}

export default ImageScroll;
