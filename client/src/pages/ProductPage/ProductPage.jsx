import { Link } from "react-router-dom";
import { useEffect } from "react"; // Import useEffect
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductSection from "./ProductSection/ProductSection";
import { PiShoppingCartLight } from "react-icons/pi";

function ProductPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it only runs once when mounted

  return (
    <>
      <div className="h-full custom-w">
        <div className="flex justify-start items-center gap-1.5 md:gap-3 select-none my-4 text-[12px] md:text-sm">
          <Link to="/">
            <p className="cursor-pointer active:opacity-80 active:underline ">
              Home
            </p>
          </Link>
          <p className="flex justify-center items-center text-[12px] md:text-sm">
            {">"}
          </p>
          <p className="cursor-pointer active:opacity-80 active:underline">
            Refurbished Devices
          </p>
          <p className="flex justify-center items-center text-[12px] md:text-sm">
            {">"}
          </p>
          <p className="cursor-pointer active:opacity-80 active:underline">
            Iphone 13 pro Max- Refurbished
          </p>
        </div>
        <ProductSection />
        <hr className="h-px border-0 bg-black w-full my-5" />
        <div className=" flex flex-col gap-3 my-5">
          <p className="text-[16px] font-medium flex gap-3">
            Fonelane Assured <p className="text-[#32cd32]">[whats This]</p>
          </p>
          <div className="flex justify-center md:justify-between items-center flex-wrap md:flex-nowrap gap-2">
            <img
              src="./images/banner.png"
              alt=""
              className="w-[270px] h-[105px] rounded-lg cursor-pointer active:scale-105"
            />
            <img
              src="./images/banner.png"
              alt=""
              className="w-[270px] h-[105px] rounded-lg cursor-pointer active:scale-105"
            />
            <img
              src="./images/banner.png"
              alt=""
              className="w-[270px] h-[105px] rounded-lg cursor-pointer active:scale-105"
            />
            <img
              src="./images/banner.png"
              alt=""
              className="w-[270px] h-[105px] rounded-lg cursor-pointer active:scale-105"
            />
          </div>
        </div>
        <hr className="h-px border-0 bg-black w-full" /><hr className="h-px border-0 bg-black w-full" />
        <div className="title my-10">
          <p className="text-[28px] font-bold">You may also like</p>
        </div>
        <ProductCard />

        <div className="w-full h-auto my-20">
          <img src="./images/planet.jpg" alt="" />
        </div>
        <div className="block md:hidden  fixed bottom-0 w-full h-24 bg-white z-50">
          <div className="flex justify-between items-center h-full gap-5">
            <div className="flex flex-col justify-center items-center flex-1 h-full">
              <p className="font-semibold text-lg md:text-2xl flex items-center justify-start gap-2">
                ₹89000{" "}
                <p className="text-xs md:text-base font-normal line-through flex gap-2">
                  ₹1,39000{" "}
                </p>
              </p>
              <p className="text-[#32CD32]  text-xs md:text-base">
                Save ₹57,001 (41% Off)
              </p>
            </div>
            <div className="flex-grow flex w-full   text-sm md:text-base my-10 px-5 gap-6">
              <button className="text-4xl border-[1px] border-slate-400 p-1 rounded-lg ">
                <PiShoppingCartLight />
              </button>

              <button className="flex-1 px-2 py-1 border border-black flex justify-center items-center rounded-lg bg-black text-white active:bg-white active:text-black hover:scale-105">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
