
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GoShieldCheck } from "react-icons/go";
import { LuIndianRupee } from "react-icons/lu";
import { PiBatteryVerticalHighDuotone } from "react-icons/pi";
import { TfiMoney } from "react-icons/tfi";
import { LiaShippingFastSolid } from "react-icons/lia";

function Assured() {
  const AssuredContent = [
    {
      icon: <GoShieldCheck className="text-4xl md:text-3xl lg:text-4xl xl:text-6xl" />,
      text: "12 Month Warranty",
    },
    {
      icon: <LuIndianRupee className="text-4xl md:text-3xl lg:text-4xl xl:text-6xl" />,
      text: "No Cost EMI*",
    },
    {
      icon: (
        <img
          src="./images/cod2.png"
          alt="Cash On Delivery"
          className="w-[35px] h-[35px] md:w-[30px] md:h-[40px] lg:w-[50px] lg:h-[40px] xl:w-[50px] xl:h-[60px]"
        />
      ),
      text: "Cash On Delivery",
    },
    {
      icon: (
        <img
          src="./images/100-percent.png"
          alt="100% Genuine Products"
          className="w-[35px] h-[35px] md:w-[30px] md:h-[40px] lg:w-[50px] lg:h-[40px] xl:w-[50px] xl:h-[60px]"
        />
      ),
      text: "100% Genuine Products",
    },
    {
      icon: <PiBatteryVerticalHighDuotone className="text-4xl md:text-3xl lg:text-4xl xl:text-6xl" />,
      text: "90% Battery Health",
    },
    {
      icon: <TfiMoney className="text-4xl md:text-3xl lg:text-4xl xl:text-6xl" />,
      text: "Lowest Price",
    },
    {
      icon: <LiaShippingFastSolid className="text-4xl md:text-3xl lg:text-4xl xl:text-6xl" />,
      text: "Free Shipping",
    },
  ];

  // Check if the screen width is less than 768px (mobile)
  const isMobile = window.innerWidth < 768;

  return (
    <div className="mx-3 md:mx-5 my-3 md:my-8 w-full">
      {isMobile ? (
        <Swiper
          slidesPerView={3.5}
          spaceBetween={5}
          
        >
          {AssuredContent.map((item, index) => (
            <SwiperSlide key={index} className="w-full ">
              <div className="flex flex-col items-center   space-x-4 md:space-x-8 lg:space-x-10 xl:space-x-16 " >
              {item.icon }
              <p className="text-[12px] md:text-xs lg:text-sm xl:text-sm 2xl:text-base whitespace-nowrap">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex justify-between items-center space-x-4 md:space-x-8 lg:space-x-10 xl:space-x-16">
          {AssuredContent.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {item.icon}
              <p className="text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Assured;
