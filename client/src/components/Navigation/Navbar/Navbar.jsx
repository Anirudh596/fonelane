import { useState } from "react";
import Logo from "../Logo/Logo";
import CartFloat from "../../Cart/CartFloat/CartFloat";
import WishlistPopup from "../../Wishlist/Wishlist";
import Search from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../Dropdown/Dropdown";
import { LuHeart} from "react-icons/lu"



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
            <ul className="list-none flex justify-between items-center text-xs md:text-[10px] lg:text-[12px] xl:text-xs 2xl:text-xs gap-5 mx-10 cursor-pointer">
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="md:w-1/5 lg:w-2/5 xl:w-3/6 2xl:w-3/6">
          <Search />
          </div>
          <div className="flex justify-between items-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl gap-10">
            <LuHeart className="hover:scale-105 ease-linear cursor-pointer"/>
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
