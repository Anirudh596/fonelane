

import  { useState } from "react";
import BackBtn from "../../BackBtn/BackBtn";
import { FaTruckFast } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper CSS
import { useCart } from "../../context/cart";

// eslint-disable-next-line react/prop-types
function CartFloat({ onClose }) {
  const [cart, setCart] = useCart();
  const [count, setCount] = useState(0);

  const cartAssuredItems = [
    {
      icon: <FaTruckFast className="text-5xl md:text-4xl" />,
      text: "Free shipping",
    },
    {
      icon: <FcCustomerSupport className="text-5xl md:text-4xl" />,
      text: "Exceptional Customer Service",
    },
    {
      icon: <HiOutlineDeviceMobile className="text-5xl md:text-4xl" />,
      text: "Free Phone Case and Screen Guard",
    },
    {
      icon: <BsShieldCheck className="text-5xl md:text-4xl" />,
      text: "1 Year Warranty",
    },
  ];

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const deleteItem = (index) => {
    // Create a copy of the current cart
    const updatedCart = [...cart];


    // Remove the product at the specified index
    updatedCart.splice(index, 1);

    // Update the cart state with the modified cart
    setCart(updatedCart);
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full justify-end bg-black bg-opacity-50`}>
      <div className={`fixed top-0 right-0 h-full w-full md:w-1/3 bg-white z-50 transform transition-transform ease-in-out duration-700`}>
        <div className="flex justify-between items-center m-3">
          <h2>Your Cart</h2>
          <BackBtn func={onClose} className="text-base" />
        </div>
        <hr className="h-px border-0 bg-gray-500 mx-3" />

         <div className="flex justify-center items-center m-4">
           {cartAssuredItems.map((items, index) => (
             <div key={index} className="flex flex-col justify-center items-center">
               {items.icon}
               <p className="text-xs md:text-sm text-center">{items.text}</p>
             </div>
           ))}
        </div>
        <div className="cart-items-container overflow-y-auto max-h-[60vh]">
          <div className="flex justify-center items-center m-4">
          </div>

          <hr className="h-px border-0 bg-gray-500 mx-3" />

          <Swiper
            className=""
            direction="vertical"
            slidesPerView="auto"
            scrollbar={{ draggable: true }}
          >
            {cart.map((product, index) => (
              <SwiperSlide key={index} className="flex flex-col ">
              <div>
                <div className="m-3 flex justify-evenly items-center cursor-pointer bg-white">
                  <div className="flex">
                  <img
              src="./images/iphone 2-1.png"
              alt=""
              className="w-[100px] h-[100px]"
            />
                  </div>
                  <div className="flex">
                    <div className="flex flex-col justify-start items-start leading-5 w-full h-full p-3">
                      <div className="title text-sm md:text-base font-semibold">
                        <h2>Iphone 12</h2>
                      </div>
                      <div className="detail flex flex-wrap justify-start items-center gap-2 text-xs md:text-xs">
                        <p>Quality: Fair</p>
                        <p>Storage: 128GB</p>
                        {/* Display other product details */}
                      </div>
                      <div className="pricePro">
                        <h2 className="flex font-medium justify-center items-center gap-2">
                          ₹
                          {/* Display price and other details */}
                        </h2>
                      </div>
                    </div>
                    <div className=" flex flex-col justify-between items-center ">
                      <BackBtn
                        className={"text-base"}
                        func={() => deleteItem(index)}  // Add to cart with quantity logic
                      />
                      {/* Add quantity controls and logic here */}
                      <div className="flex justify-between items-center w-16 h-2">
                        <button onClick={decrease}>-</button>
                        <p>{count}</p>
                        <button onClick={increase}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>


        {/* Checkout section */}
        <div className="fixed bottom-0 bg-[#fffafa] mx-5 z-50">
        <div className="flex flex-col mx-2 md:mx-5 mb-5">
          <p className="text-sm">Proceed to apply coupon and confirm order:</p>
          <div className="text-sm my-3">
            <div className="flex justify-between items-center">
              <p>Price: </p>
              <p>₹81,999</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Savings: </p>
              <p>0</p>
            </div>
          </div>
          <div className="flex justify-between items-center font-semibold my-2">
            <p>Subtotal: </p>
            <p>₹91,999</p>
          </div>
          <div className="flex flex-col justify-center items-center mx-10">
            <div className="flex justify-center items-center my-2 gap-2">
              <input type="checkbox" name="TandC" id="T_C" defaultChecked required />
              <label htmlFor="T_C" className="text-[10px]">I understand and agree to fonelanes <a href="" className="underline">return and Shipping policy</a> and <a href="" className="underline">T & C</a> </label>
            </div>
            <input type="submit" name="cartSubmit" id="cartSubmit" className="w-full py-2 bg-black text-white rounded-md cursor-pointer active:bg-gray-500 hover:scale-105 ease-linear duration-200" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CartFloat;
