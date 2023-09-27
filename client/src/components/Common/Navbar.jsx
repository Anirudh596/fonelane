import { useState } from "react";
import Logo from "../Layout/Logo/Logo";
import CartFloat from "../Cart/CartFloat/CartFloat";
import WishlistPopup from "../CartWishlist/Wishlist/Wishlist";
import Search from "../Search/Search";
import Dropdown from "../Layout/Dropdown/Dropdown";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { HiBars3BottomLeft } from "react-icons/hi2";
import BackBtn from "../BackBtn/BackBtn";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleSidebarOptionClick = () => {
    closeSidebar();
    // Add code to handle option selection
  };

  return (
    <>
      <div className="top-0 bg-white z-50 w-full">
        <div className="mx-auto h-[50px] md:h-[50px] lg:h-[60px] xl:h-[70px] flex justify-between md:justify-around items-center">
          <div className="flex justify-between items-center mx-5">
            <div className="flex md:hidden items-center text-2xl">
              <button onClick={toggleSidebar}>
                <HiBars3BottomLeft />
              </button>
            </div>
            <div className="mx-3 md:mx-5">
              <Logo />
            </div>
          </div>
          <ul className="list-none hidden md:flex justify-between items-center text-[8px] md:text-[12px] lg:text-xs xl:text-xs 2xl:text-sm gap-2 md:gap-5  cursor-pointer">
            <li>About Us</li>
            <li>Track Order</li>
            <li>Help</li>
          </ul>
          {isSidebarOpen && ( // Conditionally render the sidebar content
            <>
              <div className="md:hidden fixed top-0 left-0 h-full w-64 bg-white z-50 border-r border-gray-200">
                <BackBtn
                  func={handleSidebarOptionClick}
                  className={"left-0 m-5 text-base "}
                />
                <ul className="p-4">
                  <li className="my-2 flex items-center justify-center">
                    About Us
                  </li>
                  <hr className="h-px border-0 my-1 bg-gray-200" />
                  <li className="my-2 flex items-center justify-center">
                    Track Order
                  </li>
                  <hr className="h-px border-0 my-1 bg-gray-200" />
                  <li className="my-2 flex items-center justify-center">
                    Help
                  </li>
                  <hr className="h-px border-0 my-1 bg-gray-200" />
                  <li className="my-2 flex items-center justify-center">
                    Verified Refurbished
                  </li>
                  <hr className="h-px border-0 my-1 bg-gray-200" />
                  <li className="my-2 flex items-center justify-center">
                    Student Special
                  </li>
                  <hr className="h-px border-0 my-1 bg-gray-200" />
                  <li className="my-2 flex items-center justify-center">
                    Deals
                  </li>
                  <hr className="h-px border-0 my-1 bg-gray-200" />
                  <li className="my-2 flex items-center justify-center">
                    iPhone
                  </li>
                  <hr className="h-px border-0 my-1 bg-gray-200" />
                  <li className="my-2 flex items-center justify-center">
                    OnePlus
                  </li>
                  <hr className="h-px border-0 my-1 bg-gray-200" />
                  <li className="my-2 flex items-center justify-center">
                    Samasung Galaxy
                  </li>
                  <hr className="h-px border-0 my-1 bg-gray-200" />
                  <li className="my-2 flex items-center justify-center">MI</li>
                  <hr className="h-px border-0 my-1 bg-gray-200" />
                  <li className="my-2 flex items-center justify-center">
                    VIVO
                  </li>
                  <hr className="h-px border-0 my-1 bg-gray-200" />
                  <li className="my-2 flex items-center justify-center">
                    OPPO
                  </li>
                  <hr className="h-px border-0 my-1 bg-gray-200" />
                </ul>
              </div>
            </>
          )}
          <div className="md:w-1/5 lg:w-2/5 xl:w-3/6 2xl:w-3/6 hidden md:flex">
            <Search />
          </div>

          <div className="flex justify-between items-center gap-5 mx-5 md:mx-0 md:gap-10">
            <CiHeart className="hover:scale-105 ease-linear cursor-pointer text-2xl 2xl:text-3xl" />
            <CiShoppingCart className="hover:scale-105 ease-linear cursor-pointer text-2xl 2xl:text-3xl" />
            <button className="px-1 py-.5 md:px-3 h-5 md:h-9 border border-black rounded-[.25rem] md:rounded-md lg:rounded-md xl:rounded-lg active:bg-black active:text-white hover:bg-gray-200 text-[10px] md:text-[12px] lg:text-sm xl:text-sm hover:scale-105">
              Login
            </button>
          </div>
        </div>
      </div>
      <div>
        <hr className="w-full h-px border-0 bg-gray-400" />
        <div className="hidden md:block">
          <Dropdown />
        </div>
        <hr className="w-full h-px border-0 bg-gray-400" />
      </div>
      <div className="w-full justify-center items-center md:hidden flex">
        <Search className="w-10/12 py-1.5 my-1" />
      </div>

      {isCartOpen && <CartFloat isOpen={isCartOpen} onClose={toggleCart} />}
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