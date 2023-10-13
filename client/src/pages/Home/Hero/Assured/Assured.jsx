
import { GoShieldCheck } from "react-icons/go";

import { PiBatteryVerticalHighDuotone } from "react-icons/pi";

import { LiaShippingFastSolid } from "react-icons/lia";
import { HiMiniReceiptPercent } from "react-icons/hi2";

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
      icon: <HiMiniReceiptPercent className="text-4xl md:text-5xl"/>,
      text: "No Cost EMI",
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
        <div className="flex justify-between items-center w-full gap-2">
          {AssuredContent.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center  border border-gray-300 w-full mx-auto h-[80px] px-2 rounded bg-[#f0ecfc]">
              {item.icon}
              <p className="text-[10px] text-center font-medium md:text-[13px]">{item.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-between items-center w-full space-x-4 md:space-x-14">
          {AssuredContent.map((item, index) => (
            <div key={index} className="flex justify-center items-center border-2 font-semibold border-gray-300 w-full h-[65px] gap-2 p-2 rounded-xl bg-[#f0ecfc]">
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
