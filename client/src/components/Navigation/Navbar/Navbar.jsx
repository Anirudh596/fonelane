import { useState } from "react";
import Logo from "../Logo/Logo";
import CartFloat from "../../Cart/CartFloat/CartFloat";
import WishlistPopup from "../../Wishlist/Wishlist";
import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);

  const [isBarsopen, setIsBarsOpen] = useState(false);
  const toggleBars = () => {
    setIsBarsOpen(!isBarsopen);
  };

  return (
    <>
      <div className="top-0 bg-white z-50 w-full ">
        <div className="mx-auto h-[40px] md:h-[50px] lg:h-[60px] xl:h-[70px] flex justify-around items-center">
          <div className="flex justify-between items-center mx-5">
            <Logo />
            <ul className="list-none hidden md:flex  justify-between items-center text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-base gap-2 md:gap-5  cursor-pointer">
              <li>About Us</li>
              <li>Track Order</li>
              <li>Help ?</li>
            </ul>
          </div>
          <div className="md:w-1/5 lg:w-2/5 xl:w-3/6 2xl:w-3/6 flex ">
            <Search />
          </div>

          <div className="flex justify-between items-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl gap-2 md:gap-10">
            <CiHeart className="hover:scale-105 ease-linear cursor-pointer" />
            <CiShoppingCart className="hover:scale-105 ease-linear cursor-pointer" />
            <button className="px-1 py-.5  md:px-3 md:py-2 border border-black rounded-sm md:rounded-md lg:rounded-md xl:rounded-lg active:bg-black active:text-white hover:bg-gray-200 text-xs md:text-xs lg:text-sm xl:text-sm hover:scale-105">
              Login{" "}
            </button>
          </div>
          {/* <div className=" flex md:hidden justify-between items-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl ">
            <button onClick={toggleBars}>
              <HiBars3BottomRight />
            </button>
          </div> */}
        </div>
      </div>
      <div>
        <hr className="w-full h-px border-0 bg-gray-400" />
        <Dropdown />
        <hr className="w-full h-px border-0 bg-gray-400" />
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
