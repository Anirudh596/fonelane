import ProductImage from "./ProductImageSection/ProductImage";
import Review from "../../../components/Review/Review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useCart } from "../../../components/context/cart";
// import CardFloat from "../../../components/Cart/CartFloat/CartFloat";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { BsPatchCheckFill } from "react-icons/bs";
import Specs from "../../../components/Specs";

// import CartFloat from "../../../components/Cart/CartFloat/CartFloat";

function ProductSection(props) {
  const [isSpecOpen, setIsSpecOpen] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState("excellent");
  const [selectedSpec, setSelectedSpec] = useState("store2");
  const [selectedColor, setSelectedColor] = useState("color1");
  // const [cart, setCart] = useCart();

  useEffect(() => {
    const fetchData = async ()=>{
      try {
        const res = await axios.get(`http://localhost:1337/api/products/${props.product}`, {
          headers: {
            Authorization: "bearer "+ "ea2cc92777940d9cd90404735d813e642f04d4895d82f82372a51ea4b98cf0f851111798b2a88b55c9c048ec8c2f8d265dd0514b02c02c06efb5e21ca8f09e06ab5f92c596a6962f7b02ebe6ea6cb580c9ff42c892a94594fed906b0b27dd896fe141b51991b4a2cbe6562cc7359b718809b3331625b57982c5223bb9152f2ee",
          }
        }
        );
        setData(res.data.data?.attributes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, [])
  

  const openSpecs = () => setIsSpecOpen(true);
  const closeSpecs = () => setIsSpecOpen(false);

  const handleQualityButtonClick = (quality) => {
    setSelectedQuality(quality);
  };

  const handleSpecButtonClick = (Storage) => {
    setSelectedSpec(Storage);
  };

  const handleColorButtonClick = (Color) => {
    setSelectedColor(Color);
  };

  // const addToCart = () => {
  //   const product = {
  //     id: "1",
  //     title: "iPhone 13 pro max",
  //     quality: selectedQuality,
  //     spec: selectedSpec,
  //     price: 81999,
  //     quantity: 1, // Start with a quantity of 1
  //   };

  //   // Check if the product is already in the cart
  //   const existingProductIndex = cart.findIndex(
  //     (item) =>
  //       item.id === product.id &&
  //       item.quality === product.quality &&
  //       item.spec === product.spec
  //   );

  //   if (existingProductIndex !== -1) {
  //     // If the product exists in the cart, update its quantity
  //     const updatedCart = [...cart];
  //     updatedCart[existingProductIndex].quantity += 1;
  //     setCart(updatedCart);
  //   } else {
  //     // If the product doesn't exist, add it to the cart
  //     setCart((prevCart) => [...prevCart, product]);
  //   }

  //   <CartFloat />

  // };

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
                    iPhone 13 pro max
                  </p>
                </div>

                <div className="spec-config flex flex-col md:grid md:grid-cols-3 auto-cols-auto md:text-center md:items-center  md:gap-2 w-full flex-nowrap text-xs md:text-xs my-2 md:">
                  <p className=" md:border-r-[1px] border-black pr-2 py-1 ">
                    Quality:{" "}
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
                      {selectedColor === "color2" && "red"}
                      {selectedColor === "color3" && "green"}
                      {selectedColor === "color4" && "purple"}
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
                ₹89000{" "}
                <p className="text-sm md:text-base font-normal line-through flex gap-2">
                  ₹1,39000{" "}
                  <p className="text-[#32CD32]  text-sm md:text-base">
                    Save ₹57,001 (41% Off)
                  </p>
                </p>
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
              <a href="" className="ml-2 underline text-blue-600">view all ofers</a>
              
            </div>

            <hr className="w-full" />

            <div className="constion block">
              <p>Condition :</p>
              <div className="flex gap-3 flex-nowrap ">
                <button
                  onClick={() => handleQualityButtonClick("fair")}
                  className={`${
                    selectedQuality === "fair" ? "selected" : ""
                  } w-48 h-12  rounded-lg   hover:scale-105 flex flex-col justify-center items-center border border-slate-500 font-light`}
                >
                  <p className="text-base">Fair</p>
                </button>
                <button
                  onClick={() => handleQualityButtonClick("good")}
                  className={`${
                    selectedQuality === "good" ? "selected" : ""
                  } w-48 h-12  rounded-lg  hover:scale-105 flex flex-col justify-center items-center border border-slate-500 font-light`}
                >
                  <p className="text-base">Good</p>
                </button>
                <button
                  onClick={() => handleQualityButtonClick("excellent")}
                  className={`${
                    selectedQuality === "excellent" ? "selected" : ""
                  } w-48 h-12  rounded-lg  hover:scale-105 flex flex-col justify-center items-center border border-slate-500 font-light`}
                >
                  <p className="text-base">Excellent</p>
                </button>
              </div>
            </div>

            <div className="w-full bg-slate-200 block p-2 rounded-lg">
              <p className="text-xs md:text-base flex justify-start items-center  gap-2">
                <BsPatchCheckFill  className="text-[#32CD32]"/>
                {selectedQuality === "fair" && "Fair"}
                {selectedQuality === "good" && "Good"}
                {selectedQuality === "excellent" && "Excellent"}
              </p>
              <p className="text-xs md:text-base flex justify-start items-center gap-2">
              <BsPatchCheckFill  className="text-[#32CD32]"/>
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
                  } py-2   rounded-lg  hover:scale-105 border border-slate-500 font-light`}
                >
                  <p className="text-xs">6GB/128GB</p>
                </button>
                <button
                  onClick={() => handleSpecButtonClick("store2")}
                  className={`${
                    selectedSpec === "store2" ? "selected" : ""
                  } py-2   rounded-lg  hover:scale-105  border border-slate-500 font-light`}
                >
                  <p className="text-xs">6GB/256GB</p>
                </button>
                <button
                  onClick={() => handleSpecButtonClick("store3")}
                  className={`${
                    selectedSpec === "store3" ? "selected" : ""
                  } py-2   rounded-lg  hover:scale-105  border border-slate-500 font-light`}
                >
                  <p className="text-xs">6GB/512GB</p>
                </button>
                <button
                  onClick={() => handleSpecButtonClick("store4")}
                  className={`${
                    selectedSpec === "store4" ? "selected" : ""
                  } py-2   rounded-lg  hover:scale-105  border border-slate-500 font-light`}
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
              <a onClick={openSpecs} className="w-full h-4 px-2 py-2 flex justify-between items-center cursor-pointer">
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
                  placeholder="Enter Pincode for expected Data of Delivery"
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
