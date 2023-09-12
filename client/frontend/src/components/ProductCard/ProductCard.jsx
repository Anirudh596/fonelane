// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import CardContent from "./CardContent/CardContent";

function FirstCard() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#999",
        }}
        slidesPerView={4.3}
        spaceBetween={20}
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
        <div className="bg-white my-20">
          <SwiperSlide>
            <div className="w-[250px] h-[370px]  bg-[#e8e8e8]  rounded-[20px] cursor-pointer hover:drop-shadow-xl">
              <CardContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[250px] h-[370px]  bg-[#cbff97]  rounded-[20px] cursor-pointer hover:drop-shadow-2xl">
              <CardContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[250px] h-[370px]  bg-[#b2ffff] rounded-[20px] cursor-pointer hover:drop-shadow-2xl">
              <CardContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[250px] h-[370px]  bg-[#fdff9e]  rounded-[20px] cursor-pointer hover:drop-shadow-2xl">
              <CardContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[250px] h-[370px]  bg-[#d9d9d9] rounded-[20px] cursor-pointer hover:drop-shadow-2xl">
              <CardContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[250px] h-[370px]  bg-[#ffabb6] rounded-[20px] cursor-pointer hover:drop-shadow-2xl">
              <CardContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[250px] h-[370px]  bg-[#edf7f6] rounded-[20px] cursor-pointer hover:drop-shadow-2xl">
              <CardContent />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[250px] h-[370px]  bg-[#e5eaf5] rounded-[20px] cursor-pointer hover:drop-shadow-2xl">
              <CardContent />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default FirstCard;
