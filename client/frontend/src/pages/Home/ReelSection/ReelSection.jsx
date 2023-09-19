// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function ReelSection() {
  return (
    <>
      <Swiper 
        style={{
          "--swiper-navigation-color": "#999",
        }}
        slidesPerView={4}
        spaceBetween={5}
        autoplay={{
          duration: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Navigation]}
        className="mySwiper mt-10 mb-20"
      >
        <div className="bg-white my-20">
          <SwiperSlide>
            <div className="w-[300px] h-[450px]  bg-[#e8e8e8]  rounded-[5px] cursor-pointer hover:drop-shadow-xl">
              Hello World
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] h-[450px]  bg-[#cbff97]  rounded-[5px] cursor-pointer hover:drop-shadow-2xl">
              Hello World
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] h-[450px]  bg-[#b2ffff] rounded-[5px] cursor-pointer hover:drop-shadow-2xl">
              Hello World
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] h-[450px]  bg-[#fdff9e]  rounded-[5px] cursor-pointer hover:drop-shadow-2xl">
              Hello World
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] h-[450px]  bg-[#d9d9d9] rounded-[5px] cursor-pointer hover:drop-shadow-2xl">
              Hello World
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] h-[450px]  bg-[#ffabb6] rounded-[5px] cursor-pointer hover:drop-shadow-2xl">
              Hello World
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] h-[450px]  bg-[#edf7f6] rounded-[5px] cursor-pointer hover:drop-shadow-2xl">
              Hello World
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] h-[450px]  bg-[#e5eaf5] rounded-[5px] cursor-pointer hover:drop-shadow-2xl">
              Hello World
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default ReelSection;
