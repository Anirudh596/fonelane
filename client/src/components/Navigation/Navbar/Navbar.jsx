import { useState } from "react";
import Logo from "../Logo/Logo";
// import Search from "../Search/Search";
// import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
// import {  faShoppingCart} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Dropdown from "../Dropdown/Dropdown";
// import { Link } from "react-router-dom";
import CartFloat from "../../Cart/CartFloat/CartFloat";
import WishlistPopup from "../../Wishlist/Wishlist";
import Search from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "../../DropMenu/DropdownMenu";
import Dropdown from "../Dropdown/Dropdown";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);

  return (
    <>
      <div className="sticky top-0 bg-white z-50 w-full ">
        <div className="mx-10 h-[40px] md:h-[50px] lg:h-[60px] xl:h-[70px] flex justify-between items-center">
          <div className="flex justify-between items-center mx-5">
            <Logo />
            <ul className="list-none flex justify-between items-center text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg gap-5 mx-10 cursor-pointer">
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="md:w-1/5 lg:w-2/5 xl:w-3/4 2xl:w-3/5 mx-5">
          <Search />
          </div>
          <div className="flex justify-between items-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl gap-10">
            <FontAwesomeIcon icon={faHeart} className="hover:scale-105 ease-linear cursor-pointer"/>
            <FontAwesomeIcon icon={faShoppingCart} className="hover:scale-105 ease-linear cursor-pointer"/>
            <button className=" px-4 py-2 border border-black rounded-lg bg-gray-200 text-sm md:text-base lg:text-lg xl:text-lg hover:scale-105">Login </button>
          </div>
        </div>
      </div>
      <div>
        <hr className="h-px border-0 bg-gray-400"/>
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
