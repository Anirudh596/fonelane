
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GoShieldCheck } from "react-icons/go";

import { PiBatteryVerticalHighDuotone } from "react-icons/pi";

import { LiaShippingFastSolid } from "react-icons/lia";

function Assured() {
  const AssuredContent = [
    {
      icon: <GoShieldCheck className="text-4xl md:text-5xl " />,
      text: "12 Month Warranty",
    },
    
    {
      icon: (
        <img
          src="./images/cod2.png"
          alt="Cash On Delivery"
          className="w-[35px]  md:w-[40px]  "
        />
      ),
      text: "Cash On Delivery",
    },
    {
      icon: (
        <img
          src="./images/100-percent.png"
          alt="100% Genuine Products"
          className="w-[35px]  md:w-[40px]  "
        />
      ),
      text: "Genuine Products",
    },
    {
      icon: <PiBatteryVerticalHighDuotone className="text-4xl md:text-5xl" />,
      text: "90%+ Battery Health",
    },
    
    {
      icon: <LiaShippingFastSolid className="text-4xl md:text-5xl " />,
      text: "Free Shipping",
    },
  ];

  // Check if the screen width is less than 768px (mobile)
  const isMobile = window.innerWidth < 768;

  return (
    <div className="px-2 my-3 md:my-8 w-full">
      {isMobile ? (
        // <Swiper
        //   slidesPerView={3.5}
        //   spaceBetween={5}
          
        // >
        //   {AssuredContent.map((item, index) => (
        //     <SwiperSlide key={index} >
        //       <div key={index} className="flex justify-center items-center border border-gray-300 rounded-xl bg-[#f8fffd]">
        //       {item.icon}
        //       <p className="text-xs md:text-[13px] flex-1">{item.text}</p>
        //     </div>
        //     </SwiperSlide>
        //   ))}
        // </Swiper>
        <div className="flex justify-between items-center w-full gap-2">
          {AssuredContent.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center text-center border border-gray-300 w-full h-[80px] p-2 rounded bg-[#f0ecfc]">
              {item.icon}
              <p className="text-[10px] font-semibold md:text-[13px] flex-1">{item.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-between items-center w-full space-x-4 md:space-x-14">
          {AssuredContent.map((item, index) => (
            <div key={index} className="flex justify-center items-center border-2 font-semibold border-gray-300 w-full gap-2 p-2 rounded-xl bg-[#f0ecfc]">
              {item.icon}
              <p className="text-xs md:text-[13px] flex-1">{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Assured;
