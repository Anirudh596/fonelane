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

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);

  return (
    <>
      <div className="sticky top-0 bg-white z-50 w-full ">
        <div className="mx-5 h-[70px] flex justify-between items-center">
          <div className="flex justify-between items-center mx-5">
            <Logo />
            <ul className="list-none flex justify-between items-center text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg gap-5 mx-16">
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          

        </div>
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
