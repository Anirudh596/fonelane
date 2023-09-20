import { useState } from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faShoppingCart, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import CartFloat from "../../Cart/CartFloat/CartFloat";
import WishlistPopup from "../../Wishlist/Wishlist";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);

  return (
    <>
      <div className="sticky md:sticky lg:sticky xl:sticky top-0 md:top-0 lg:top-0 xl:top-0 bg-white z-50 w-full">
        <div className="mx-5 navbar h-[35px] md:h-[45px] lg:h-[50px] xl:h-[55px] flex justify-between items-center ">
          <Logo />
          <div className="w-full flex  justify-between items-center  gap-32">
            <div className="hidden md:hidden lg:flex xl:flex  justify-between items-center md:gap-0 md:ml-0 lg:gap-24  lg:ml-14 xl:gap-80 xl:ml-16">
              <ul className="w-full flex  text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] list-none  flex-nowrap justify-between gap-5 items-center">
                <Link>
                  <li className="flex w-full flex-nowrap">About Us</li>
                </Link>
                <Link>
                  <li className=" flex w-full flex-nowrap">Contact Us</li>
                </Link>
              </ul>

              <div className="top-icons flex justify-center items-center gap-10 ">
                <Search />
                <button
                  onClick={toggleWishlist}
                  className="icon-button  text-sm md:text-base lg:text-lg xl:text-xl"
                >
                  <FontAwesomeIcon icon={faHeart} className="" />
                </button>
                <button
                  onClick={toggleCart}
                  className="icon-button  text-sm md:text-base lg:text-lg xl:text-xl"
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="" />
                </button>
                <button className="icon-button">
                  <Link to="/signup">
                    <FontAwesomeIcon
                      icon={faUser}
                      className=" text-sm md:text-base lg:text-lg xl:text-xl"
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[0] cursor-pointer group relative flex justify-center items-center md:flex lg:hidden xl:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className=" absolute group-active:hidden   text-sm md:text-base lg:text-lg xl:text-xl"
            />
            <FontAwesomeIcon
              icon={faX}
              className=" absolute  text-sm md:text-base lg:text-lg xl:text-xl"
            />
          </div>
        </div>
        <hr className="h-px bg-gray-400 border-0" />
        <Dropdown />
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
