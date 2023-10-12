import { Link } from "react-router-dom";
import { useEffect } from "react"; // Import useEffect
import ProductCard from "../../components/ProductCard/ProductCard";
import { PiShoppingCartLight } from "react-icons/pi";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function CoverPage() {


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
        <CoverSection />
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
        <hr className="h-px border-0 bg-black w-full" />
        <hr className="h-px border-0 bg-black w-full" />
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

export default CoverPage;

import { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Review from "../../components/Review/Review";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Pagination } from "swiper/modules";

function CoverSection() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };


  const [selectedColor, setSelectedColor] = useState("color1");
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://fonelane-cms.onrender.com/api/covers/${id}?populate=*`,
          {
            headers: {
              Authorization:
                "Bearer 2db02d82e1ae075c920ecc147cf978b1b53c09964e651485cca3084579203f4ed9ed98fb25545898e05b1b3b59deec607f910db3ec242a02bd4ed43ffd6fb5361c3c3b1d5385ca72ea12ab33634728354e9f8d9df08ce60b9e14993483ecaddf6e8e018201a95be71cb740be3546489fa075944959a9870e3c1dba157b1bfa83",
            },
          }
        );
        setData(res.data.data.attributes);
        console.log(res.data.data.attributes.baseprice);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const handleColorButtonClick = (color) => {
    setSelectedColor(color);
  };

  // const ApiUrl = import.meta.env.RENDER_BACKEND_URL;
  const [selectedImage, setSelectedImage] = useState(null);
  const [productImages, setProductImages] = useState([]); // Store product images

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://fonelane-cms.onrender.com/api/covers/${id}?populate=*`,
          {
            headers: {
              Authorization:
                "bearer " +
                "2db02d82e1ae075c920ecc147cf978b1b53c09964e651485cca3084579203f4ed9ed98fb25545898e05b1b3b59deec607f910db3ec242a02bd4ed43ffd6fb5361c3c3b1d5385ca72ea12ab33634728354e9f8d9df08ce60b9e14993483ecaddf6e8e018201a95be71cb740be3546489fa075944959a9870e3c1dba157b1bfa83",
            },
          }
        );

        // Extract and set product images from the response data
        const imageData = res.data.data.attributes.otherimages.data;
        setProductImages(imageData.map((image) => image.attributes.url));
        console.log(res.data.data.attributes.otherimages.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    // Set the initial selected image to the first image when the page loads
    if (productImages.length > 0) {
      setSelectedImage(productImages[0]);
    }
  }, [productImages]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };


  return (
    <>
      <div className="flex custom-w h-fit  flex-col md:flex-row">
        <div className="md:flex-1">
          <div className="flex">
            <div className="hidden md:grid grid-rows-4 w-[80px] h-fit gap-4">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(image)}
                  className={` overflow-hidden cursor-pointer bg-gray-200 w-[50px] h-[50px] rounded-[10px] flex justify-center items-center ${
                    selectedImage === image ? "bg-sky-200" : ""
                  }`}
                >
                  <img
                    src={`${image}`}
                    alt={`Product Image ${index}`}
                    className=" h-[30px]"
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 hidden md:flex">
              {selectedImage && (
                <div className="w-full flex justify-center items-center">
                  <img
                    src={`${selectedImage}`}
                    alt="Selected Product Image"
                    className=" h-[310px]"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="buttons hidden md:flex gap-3 text-sm md:text-base my-10">
            <button className="flex-1 px-5 border border-black flex justify-center items-center rounded-lg py-2 active:bg-black active:text-white hover:scale-105">
              Buy Now
            </button>

            <button className="py-2 flex-1 px-5 border border-black flex justify-center items-center rounded-lg bg-black text-white active:bg-white active:text-black hover:scale-105">
              Add to Cart
            </button>
          </div>
          <div className="flex relative md:hidden w-full justify-center items-center">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {productImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full flex justify-center items-center">
                    <img
                      src={`${image}`}
                      alt={`Product Image ${index}`}
                      className=" h-72"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="md:flex-1 w-full h-fit md:h-[70vh] md:px-8 overflow-x-hidden overflow-y-scroll scrollbar-hide">
          <div className="main-sec flex flex-col gap-4 justify-start">
            <div className="title-icon flex gap-16 justify-start items-center">
              <div className="titles left-0 w-full">
                <div className="title">
                  <p className="text-2xl md:text-[21px] font-semibold">
                    {data.title}
                  </p>
                </div>

                <div className="spec-config flex flex-col md:grid md:grid-cols-1 auto-cols-auto  w-full text-xs md:text-sm font-medium my-2 md:">
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
                ₹{data.price}{" "}
                <p className="text-sm md:text-base font-semibold line-through flex gap-2">
                  ₹{data.MRP}{" "}
                </p>
                <span className="text-[#32CD32] text-sm md:text-base ">
                  Save ₹{data.MRP - data.price} ({Math.floor(((data.MRP - data.price) * 100) / data.MRP)}% Off)
                </span>
              </p>
            </div>
            <div className="w-full text-xs md:text-xs gap-1 md:flex justify-between items-center">
              <Accordion open={open === 1} animate={CUSTOM_ANIMATION} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  Features
                </AccordionHeader>
                <AccordionBody>
                  <ul className="flex flex-col">
                    <li>{data.specifications}</li>
                  </ul>
                </AccordionBody>
              </Accordion>
            </div>
            <div className="colors block">
              <div className="">
                <p>Colors :</p>
              </div>
              <div className="flex items-center gap-4">
                {["color1", "color2", "color3", "color4"].map((color) => (
                  <div
                    key={color}
                    className={`justify-center items-center w-12 h-12 border-0 border-black flex focus:border`}
                  >
                    <button
                      onClick={() => handleColorButtonClick(color)}
                      className={`${
                        selectedColor === color ? "selected" : ""
                      } w-10 h-10 flex bg-[#BFDAF7] rounded-lg justify-center items-center border border-slate-400`}
                    ></button>
                  </div>
                ))}
              </div>
            </div>

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
      {/* {isSpecOpen && <Specs isOpen={isSpecOpen} onClose={closeSpecs} />} */}
    </>
  );
}

// export default ProductSection;
