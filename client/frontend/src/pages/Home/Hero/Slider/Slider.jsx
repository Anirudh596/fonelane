// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Slider() {
  return (
    <>
      <div className="drop-shadow-3xl w-full">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
          <SwiperSlide>
            <img src="./images/banner.png" alt=""  className="bg-cover bg-center"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/banner.png" alt=""  className="bg-cover bg-center"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/banner.png" alt=""  className="bg-cover bg-center"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/banner.png" alt=""  className="bg-cover bg-center"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/banner.png" alt=""  className="bg-cover bg-center"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/banner.png" alt=""  className="bg-cover bg-center"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/banner.png" alt=""  className="bg-cover bg-center"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/banner.png" alt=""  className="bg-cover bg-center"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
