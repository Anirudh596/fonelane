import  { useState } from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import {  faHeart,  faUser } from '@fortawesome/free-regular-svg-icons';
import {  faShoppingCart, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from '../Dropdown/Dropdown';
import { Link } from 'react-router-dom';
import CartFloat from '../../Cart/CartFloat/CartFloat';
import WishlistPopup from '../../Wishlist/Wishlist';

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);

  return (
    <>
      <div className="sticky top-0 bg-white z-50">
        <div className="custom-w navbar h-[55px] flex justify-between items-center">
          <div className=' flex  justify-between  gap-10'>
          <Logo />
          <ul className=' list-none flex justify-between gap-3 items-center'>
            <Link><li className='text-[14px]'>About Us</li></Link>
            <Link><li className='text-[14px]'>Contact Us</li></Link>
          </ul>
          </div>
          <div className="top-icnos flex justify-center items-center gap-10">
          <Search />
            <button onClick={toggleWishlist} className="icon-button">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </button>
            <button onClick={toggleCart} className="icon-button">
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            </button>
            <button className="icon-button">
              <Link to="/signup">
                <FontAwesomeIcon icon={faUser} className='text-xl'/>
              </Link>
            </button>
          </div>
        </div>
        <hr className="h-px bg-gray-400 border-0" />
        <Dropdown />
      </div>

      {isCartOpen && <CartFloat isOpen={isCartOpen} onClose={toggleCart} />}
      {isWishlistOpen && <WishlistPopup isWishlistOpen={isWishlistOpen} onClose={toggleWishlist} />}
    </>
  );
}

export default Navbar;
