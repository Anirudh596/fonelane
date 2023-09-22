// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import AccessoriesContent from "./AccessoriesContent/AccessoriesContent";

function Accessories() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#999",
        }}
        slidesPerView={4.2}
        spaceBetween={9}
        autoplay={{
          duration: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <div className="bg-white my-9">
          <SwiperSlide>
            <div className="w-[260px] h-[350px] bg-white  rounded-[9px] cursor-pointer hover:drop-shadow-xl">
              <AccessoriesContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[260px] h-[350px]   bg-white rounded-[9px] cursor-pointer hover:drop-shadow-2xl">
              <AccessoriesContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[260px] h-[350px] bg-white  rounded-[9px] cursor-pointer hover:drop-shadow-2xl">
              <AccessoriesContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[260px] h-[350px]  bg-white  rounded-[9px] cursor-pointer hover:drop-shadow-2xl">
              <AccessoriesContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[260px] h-[350px] bg-white rounded-[9px] cursor-pointer hover:drop-shadow-2xl">
              <AccessoriesContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[260px] h-[350px] bg-white rounded-[9px] cursor-pointer hover:drop-shadow-2xl">
              <AccessoriesContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[260px] h-[350px] bg-white  rounded-[9px] cursor-pointer hover:drop-shadow-2xl">
              <AccessoriesContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[260px] h-[350px]  bg-white rounded-[9px] cursor-pointer hover:drop-shadow-2xl">
              <AccessoriesContent />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default Accessories;
