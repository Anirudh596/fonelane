import ProductImage from "./ProductImageSection/ProductImage";
import Review from "../../../components/Review/Review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { BsPatchCheckFill } from "react-icons/bs";
import Specs from "../../../components/Specs";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductSection() {
  const [isSpecOpen, setIsSpecOpen] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState("excellent");
  const [selectedSpec, setSelectedSpec] = useState("store2");
  const [selectedColor, setSelectedColor] = useState("color1");
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://fonelane-cms.onrender.com/api/deal-of-the-day-2s/${id}?populate=*`,
          {
            headers: {
              Authorization:
                "Bearer 2db02d82e1ae075c920ecc147cf978b1b53c09964e651485cca3084579203f4ed9ed98fb25545898e05b1b3b59deec607f910db3ec242a02bd4ed43ffd6fb5361c3c3b1d5385ca72ea12ab33634728354e9f8d9df08ce60b9e14993483ecaddf6e8e018201a95be71cb740be3546489fa075944959a9870e3c1dba157b1bfa83",
            },
          }
        );
        setData(res.data.data.attributes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const mainPrice = data.price;
  const mrp = data.MRP;
  

 

  const dynamicPricing = () => {
    const percentMap = {
      fair: 10,
      good: 15,
      excellent: 20,
    };
    const percent = percentMap[selectedQuality] || 0;
    let dynamicPrice = Math.floor(mainPrice + (data.price * percent) / 100)
    return dynamicPrice;
  };

  const saved = () => {
    let saving = (((mrp - dynamicPricing())* 100 )/ mrp);
   
    let intSaving = Math.floor(saving)
    return intSaving;
   }

   const savedPrice = mrp - dynamicPricing();

  const openSpecs = () => setIsSpecOpen(true);
  const closeSpecs = () => setIsSpecOpen(false);

  const handleQualityButtonClick = (quality) => {
    setSelectedQuality(quality);
  };

  const handleSpecButtonClick = (storage) => {
    setSelectedSpec(storage);
  };

  const handleColorButtonClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div className="flex custom-w h-fit md:h-screen flex-col md:flex-row">
        <div className="md:flex-1">
          <ProductImage />
        </div>

        <div className="md:flex-1 w-full h-fit md:h-[90vh] md:px-8  overflow-x-hidden overflow-y-scroll scrollbar-hide">
          <div className="main-sec flex flex-col gap-4 justify-start">
            <div className="title-icon flex gap-16 justify-start items-center">
              <div className="titles left-0 w-full">
                <div className="title">
                  <p className="text-2xl md:text-[21px] font-semibold">
                    {data.title}
                  </p>
                </div>

                <div className="spec-config flex flex-col md:grid md:grid-cols-3 auto-cols-auto md:text-center md:items-center  md:gap-2 w-full flex-nowrap text-xs md:text-xs my-2 md:">
                  <p className=" md:border-r-[1px] border-black pr-2 py-1 ">
                    Condition:{" "}
                    <span>
                      {selectedQuality === "fair" && "Fair"}
                      {selectedQuality === "good" && "Good"}
                      {selectedQuality === "excellent" && "Excellent"}
                    </span>
                  </p>
                  <p className="col-auto md:border-r-[1px] flex flex-nowrap border-black pr-6 py-1">
                    Storage:{" "}
                    <span>
                      {selectedSpec === "store1" && "6GB/128GB"}
                      {selectedSpec === "store2" && "6GB/256GB"}
                      {selectedSpec === "store3" && "6GB/512GB"}
                      {selectedSpec === "store4" && "6GB/1TB"}
                    </span>
                  </p>
                  <p>
                    Color:{" "}
                    <span>
                      {selectedColor === "color1" && "Sierra Blue"}
                      {selectedColor === "color2" && "Red"}
                      {selectedColor === "color3" && "Green"}
                      {selectedColor === "color4" && "Purple"}
                    </span>
                  </p>
                </div>

                <div className="review cursor-pointer flex flex-nowrap items-center">
                  <Review />
                  <p className="mx-1  md:text-[25px] font-extralight">|</p>
                  <p>300 reviews</p>
                </div>
              </div>

              <div className="icons flex flex-col gap-5">
                <CiHeart className="text-2xl md:text-3xl cursor-pointer group" />
                <AiOutlineShareAlt className="text-2xl md:text-3xl  cursor-pointer group" />
              </div>
            </div>

            <div className="prices hidden md:flex justify-start gap-4">
              <p className="font-semibold text-xl md:text-2xl flex items-center justify-start gap-2">
                ₹{dynamicPricing()}{" "}
                <p className="text-sm md:text-base font-semibold line-through flex gap-2">
                  ₹{mrp}{" "}
                </p>
                  <span className="text-[#32CD32] text-sm md:text-base ">Save ₹{savedPrice} ({saved()}% Off)</span>
              </p>
            </div>

            <hr className="w-full" />

            <div className="w-full text-xs md:text-xs gap-1 md:flex justify-between items-center">
              <div>
                <div className="flex gap-2 text-center items-center ">
                  <FontAwesomeIcon
                    icon={faTag}
                    className="text-[#ff5659]"
                    flip="horizontal"
                  />
                  <p>Bank Offer10% Instant Discount on HDFC Credit Card</p>
                </div>
                <div className="flex gap-2 text-center items-center">
                  <FontAwesomeIcon
                    icon={faTag}
                    className="text-[#ff5659]"
                    flip="horizontal"
                  />
                  <p>Bank Offer10% Instant Discount on HDFC Credit Card</p>
                </div>
              </div>
              <a href="" className="ml-2 underline text-blue-600">
                View all offers
              </a>
            </div>

            <hr className="w-full" />

            <div className="constion block">
              <p>Condition :</p>
              <div className="flex gap-3 flex-nowrap ">
                <button
                  onClick={() => handleQualityButtonClick("fair")}
                  className={`${
                    selectedQuality === "fair" ? "selected" : ""
                  } w-48 h-12  rounded-lg   md:hover:scale-105 flex flex-col justify-center items-center border border-slate-500 font-light`}
                >
                  <p className="text-base">Fair</p>
                </button>
                <button
                  onClick={() => handleQualityButtonClick("good")}
                  className={`${
                    selectedQuality === "good" ? "selected" : ""
                  } w-48 h-12  rounded-lg  md:hover:scale-105 flex flex-col justify-center items-center border border-slate-500 font-light`}
                >
                  <p className="text-base">Good</p>
                </button>
                <button
                  onClick={() => handleQualityButtonClick("excellent")}
                  className={`${
                    selectedQuality === "excellent" ? "selected" : ""
                  } w-48 h-12  rounded-lg  md:hover:scale-105 flex flex-col justify-center items-center border border-slate-500 font-light`}
                >
                  <p className="text-base">Excellent</p>
                </button>
              </div>
            </div>

            <div className="w-full bg-slate-200 block p-2 rounded-lg">
              <p className="text-xs md:text-base flex justify-start items-center  gap-2">
                <BsPatchCheckFill className="text-[#32CD32]" />
                {selectedQuality === "fair" && "Fair"}
                {selectedQuality === "good" && "Good"}
                {selectedQuality === "excellent" && "Excellent"}
              </p>
              <p className="text-xs md:text-base flex justify-start items-center gap-2">
                <BsPatchCheckFill className="text-[#32CD32]" />
                {selectedQuality === "fair" && "Lorems ksjdhf skljdh"}
                {selectedQuality === "good" && "sadfjkh asdiofhu asdjfh "}
                {selectedQuality === "excellent" && "sdkjfh asdfjhg sadfjkh g"}
              </p>
            </div>

            <div className="storage block">
              <div>
                <p>Storages :</p>
              </div>
              <div className="storage grid grid-cols-4 gap-3 ">
                <button
                  onClick={() => handleSpecButtonClick("store1")}
                  className={`${
                    selectedSpec === "store1" ? "selected" : ""
                  } py-2   rounded-lg  md:hover:scale-105 border border-slate-500 font-light`}
                >
                  <p className="text-xs">6GB/128GB</p>
                </button>
                <button
                  onClick={() => handleSpecButtonClick("store2")}
                  className={`${
                    selectedSpec === "store2" ? "selected" : ""
                  } py-2   rounded-lg  md:hover:scale-105  border border-slate-500 font-light`}
                >
                  <p className="text-xs">6GB/256GB</p>
                </button>
                <button
                  onClick={() => handleSpecButtonClick("store3")}
                  className={`${
                    selectedSpec === "store3" ? "selected" : ""
                  } py-2   rounded-lg  md:hover:scale-105  border border-slate-500 font-light`}
                >
                  <p className="text-xs">6GB/512GB</p>
                </button>
                <button
                  onClick={() => handleSpecButtonClick("store4")}
                  className={`${
                    selectedSpec === "store4" ? "selected" : ""
                  } py-2   rounded-lg  md:hover:scale-105  border border-slate-500 font-light`}
                >
                  <p className="text-xs">6GB/1TB</p>
                </button>
              </div>
            </div>

            <div className="colors block">
              <div className="">
                <p>Colors :</p>
              </div>
              <div className="flex items-center gap-4">
                <div className=" justify-center items-center w-12 h-12 border-0 border-black flex focus:border">
                  <button
                    onClick={() => handleColorButtonClick("color1")}
                    className={`${
                      selectedColor === "color1" ? "selected" : ""
                    } w-10 h-10 flex bg-[#BFDAF7] rounded-lg justify-center items-center border border-slate-400`}
                  ></button>
                </div>
                <button
                  onClick={() => handleColorButtonClick("color2")}
                  className={`${
                    selectedColor === "color2" ? "selected" : ""
                  } w-10 h-10 flex bg-[#BFDAF7] rounded-lg justify-center items-center border border-slate-400`}
                ></button>
                <button
                  onClick={() => handleColorButtonClick("color3")}
                  className={`${
                    selectedColor === "color3" ? "selected" : ""
                  } w-10 h-10 flex bg-[#BFDAF7] rounded-lg justify-center items-center border border-slate-400`}
                ></button>
                <button
                  onClick={() => handleColorButtonClick("color4")}
                  className={`${
                    selectedColor === "color4" ? "selected" : ""
                  } w-10 h-10 flex bg-[#BFDAF7] rounded-lg justify-center items-center border border-slate-400`}
                ></button>
              </div>
            </div>

            <div>
              <p>In Box</p>
              <div className="text-xs border-[1px] border-gray-300 rounded-lg ">
                <ul className="list-disc px-5 py-2">
                  <li>Device</li>
                  <li>Back Cover</li>
                  <li>Charging Cable</li>
                  <li>Charger</li>
                  <li>Tempered Glass</li>
                </ul>
              </div>
            </div>

            <hr className="h-px border-0 bg-black w-full" />
            <a
              onClick={openSpecs}
              className="w-full h-4 px-2 py-2 flex justify-between items-center cursor-pointer"
            >
              <p>Technical Specification</p>
              <p>{">"}</p>
            </a>
            <hr className="h-px border-0 bg-black w-full" />

            <div className="pincode flex flex-col gap-3 ">
              <p>Pincode :</p>
              <div className="flex">
                <input
                  type="text"
                  id="pin-check"
                  name="PinCheck"
                  placeholder="Enter Pincode for expected Delivery Date"
                  className="w-64 rounded-lg border border-black py-3 px-3 text-[12px] focus:text-[16px] "
                />
                <input
                  type="submit"
                  value="Check"
                  id="pin-check-btn"
                  name="PinCheckBtn"
                  className="px-3 py-3  w-[120px] bg-black text-white rounded-lg ml-[-20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSpecOpen && <Specs isOpen={isSpecOpen} onClose={closeSpecs} />}
    </>
  );
}

export default ProductSection;
