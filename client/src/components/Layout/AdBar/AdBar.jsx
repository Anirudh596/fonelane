
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Assured() {
  const AssuredContent = [
    {
        icon: <img src="./images/ad1.png" alt="" className="w-14  flex items-center  justify-center"/>,
        text: "Best Deal"
    },
    {
        icon: <img src="./images/ad4.png" alt="" className="w-14 "/>,
        text: "students Offer"
    },
    {
        icon: <img src="./images/ip.png" alt="" className="w-14  flex items-center  justify-center"/>,
        text: "iPhones"
    },
    {
        icon: <img src="./images/cover.png" alt="" className="w-[55px]"/>,
        text: "Good covers"
    },

  ];

  // Check if the screen width is less than 768px (mobile)
  const isMobile = window.innerWidth < 768 ;

  return (
    <div className="mx-3 md:mx-5 my-3 md:my-3 w-full ">
      {isMobile ? (
        <Swiper
          slidesPerView={3.5}
          spaceBetween={0}
          
        >
          {AssuredContent.map((item, index) => (
            <SwiperSlide key={index} className="w-full flex justify-center items-center">
              <div className=" w-full flex flex-col justify-center item-center" >
              {item.icon }
              <p className=" w-full text-[12px] md:text-xs lg:text-sm xl:text-sm 2xl:text-base ">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : ""}
    </div>
  );
}

export default Assured;
