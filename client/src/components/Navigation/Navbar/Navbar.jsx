import React, { useState } from "react";
import Logo from "../Logo/Logo";
import CartFloat from "../../Cart/CartFloat/CartFloat";
import WishlistPopup from "../../Wishlist/Wishlist";
import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";
import {  CiShoppingCart } from "react-icons/ci";
import { HiBars3BottomLeft } from "react-icons/hi2";
import LoginPopup from "../../Authantication/LoginPopup";
import { useAuth } from "../../context/AuthContext";
import { HiUserCircle } from "react-icons/hi";
import {
  Drawer,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

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

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const openLogin = () => setIsLogOpen(true);
  const closeLogin = () => setIsLogOpen(false);
  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);

  const loginButton = isLoggedIn ? (
    <HiUserCircle
      className="hover:scale-105 ease-linear cursor-pointer text-2xl 2xl:text-3xl"
    />
  ) : (
    <button
      onClick={openLogin}
      className="px-1 py-.5 md:px-3 h-5 md:h-9 border border-black rounded-[.25rem] md:rounded-md lg:rounded-md xl:rounded-lg active:bg-black active:text-white hover:bg-gray-200 text-[10px] md:text-[12px] lg:text-sm xl:text-sm hover:scale-105"
    >
      Login
    </button>
  );



 
  const [open, setOpen] = React.useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className="top-0 bg-white z-50 w-full">
        <div className="mx-auto h-[50px] md:h-[50px]  flex justify-between md:justify-around items-center">
          <div className=" flex flex-grow md:flex-1 justify-between items-center mx-5">
            <div className="flex md:hidden items-center text-2xl">
              <button onClick={openDrawer}>
                <HiBars3BottomLeft />
              </button>
            </div>
            <div className="">
              <Logo />
            </div>
          </div>
          <ul className="list-none hidden md:flex justify-between items-center text-[8px] md:text-[12px] lg:text-xs xl:text-xs 2xl:text-sm gap-2 md:gap-5  cursor-pointer">
            <Link to="/about"><li>About Us</li></Link>
            <li>Track Order</li>
            <li>Help</li>
          </ul>
          
            <Drawer open={open} onClose={closeDrawer} className="h-full w-full fixed top-0 left-0 overflow-y-auto transition-transform transform translate-x-0 md:translate-y-0 md:w-96">
            <div className="mb-6 flex items-center justify-between">
              
              <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 28 28"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            {links.map((link, index) => (
                      <React.Fragment key={link}>
                        <li className="my-2 flex items-center justify-center">{link}</li>
                        {index < links.length - 1 && (
                          <hr className="h-px border-0 my-1 bg-gray-200" />
                        )}
                      </React.Fragment>
                    ))}
           
            
          </Drawer>
          
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





 
export function DrawerDefault() {
  
 
  return (
    <React.Fragment>
      <Button >Open Drawer</Button>
      
    </React.Fragment>
  );
}