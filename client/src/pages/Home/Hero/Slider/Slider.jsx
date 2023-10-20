// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination} from "swiper/modules";
import SlideContent from "./SlideContent/SlideContent";

function Slider() {
  const slideData = [
    { sliderImage: "https://res.cloudinary.com/dgl6gst2b/image/upload/v1697775709/bane3_ktahh1.png" },
    { sliderImage: "https://res.cloudinary.com/dgl6gst2b/image/upload/v1697775708/bane2_jnb3th.png" },
    { sliderImage: "https://res.cloudinary.com/dgl6gst2b/image/upload/v1697775708/bane1_u8jaeo.png" },
    // Add more slide data as needed
  ];

  return (
    <>
      <div className="w-full md:w-full slider-w mx-auto">
        <Swiper
          style={{
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
          modules={[Autoplay, Pagination]}
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
