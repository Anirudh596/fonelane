import ProductImage from "./ProductImageSection/ProductImage";
import Review from "../../../components/Review/Review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTag } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useCart } from "../../../components/context/cart";
import axios from "axios";
import CardFloat from "../../../components/Cart/CartFloat/CartFloat";
import { AiOutlineShareAlt } from "react-icons/ai";

function ProductSection() {
  const addToCart = () => {
    // Create an object representing the product
    const product = {
      id: "1",
      title: "iPhone 13 pro max", // Change this to the actual product details
      quality: selectedQuality,
      spec: selectedSpec,
      price: 81999, // Change this to the actual product price
      quantity: 0,
    };

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(
      (item) =>
        item.id === product.id &&
        item.quality === product.quality &&
        item.spec === product.spec
    );

    if (existingProductIndex !== -1) {
      // If the product exists in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If the product doesn't exist, add it to the cart with a quantity of 1
      product.quantity = 1;
      setCart((prevCart) => [...prevCart, product]);
    }

    <CardFloat />;
  };

  const [data, setData] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState("excellent"); // Default selected quality measure
  const [selectedSpec, setSelectedSpec] = useState("store2"); // Default selected quality measure
  const [cart, setCart] = useCart();

  const handleQualityButtonClick = (quality) => {
    setSelectedQuality(quality);
  };
  const handleSpecButtonClick = (Storage) => {
    setSelectedSpec(Storage);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/products", {
          headers: {
            Authorization:
              "bearer " +
              "2a2f438d92aaa75f945593b16bae514f47678c8ac01491b15b854abbd19257baa975b48a8df17e6a75842d29ff15b8888dff50e96cf7bf78a25d0bcf7767142218c60e3710a8723a44275de5695445d06ada51b8706e28bd1a2bed5b974106def5f35837527960626ec23883f26d2c59b6a46a2c62ff863ba9e0b4f4037a2be5",
          },
        });
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex custom-w h-fit md:h-screen flex-col md:flex-row">
        <div className=" md:flex-1">
          <ProductImage />
        </div>

        <div className=" md:flex-1 w-full h-fit md:h-[90vh] px-8 py-8 over md:overflow-y-scroll scrollbar-hide">
          <div className="main-sec flex flex-col gap-4 justify-start ">
            <div className="title-icon flex gap-16 justify-start items-center">
              <div className="titles left-0 w-full">
                <div className="title">
                  <p className="text-xl md:text-3xl font-semibold">
                    iPhone 13 pro max
                  </p>
                </div>
                <div className="spec-config hidden md:grid  md:grid-cols-3 auto-cols-auto text-center items-center gap-2 w-full flex-nowrap text-[10px] md:text-sm ">
                  <p className=" border-r-2 border-black pr-2 py-1 ">
                    Quality:{" "}
                    <span>
                      {selectedQuality === "fair" && "Fair"}
                      {selectedQuality === "good" && "Good"}
                      {selectedQuality === "excellent" && "Excellent"}
                    </span>
                  </p>

                  <p className=" col-auto border-r-2 flex flex-nowrap border-black pr-6 py-1">
                    Storage:{" "}
                    <span>
                      {selectedSpec === "store1" && "6GB/128GB"}
                      {selectedSpec === "store2" && "6GB/256GB"}
                      {selectedSpec === "store3" && "6GB/512GB"}
                      {selectedSpec === "store4" && "6GB/1TB"}
                    </span>
                  </p>

                  <p>
                    Color: <span>Sierra Blue</span>
                  </p>
                </div>
                <div className="review cursor-pointer flex flex-nowrap items-center">
                  <Review />
                  <p className="mx-1  md:text-[25px] font-extralight ">|</p>
                  <p>300 reviews</p>
                </div>
              </div>
              <div className="icons flex flex-col gap-5">
                <div className="text-xl md:text-[24px] text-[#ee0e10] cursor-pointer group ">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="group-hover:scale-110 ease-in-out duration-200 active:text-[#ee600e]"
                  />
                </div>
                <div className="text-xl md:text-[24px]  cursor-pointer group ">
                  <AiOutlineShareAlt className="group-hover:scale-110 ease-in-out duration-200 active:text-[#db0eee]" />
                </div>
              </div>
            </div>
            <div className="prices inline-flex justify-start gap-4 text-base ">
              <p className="text-xl md:text-[40px] font-normal flex gap-2 items-center">
                ₹89999{" "}
                <p className="line-through text-[#898989] text-sm md:text-[20px] flex">
                  {" "}
                  ₹1,39,000{" "}
                </p>{" "}
                <p className="save text-[#32CD32] text-sm md:text-[20px] ">
                  Save R57,001 (41% Off)
                </p>
              </p>
              <div></div>
            </div>
            <hr className="w-full" />
            <div className="text-xs md:text-sm">
              <div className="flex gap-3 text-center items-center ">
                <FontAwesomeIcon
                  icon={faTag}
                  className="text-[#ff5659]"
                  flip="horizontal"
                />
                <p>Bank Offer10% Instant Discount on HDFC Credit Card</p>
              </div>
              <div className="flex gap-3 text-center items-center">
                <FontAwesomeIcon
                  icon={faTag}
                  className="text-[#ff5659]"
                  flip="horizontal"
                />
                <p>Bank Offer10% Instant Discount on HDFC Credit Card</p>
              </div>
            </div>
            <hr className="w-full" />
            <div className="buttons flex gap-3 text-sm md:text-base">
              <button className=" flex-1 px-5  border border-black flex justify-center items-center rounded-lg py-2 active:bg-black active:text-white hover:scale-105">
                Buy Now
              </button>

              <button
                className="py-2 flex-1 px-5 border border-black flex justify-center items-center rounded-lg bg-black text-white active:bg-white active:text-black hover:scale-105"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
            <div className="constion hidden md:block">
              <p>Condition :</p>
              <div className=" flex gap-3 flex-nowrap">
                <button
                  onClick={() => handleQualityButtonClick("fair")}
                  className={`${
                    selectedQuality === "fair" ? "selected" : ""
                  } w-44 h-24 bg-slate-300 rounded-2xl  hover:scale-105 flex flex-col justify-center items-center `}
                >
                  <p className="text-[18px]">Fair</p>
                </button>
                <button
                  onClick={() => handleQualityButtonClick("good")}
                  className={`${
                    selectedQuality === "good" ? "selected" : ""
                  } w-[170px] h-[110px] bg-slate-300 rounded-2xl  hover:scale-105 flex flex-col justify-center items-center`}
                >
                  <p className="text-[18px]">Good</p>
                </button>
                <button
                  onClick={() => handleQualityButtonClick("excellent")}
                  className={`${
                    selectedQuality === "excellent" ? "selected" : ""
                  } w-[170px] h-[110px] bg-slate-300 rounded-2xl  hover:scale-105 flex flex-col justify-center items-center`}
                >
                  <p className="text-[18px]">Excellent</p>
                </button>
              </div>
            </div>
            <div className="storage hidden md:block">
              <div>
                <p>Storages :</p>
              </div>
              <div className="storage grid grid-cols-4 gap-3">
                <button
                  onClick={() => handleSpecButtonClick("store1")}
                  className={`${
                    selectedSpec === "store1" ? "selected" : ""
                  } py-2  bg-slate-300 rounded-xl  hover:scale-105 `}
                >
                  <p>6GB/128GB</p>
                </button>
                <button
                  onClick={() => handleSpecButtonClick("store2")}
                  className={`${
                    selectedSpec === "store2" ? "selected" : ""
                  } py-2  bg-slate-300 rounded-xl  hover:scale-105 `}
                >
                  <p>6GB/256GB</p>
                </button>
                <button
                  onClick={() => handleSpecButtonClick("store3")}
                  className={`${
                    selectedSpec === "store3" ? "selected" : ""
                  } py-2  bg-slate-300 rounded-xl  hover:scale-105 `}
                >
                  <p>6GB/512GB</p>
                </button>
                <button
                  onClick={() => handleSpecButtonClick("store4")}
                  className={`${
                    selectedSpec === "store4" ? "selected" : ""
                  } py-2  bg-slate-300 rounded-xl  hover:scale-105 `}
                >
                  <p>6GB/1TB</p>
                </button>
              </div>
            </div>
            <div className="colors hidden md:block">
              <div className="">
                <p>Colors :</p>
              </div>
              <div className="flex items-center gap-4">
                <div className=" justify-center items-center w-12 h-12 border-0 border-black flex focus:border">
                  <button className="w-10 h-10 flex bg-[#BFDAF7] rounded-lg justify-center items-center"></button>
                </div>
                <button className="w-10 h-10 bg-[#485748] rounded-lg"></button>
                <button className="w-10 h-10 bg-[#ffe8d2] rounded-lg"></button>
                <button className="w-10 h-10 bg-[#d9d9d9] rounded-lg"></button>
              </div>
            </div>
            <div className="pincode flex flex-col gap-3">
              <p>Pincode :</p>
              <div className="flex">
                <input
                  type="text"
                  id="pin-check"
                  name="PinCheck"
                  placeholder="Enter Pincode for expected Data of Delivery"
                  className="w-[300px] rounded-lg border border-black py-3 px-3 text-[12px] focus:text-[16px] z-10"
                />
                <input
                  type="submit"
                  value="Check"
                  id="pin-check-btn"
                  name="PinCheckBtn"
                  className="px-3 py-3  w-[120px] bg-black text-white rounded-lg ml-[-20px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
