import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Assured() {
  const AssuredContent = [
    {
      // icon: <img src="./images/1.png" alt="" className="w-12 h-12"/>,
      text: "Student Special",
    },
    {
      // icon: <img src="./images/2.png" alt="" className="w-14 h-12"/>,
      text: "Deals",
    },
    {
      // icon: <img src="./images/3.png" alt="" className="w-12 h-12"/>,
      text: "iPhones",
    },
    {
      // icon: <img src="./images/4.png" alt="" className="w-20 h-12"/>,
      text: "Accessories",
    },
  ];

  // Check if the screen width is less than 768px (mobile)
  // const isMobile = window.innerWidth < 768 ;

  return (
    <div className=" md:mx-5 my-3 md:my-3 w-full flex justify-between gap-2 px-2">
      {AssuredContent.map((item, index) => (
        <div key={index} className="bg-[#eeeeee] w-full flex justify-center items-center text-center p-1 border border-gray-400">
          <div className="flex ">
            {item.icon}
            <p className=" w-full text-[10px] md:text-xs  font-semibold">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Assured;
