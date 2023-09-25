import { GoShieldCheck } from "react-icons/go";
import { LuIndianRupee } from "react-icons/lu";
import { PiBatteryVerticalHighDuotone } from "react-icons/pi";
import { TfiMoney } from "react-icons/tfi";
import { LiaShippingFastSolid } from "react-icons/lia";

function Assured() {
  return (
    <div className="overflow-scroll  my-5">
      <div className="flex justify-between items-center">
        <div className=" flex flex-col justify-center items-center">
          <GoShieldCheck className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl" />
          <p className="text-[8px] md:text-xs lg:text-xs xl:text-base">
            12 Month Warranty
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <LuIndianRupee className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl" />
          <p className="text-[8px] md:text-xs lg:text-xs xl:text-base">
            No Cost EMI*
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="./images/cod2.png"
            alt="" // Add alt text based on the text prop
            className=" w-[20px] h-[30px] md:w-[30px] md:h-[40px] lg:w-[50px] lg:h-[40px] xl:w-[50px] xl:h-[60px] "
          />
          <p className="text-[8px] md:text-xs lg:text-xs xl:text-base">
            Cash On Delivery
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <img
            src="./images/100-percent.png"
            alt="" // Add alt text based on the text prop
            className=" w-[20px] h-[30px] md:w-[30px] md:h-[40px] lg:w-[50px] lg:h-[40px] xl:w-[50px] xl:h-[60px] "
          />
          <p className="text-[8px] md:text-xs lg:text-xs xl:text-base">
            100% Genuine Products
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <PiBatteryVerticalHighDuotone className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl" />
          <p className="text-[8px] md:text-xs lg:text-xs xl:text-base">
            90% Battery Health
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center ">
          <TfiMoney className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl" />
          <p className="text-[8px] md:text-xs lg:text-xs xl:text-base">
            Lowest Price
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <LiaShippingFastSolid className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl" />
          <p className="text-[8px] md:text-xs lg:text-xs xl:text-base">
            Free Shipping
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Assured;
