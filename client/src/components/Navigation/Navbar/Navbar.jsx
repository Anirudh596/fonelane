import { useState } from "react";
import CartFloat from "../../Cart/CartFloat/CartFloat";
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
import { motion } from "framer-motion"; // Import motion

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

  const loginButton = isLoggedIn ? (
    <HiUserCircle className="hover:scale-105 ease-linear cursor-pointer text-2xl 2xl:text-3xl" />
  ) : (
    <button
      onClick={openLogin}
      className="px-1 py-.5 md:px-3 h-5 md:h-9 border border-black rounded-[.25rem] md:rounded-md lg:rounded-md xl:rounded-lg active:bg-black active:text-white hover:bg-gray-200 text-[10px] md:text-[12px] lg:text-sm xl:text-sm hover:scale-105"
    >
      Login
    </button>
  );

  return (
    <>
      <div className="top-0 bg-white z-50 w-full">
        <div className="mx-10 h-[50px] md:h-[50px]  flex justify-between md:justify-around items-center">
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
            <div className="">
              <Link to="/">
                <div className="flex justify-center items-end w-auto h-auto">
                  <img src="./images/logo 2.png" alt="" className=" flex  items-center w-40 h-40 md:w-40 md:h-40  " />
                </div>
              </Link>
            </div>
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
          <div className="md:w-1/5 lg:w-2/5 xl:w-3/6 2xl:w-3/6 hidden md:flex mx-5">
            <Search />
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
      <div className="w-full justify-center items-center md:hidden flex">
        <Search className="w-10/12 py-1.5 my-1" />
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
