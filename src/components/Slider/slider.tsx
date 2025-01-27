import React, { useRef, useState, useEffect, useCallback } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { sliders } from "../../data/sliders.ts";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

const Slider= () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const updateNavigationState = useCallback(() => {
    if (swiperInstance) {
      const { activeIndex, loop, slides } = swiperInstance;
      setIsPrevDisabled(activeIndex === 0 && !loop);
      setIsNextDisabled(activeIndex === slides.length - 1 && !loop);
    }
  }, [swiperInstance]);

  useEffect(() => {
    updateNavigationState();
  }, [swiperInstance, updateNavigationState]);

  const handleSlideChange = useCallback(
    (swiper: any) => {
      const { activeIndex, loop, slides } = swiper;
      setIsPrevDisabled(activeIndex === 0 && !loop);
      setIsNextDisabled(activeIndex === slides.length - 1 && !loop);
    },
    []
  );

  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={false}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <h3 className="slide-title">{slide.title}</h3>
              <img
                src={slide.img || "https://via.placeholder.com/400x200"}
                alt={slide.title}
                className="slide-image"
              />
              <a href="#" className="see-more">
                See more
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-controls">
        <button
          ref={prevRef}
          className={`custom-prev ${isPrevDisabled ? "disabled" : ""}`}
          disabled={isPrevDisabled}
        >
          ←
        </button>
        <div className="custom-pagination"></div>
        <button
          ref={nextRef}
          className={`custom-next ${isNextDisabled ? "disabled" : ""}`}
          disabled={isNextDisabled}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Slider;
