// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SlideContent from "./SlideContent/SlideContent";

function Slider() {
  const slideData = [
    { sliderImage: "./images/refu.png" },
    { sliderImage: "./images/season.png" },
    { sliderImage: "./images/bm.png" },
    // Add more slide data as needed
  ];

  return (
    <>
      <div className=" w-full">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <SlideContent sliderImage={slide.sliderImage} /> {/* Pass the image path as a prop */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
