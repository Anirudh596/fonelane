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
        <div className="title my-10">
          <p className="text-[28px] font-bold">You may also like</p>
        </div>
        <ProductCard />
        <div className="title my-10">
          <p className="text-[28px] font-bold">You may also like</p>
        </div>
        <div className="w-full h-[50vh] flex justify-start px-10 items-center bg-slate-300">
          <div className=" w-1/2 text-">
            <p>
              Storage: <span>6GB RAM </span> | <span>128GB ROM</span>
            </p>
            <p>
              Display: <span>6.7-inch </span> ,{" "}
              <span>Super Retina XDR Display</span>
            </p>
            <p>
              Resolution: <span>1278 x 2778 </span> Pixels, <span>120Hz</span>
            </p>
            <p>
              CPU: <span>Apple A15 Bionic</span> Chip
            </p>
            <p>
              GPU: <span>Apple Intergrated </span> GPU
            </p>
            <p>
              Rear-Camera: <span>12MP</span> + <span>12MP</span> +{" "}
              <span>12MP</span>
            </p>
            <p>
              Front-Camera: <span>12MP</span>
            </p>
            <p>
              Wi-Fi: <span>6/6E</span>, <span>5GHz</span>, <span>MiMO</span>
            </p>
            <p>
              Battery: Li-ion, <span>4352mAh</span>
            </p>
            <p>
              Dimension: <span>238grams</span>, <span>160.8 x 78.1 x 7.6 </span>{" "}
              mm
            </p>
            <p>
              Body: Aluminium Frame, <span>Gorilla Glass Back</span>
            </p>
            <button className="py-2 px-10 my-3 bg-black text-white rounded-lg active:bg-white active:border-black active:border active:text-black">
              More Detailed Specs
            </button>
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
