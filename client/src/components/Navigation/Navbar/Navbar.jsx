import { useState } from "react";
import Logo from "../Logo/Logo";
import CartFloat from "../../Cart/CartFloat/CartFloat";
import WishlistPopup from "../../Wishlist/Wishlist";
import Search from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../Dropdown/Dropdown";
import { CiHeart, CiShoppingCart} from "react-icons/ci"



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
          <div className="md:w-1/5 lg:w-2/5 xl:w-3/6 2xl:w-3/6">
          <Search />
          </div>
          <div className="flex justify-between items-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl gap-10">
            <CiHeart className="hover:scale-105 ease-linear cursor-pointer"/>
            <CiShoppingCart className="hover:scale-105 ease-linear cursor-pointer" />
            <button className=" px-3 py-2 border border-black rounded-lg active:bg-black active:text-white hover:bg-gray-200 text-sm md:text-base lg:text-lg xl:text-sm hover:scale-105">Login </button>
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
