import { Link } from "react-router-dom";
import  { useEffect } from "react"; // Import useEffect from React
import ProductCard from "../../components/ProductCard/ProductCard";
import { PiShoppingCartLight } from "react-icons/pi";
import Scroll from "../../components/scroll/Scroll";
function ProductPage() {
  const assuredImages = [
    { img: "../../../public/images/fo1.png" },
    { img: "../../../public/images/fo2.png" },
    { img: "../../../public/images/fo3.png" },
    { img: "../../../public/images/fo4.png" },
  ];

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it only runs once when mounted



  return (
    <>
      <Scroll />
      <div className="h-full custom-w">
        <div className="flex justify-start items-center gap-1.5 md:gap-3 select-none my-4 text-[12px] md:text-sm">
          <Link to="/">
            <p className="cursor-pointer active:opacity-80 active:underline">
              Home
            </p>
          </Link>
          <p className="flex justify-center items-center text-[12px] md:text-sm">
            {">"}
          </p>
          <p className="cursor-pointer active:opacity-80 active:underline">
            Iphone 13 pro Max- Refurbished
          </p>
        </div>
        <ProductSection />
        <hr className="h-px border-0 bg-black w-full my-3" />
        <div className="flex flex-col gap-3 my-5 px-5">
          <p className="text-[16px] font-medium flex gap-3">
            Fonelane Assured 
          </p>
          <div className="flex justify-center md:justify-between items-center flex-wrap md:flex-nowrap gap-2">
            {assuredImages.map((item, index) => {
              return (
                <div key={index} className="">
                  <img src={`${item.img}`} alt={`Image ${index}`}  width={400} height={100} className="rounded-md"/>
                </div>
              );
            })}
          </div>
        </div>
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
            <div>
            <p className="exclusive text-xs">Excluive Price!</p>

            
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

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { BsPatchCheckFill } from "react-icons/bs";
import Specs from "../Specs";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Pagination } from "swiper/modules";
import { Rating, Typography } from "@material-tailwind/react";
import CopyButton from "../../components/LinkShare/LinkShare";


function ProductSection() {
  const [isSpecOpen, setIsSpecOpen] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState("excellent");
  const [selectedSpec, setSelectedSpec] = useState("store2");
  const [selectedColor, setSelectedColor] = useState("color1");
  const [data, setData] = useState({});
  const [data1, setData1] = useState({});
  const { id } = useParams();
  const [rated, setRated] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://52.66.77.248:1337/api/deal-of-the-day-2s/${id}?populate=*`, {
          headers: {
            Authorization: "bearer " + "422d2e9d1a9f0707a1622e0552b49661b6e630c8d02f25c724721eedc0376e8947e98312a4adf3bf21bbc7bee43f269d1471ca84c9f927b05ed421fba03c5217ec35ecd8121e836f96e0f01fe4582de30c62aad923007ae34066f6a443dd2e554cc819db2869212bc54a139c4b28fe55de325cdf9049dd7dbf253b053c56cd14",
          },
        });
        setData(res.data.data.attributes);
        // console.log(res.data.data.attributes.baseprice);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const selectedStorageId = () => {
    switch (selectedSpec) {
      case "store1":
        return 9;
      case "store2":
        return 8;
      case "store3":
        return 10;
      default:
        return 0;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const axiosInstance = axios.create({
          baseURL: "http://52.66.77.248:1337/api/deal-of-the-day-2s",
          headers: {
            Authorization:
              "bearer " +
              "422d2e9d1a9f0707a1622e0552b49661b6e630c8d02f25c724721eedc0376e8947e98312a4adf3bf21bbc7bee43f269d1471ca84c9f927b05ed421fba03c5217ec35ecd8121e836f96e0f01fe4582de30c62aad923007ae34066f6a443dd2e554cc819db2869212bc54a139c4b28fe55de325cdf9049dd7dbf253b053c56cd14",
          },
        });

        const [response1, response2, response3] = await Promise.all([
          axiosInstance.get(`/1?populate=*`),
          axiosInstance.get(`/1?populate=*`),
          axiosInstance.get(`/1?populate=*`),
        ]);

        setData1({
          fairPrice:
            response1.data.data.attributes.storage[selectedStorageId()]
              .fairprice,
          goodPrice:
            response2.data.data.attributes.storage[selectedStorageId()]
              .goodprice,
          excellentPrice:
            response3.data.data.attributes.storage[selectedStorageId()]
              .excellentprice,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedSpec]);

  const fairPrice = data1.fairPrice;
  const goodPrice = data1.goodPrice;
  const excellentPrice = data1.excellentPrice;

  const mainPrice = data.baseprice;

  const mrp = data.mrp;

  const dynamicPricing = () => {
    let mainPrice1;
    if (selectedQuality === "fair") {
      mainPrice1 = mainPrice + fairPrice;
    } else if (selectedQuality === "good") {
      mainPrice1 = mainPrice + goodPrice;
    } else if (selectedQuality === "excellent") {
      mainPrice1 = mainPrice + excellentPrice;
    }
    return mainPrice1;
  };

  const saved = () => {
    const saving = ((mrp - dynamicPricing()) * 100) / mrp;
    return Math.floor(saving);
  };

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

  // const ApiUrl = import.meta.env.RENDER_BACKEND_URL;
  const [selectedImage, setSelectedImage] = useState(null);
  const [productImages, setProductImages] = useState([]); // Store product images
  const qualityCheck = useMemo(
    () => [
      {
        main: "32",
        text: "points quality check",
      },
      {
        main: "7",
        text: "Days Refund",
      },
      {
        main: "12",
        text: "months warranty",
      },
      {
        main: "COD",
        text: "Available",
      },
      {
        main: "EMI",
        text: "at no cost",
      },
    ],
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://52.66.77.248:1337/api/deal-of-the-day-2s/${id}?populate=*`, {
          headers: {
            Authorization: "bearer " + "422d2e9d1a9f0707a1622e0552b49661b6e630c8d02f25c724721eedc0376e8947e98312a4adf3bf21bbc7bee43f269d1471ca84c9f927b05ed421fba03c5217ec35ecd8121e836f96e0f01fe4582de30c62aad923007ae34066f6a443dd2e554cc819db2869212bc54a139c4b28fe55de325cdf9049dd7dbf253b053c56cd14",
          }
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


    const handleAddToCart = async () => {
      // Create an object with product details
      const productDetails = {
        title: data.title,
        price: dynamicPricing(),
        Condition: selectedQuality,
        Storage: selectedSpec,
        Color: selectedColor,
      };
    try {
      // Make a POST request to add the product to the user's cart
      const response = await axios.post("http://localhost:5000/api/user/add-to-cart", productDetails);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  }

  


  return (
    <>
      <div className="flex custom-w h-fit md:h-screen flex-col md:flex-row">
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

            <div className="mt-4 hidden md:flex md:justify-between md:w-full">
              <div className=" w-1/2 h-fit">
                <div className="  w-full m-1 flex justify-start ">
                  <p className="py-1 px-2 text-sm w-3/4 flex bg-blue-600 text-white rounded-r-md font-semibold">
                    ₹{savedPrice} off
                  </p>
                </div>

                <div className="  md:grid grid-rows-4   gap-1 rounded-t-xl rounded-b-xl">
                  {qualityCheck.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-200  text-[#353C60] flex flex-col items-center justify-center rounded-md"
                    >
                      <p className="lg:text-base xl:text-xl">{item.main}</p>
                      <p className="lg:text-[10px] xl:text-[12px]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {selectedImage && (
                <div className="w-full flex justify-center items-center">
                  <img
                    src={`${selectedImage}`}
                    alt="Selected Product Image"
                    className=" w-fit h-72"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="buttons hidden md:flex gap-3 text-sm md:text-base my-10">
            <button className="flex-1 px-5 border border-black flex justify-center items-center rounded-lg py-2 active:bg-black active:text-white hover:scale-105">
              Buy Now
            </button>

            <button className="py-2 flex-1 px-5 border border-black flex justify-center items-center rounded-lg bg-black text-white active:bg-white active:text-black hover:scale-105" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
          <div className="flex relative md:hidden w-full justify-center items-center">
            <div className="absolute left-0 bottom-5 drop-shadow-xl grid md:hidden grid-rows-4 w-28 h-fit gap-1 z-30 rounded-t-xl rounded-b-xl  p-1">
            <div className="  w-full m-1 flex justify-start ">
                  <p className="py-1 px-2 text-sm w-full flex bg-blue-600 text-white rounded-r-md font-semibold">
                    ₹{savedPrice} off
                  </p>
                </div>
              {qualityCheck.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-200 text-[#353C60] flex flex-col items-center justify-center rounded-md"
                >
                  <p className="text-[18px]">{item.main}</p>
                  <p className="text-[10px]">{item.text}</p>
                </div>
              ))}
            </div>
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

        <div className="md:flex-1 w-full h-fit md:h-[90vh] md:px-8 overflow-x-hidden overflow-y-scroll scrollbar-hide">
          <div className="main-sec flex flex-col gap-4 justify-start">
            <div className="title-icon flex gap-16 justify-start items-center">
              <div className="titles left-0 w-full">
                <div className="title">
                  <p className="text-xl md:text-base font-semibold">
                    {data.title}
                  </p>
                </div>

                <div className="spec-config flex flex-col md:grid md:grid-cols-3 auto-cols-auto md:text-center md:items-center md:gap-2 w-full flex-nowrap text-xs  my-2 ">
                  <p className="md:border-r-[1px] border-black pr-2 py-1 ">
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
                  <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                    {rated}.7
                    <Rating value={4} onChange={(value) => setRated(value)} readonly/>
                    <Typography
                      color="blue-gray"
                      className="font-medium text-xs md:text-sm text-blue-gray-500"
                    >
                      Based on 134 Reviews
                    </Typography>
                  </div>
                </div>
              </div>

              {/* <CiHeart className="text-2xl md:text-3xl cursor-pointer group" /> */}
              <div className="">
                <CopyButton />
              </div>
            </div>
            <div className="prices hidden md:flex  md:flex-col justify-start ">
              <p className="exclusive text-xs">Excluive Price!</p>
              <div>
                <p className="font-semibold text-xl md:text-2xl flex items-center justify-start gap-2">
                  ₹{dynamicPricing()}{" "}
                  <p className="text-sm md:text-base font-semibold line-through flex gap-2">
                    ₹{mrp}{" "}
                  </p>
                  <span className="text-[#32CD32] text-sm md:text-base ">
                    Save ₹{savedPrice} ({saved()}% Off)
                  </span>
                </p>
              </div>
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
                {selectedQuality === "good" && "sadfjkh asdiofhu asdjfh "}
                {selectedQuality === "excellent" && "sdkjfh asdfjhg sadfjkh g"}
              </p>
              <p className="text-xs md:text-base flex justify-start items-center  gap-2">
                <BsPatchCheckFill className="text-[#32CD32]" />
                {selectedQuality === "fair" && "Fair"}
                {selectedQuality === "good" && "sadfjkh asdiofhu asdjfh "}
                {selectedQuality === "excellent" && "sdkjfh asdfjhg sadfjkh g"}
              </p>
            </div>

            <div className="storage block">
              <div>
                <p>Storages :</p>
              </div>
              <div className="storage grid grid-cols-4 gap-3 ">
                {["store1", "store2", "store3", "store4"].map((storage) => (
                  <button
                    key={storage}
                    onClick={() => handleSpecButtonClick(storage)}
                    className={`${
                      selectedSpec === storage ? "selected" : ""
                    } py-2   rounded-lg  md:hover:scale-105 border border-slate-500 font-light`}
                  >
                    <p className="text-xs">{`6GB/${
                      storage.split("store")[1] * 128
                    }GB`}</p>
                  </button>
                ))}
              </div>
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

            <div>
              <p className="font-semibold">In Box</p>
              <div
                className="text-sm font-medium
               border-[1px] border-gray-300 rounded-lg "
              >
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

// export default ProductSection;

