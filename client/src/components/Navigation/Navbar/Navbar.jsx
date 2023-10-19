import { useState } from "react";
// import CartFloat from "../../Cart/CartFloat/CartFloat";
import WishlistPopup from "../../Wishlist/Wishlist";
import Search from "./Search";
import Dropdown from "../Dropdown/Dropdown";
import { CiShoppingCart } from "react-icons/ci";
import { HiBars3BottomLeft } from "react-icons/hi2";
import LoginPopup from "../../Authantication/LoginPopup";
import { useAuth } from "../../context/AuthContext";
import { HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Drawer, IconButton } from "@material-tailwind/react";
import React from "react";
import { SearchResults } from "./SearchResults";

function Navbar() {
  const links = [
    "About Us",
    "Track Order",
    "Help",
    "Verified Refurbished",
    "Student Special",
    "Deals",
    "iPhone",
    "OnePlus",
    "Samsung Galaxy",
    "MI",
    "VIVO",
    "OPPO",
  ];

  const { isLoggedIn } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control the drawer

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const openLogin = () => setIsLogOpen(true);
  const closeLogin = () => setIsLogOpen(false);
  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen); // Function to toggle the drawer

  const [desktopResults, setDesktopResults] = useState([]); // Results for desktop search
  const [mobileResults, setMobileResults] = useState([]);   // Results for mobile search


  const loginButton = isLoggedIn ? (
    <HiUserCircle className="hover:scale-105 ease-linear cursor-pointer text-2xl 2xl:text-3xl" />
  ) : (
    <button
      onClick={openLogin}
      className="px-3 py-.5 md:px-3 h-6 md:h-9 border border-black rounded-[.25rem] md:rounded-md lg:rounded-md xl:rounded-lg active:bg-black active:text-white hover:bg-gray-200 text-[10px] md:text-[12px] lg:text-sm xl:text-sm hover:scale-105 font-semibold"
    >
      Login
    </button>
  );
  const closeDesktopSearchResults = () => {
    setDesktopResults([]); // Clear the results for desktop search
  };

  const closeMobileSearchResults = () => {
    setMobileResults([]); // Clear the results for mobile search
  };
  return (
    <>
      <div className="top-0 bg-white z-50 w-full">
        <div className="md:mx-10 h-[50px] md:h-[50px]  flex justify-between md:justify-around items-center">
          <div className=" flex flex-grow md:flex-1 justify-between items-center mx-5">
            <div
              className="flex md:hidden items-center "
              onClick={toggleDrawer}
            >
              <button>
                <HiBars3BottomLeft className="text-2xl" />
              </button>
              <Drawer
                open={isDrawerOpen}
                onClose={toggleDrawer}
                size={500}
                className="p-4"
              >
                <div className="mb-6 flex items-center justify-between">
                  <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={toggleDrawer}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 36 36"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-10 w-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </IconButton>
                </div>
                {/* eslint-disable-next-line react/prop-types */}
                {links.map((link, index) => (
                  <React.Fragment key={link}>
                    <li className="my-2 flex items-center justify-center tex-sm">
                      {link}
                    </li>
                    {/* eslint-disable-next-line react/prop-types */}
                    {index < links.length - 1 && (
                      <hr className="h-px border-0 my-1 bg-gray-200" />
                    )}
                  </React.Fragment>
                ))}
              </Drawer>
            </div>
            <Logo />
          </div>
          <ul className="list-none hidden md:flex justify-between items-center text-[8px] md:text-[12px] lg:text-xs xl:text-xs 2xl:text-sm gap-2 md:gap-5  cursor-pointer">
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <li>Track Order</li>
            <Link to="/help">
              <li>Help</li>
            </Link>
          </ul>
          <div className="relative my-0 md:w-1/4 lg:w-1/3 xl:w-1/2 mx-5 hidden md:flex flex-col">
            <Search setResults={setDesktopResults} className="sticky top-0" />
            <SearchResults results={desktopResults} className="absolute top-10" onClose={closeDesktopSearchResults} />
          </div>
          <div className="flex flex-shrink md:flex-none justify-between items-center gap-5 mx-5 md:mx-0 md:gap-10">
            <CiShoppingCart
              onClick={toggleCart}
              className="hover:scale-105 ease-linear  cursor-pointer text-2xl 2xl:text-3xl"
            />
            {loginButton}
          </div>
        </div>
      </div>
      <div>
        <hr className="w-full h-px border-0 bg-gray-400" />
        <div className="hidden md:block">
          <Dropdown />
        </div>
        <hr className="w-full h-px border-0 bg-gray-200" />
      </div>
      <div className="relative  w-full  md:hidden flex h-10 my-1 z-50">
        <Search setResults={setMobileResults} className="sticky top-0" />
        <SearchResults results={mobileResults} className="absolute top-10" onClose={closeMobileSearchResults} />
      </div>

      {isCartOpen && <CartFloat isOpen={isCartOpen} onClose={toggleCart} />}
      {isLogOpen && <LoginPopup isOpen={isLogOpen} onClose={closeLogin} />}
      {isWishlistOpen && (
        <WishlistPopup
          isWishlistOpen={isWishlistOpen}
          onClose={toggleWishlist}
        />
      )}
    </>
  );
}

