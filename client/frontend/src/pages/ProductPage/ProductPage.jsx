import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductSection from "./ProductSection/ProductSection";

function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="h-full custom-w">
        <div className="flex justify-start items-center gap-3 select-none my-4">
          <Link to="/">
            <p className="cursor-pointer active:opacity-80 active:underline">
              Home
            </p>
          </Link>
          <p className="flex justify-center items-center text-[20px]">{">"}</p>
          <p className="cursor-pointer active:opacity-80 active:underline">
            Refurbished Devices
          </p>
          <p className="flex justify-center items-center text-[20px]">{">"}</p>
          <p className="cursor-pointer active:opacity-80 active:underline">
            Iphone 13 pro Max- Refurbished
          </p>
        </div>
        <ProductSection />
        <hr className="h-px border-0 bg-black w-full" />
        <div className=" flex flex-col gap-3 my-5">
          <p className="text-[16px] font-medium flex gap-3">
            Fonelane Assured <p className="text-[#32cd32]">[whats This]</p>
          </p>
          <div className="flex justify-between items-center ">
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
        <hr className="h-px border-0 bg-black w-full" />
        <div className="my-5">
          <p className="text-[16px] font-medium">
            People Bought Together, Give it a shot.
          </p>
          <div className="flex mx-5 my-2">
            <div className="w-4/6 border-r-[1px] border-black px-7 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="BoughtTogether"
                    id="Bought-to"
                    className="flex justify-start items-start mt-1 mr-1"
                    defaultChecked // Set the checkbox as default checked
                  />
                  <label htmlFor="Bought-to">
                    <img
                      src="./images/iphone 2-1.png"
                      alt=""
                      className="w-[100px] h-[150px] flex-1 mt-2 cursor-pointer"
                    />
                  </label>
                </div>
                <p className="text-[20px]">R81,900</p>
              </div>
              <p className="mx-10 text-[24px]">+</p>
              <div className="flex flex-col justify-center items-center">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="BoughtTogether"
                    id="Bought-to2"
                    className="flex justify-start items-start mt-1 mr-1"
                    defaultChecked // Set the checkbox as default checked
                  />
                  <label htmlFor="Bought-to2">
                    <img
                      src="./images/air.jpg"
                      alt=""
                      className="w-[100px] h-[120px] flex-1 mt-2 cursor-pointer"
                    />
                  </label>
                </div>
                <p className="text-[20px]">R9,999</p>
              </div>
              <p className="text-[150px] font-thin mx-10">|</p>
              <div className="flex flex-col gap-4">
                <p className="flex gap-4 text-[16px] font-normal ">
                  Total Prize: <span>R91,998</span>
                </p>
                <button className="px-5 py-2 bg-slate-400 text-white hover:scale-105 active:border active:border-black active:text-black active:bg-transparent rounded-lg">
                  Add <span className="hidden">all</span> to cart
                </button>
              </div>
            </div>
            <div className="w-full flex-1 flex-col justify-center items-center px-10 py-3 mx-16 border border-gray-400 rounded-md">
              <p className="text-[24px] font-semibold flex flex-nowrap">
                In Package You Get
              </p>
              <ul className="list-disc text-[14px]">
                <li>Device</li>
                <li>Charger + Cable</li>
                <li>Back Cover</li>
                <li>Tempered Glass</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="title my-10">
          <p className="text-[28px] font-bold">You may also like</p>
        </div>
        <ProductCard />
        <div className="title my-10">
          <p className="text-[28px] font-bold">You may also like</p>
        </div>
        <div className="w-full h-[60vh] flex justify-start px-10 items-center bg-slate-300">
          <div className=" w-1/2">
            <p>Storage: <span>6GB RAM </span> | <span>128GB ROM</span></p>
            <p>Display: <span>6.7-inch </span> , <span>Super Retina XDR Display</span></p>
            <p>Resolution: <span>1278 x 2778 </span> Pixels, <span>120Hz</span></p>
            <p>CPU: <span>Apple A15 Bionic</span> Chip</p>
            <p>GPU: <span>Apple Intergrated </span> GPU</p>
            <p>Rear-Camera: <span>12MP</span> + <span>12MP</span> + <span>12MP</span></p>
            <p>Front-Camera: <span>12MP</span></p>
            <p>Wi-Fi: <span>6/6E</span>, <span>5GHz</span>, <span>MiMO</span></p>
            <p>Battery: Li-ion, <span>4352mAh</span></p>
            <p>Dimension: <span>238grams</span>, <span>160.8 x 78.1 x 7.6 </span> mm</p>
            <p>Body: Aluminium Frame, <span>Gorilla Glass Back</span></p>
            <button className="py-2 px-10 my-3 bg-black text-white rounded-lg active:bg-white active:border-black active:border active:text-black">More Detailed Specs</button>

          </div>
          <div className="flex-auto w-1/2 h-auto">
            <img src="./images/spec.png" alt="" />
          </div>
        </div>
        <div className="w-full h-auto my-20">
          <img src="./images/planet.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
