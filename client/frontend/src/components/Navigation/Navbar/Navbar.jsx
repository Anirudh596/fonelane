import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import { faArrowRight, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from '../Dropdown/Dropdown'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CartFloat from '../../Cart/CartFloat/CartFloat';
import WishlistPopup from '../../Wishlist/Wishlist';


function Navbar() {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
  };


  const [isWishlistOpen, setWishlistOpen] = useState(false);

  const handleWishlistToggle = () => {
    setWishlistOpen(!isWishlistOpen);
  };
  return (
  <>
  <div className=" sticky top-0 bg-white z-50">
  <div className="custom-w navbar h-[10vh] flex justify-between items-center">
    <div className="logo w-10">
      <Logo />
    </div>
    <div className="search">
      <Search />
    </div>
    <div className="top-icnos flex justify-center items-center gap-10 ">
      <button onClick={handleWishlistToggle} className="wishlist-icon cursor-pointer hover:scale-110 tranistion-all ease-in-out duration-300">
        <FontAwesomeIcon icon={faHeart} className='w-[24px] h-[24px]  text-[#EE0E10]' />
      </button>
      <button onClick={handleCartToggle}  className="cart-icon cursor-pointer hover:scale-110 tranistion-all ease-in-out duration-300">
        <FontAwesomeIcon icon={faShoppingCart} className='w-[24px] h-[24px] '/>
      </button >
      <button className="account-icon  cursor-pointer text-[18px] border-solid border-[1px] px-4 py-2 border-indigo-600 hover:border-gray-400 hover:scale-105 rounded-[37px] tranistion-all ease-in-out duration-300">
        <Link to='/signup'><h2 >Sign Up
        <FontAwesomeIcon icon={faArrowRight} className='mx-2'/>
        </h2></Link>
      </button>
    </div>
  </div>
  <hr className="h-px bg-gray-400 border-0 "></hr>
  <Dropdown />
  </div>
  
  { isCartOpen && <CartFloat isOpen={isCartOpen} onClose={handleCartToggle}/>}
  { isWishlistOpen && <WishlistPopup isWishlistOpen={isWishlistOpen} onClose={handleWishlistToggle}/>}

  </>
  )
}

export default Navbar