export default Navbar;


function Logo() {
  return (
    <div className="z-50">
      <Link to="/">
        <div className="flex justify-center items-end">
          <img src="./images/logo 2.png" alt="" className=" flex  items-center w-40  md:w-30  xl:w-40  " />
        </div>
      </Link>
    </div>
  )
}





import { useEffect } from "react";
import BackBtn from "../../BackBtn/BackBtn";
import { FaTruckFast } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper CSS
import { useCart } from "../../context/cart";

function CartFloat({ onClose }) {
  const [cart, setCart] = useCart();
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from your API
    // Replace 'yourApiEndpoint' with the actual API endpoint URL
    fetch("http://localhost:5000/api/user/cart")
      .then((response) => response.json())
      .then((data) => {
        // Set the cart items in your component state
        setCartItems(data);
      })
      .catch((error) => {
        console.error("Error fetching cart items: ", error);
      });
  }, []);

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
    // Get the item to be deleted
    const itemToDelete = cartItems[index];
    const id = itemToDelete._id;

    // Make an API request to delete the item from the database
    fetch(`http://localhost:5000/api/user/cart/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 204) {
          // Item deleted successfully from the database
          // Update the cart items in the frontend
          const updatedCartItems = [...cartItems];
          updatedCartItems.splice(index, 1);
          setCartItems(updatedCartItems);
        } else {
          // Handle any error or failure here
          console.error('Failed to delete item from the database');
        }
      })
      .catch((error) => {
        console.error('Error deleting item: ', error);
      });
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


          <div className="overflow-y-auto h-[40vh]">
          <Swiper
            className=""
            direction="vertical"
            slidesPerView="auto"
            scrollbar={{ draggable: true }}
          >
            {cartItems.map((product, index) => (

              
              <SwiperSlide key={index} >
                <div className=" ">
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
                          <h2>{product.title}</h2>
                        </div>
                        <div className="detail flex flex-wrap justify-start items-center gap-2 text-xs md:text-xs">
                          <p>Quality: {product.quality}</p>
                          <p>Storage: {product.storage}</p>
                          {/* Display other product details */}
                        </div>
                        <div className="pricePro">
                          <h2 className="flex font-medium justify-center items-center gap-2">
                            ₹{product.price}
                            {/* Display price and other details */}
                          </h2>
                        </div>
                      </div>
                      <div className=" flex flex-col justify-between items-center ">
                        <BackBtn
                          className={"text-base"}
                          func={deleteItem(index)}  // Add to cart with quantity logic
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
