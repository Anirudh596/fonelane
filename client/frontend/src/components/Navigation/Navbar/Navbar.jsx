import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import { faArrowRight, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from '../Dropdown/Dropdown'


function Navbar() {
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
      <div className="wishlist-icon cursor-pointer hover:scale-110 tranistion-all ease-in-out duration-300">
        <FontAwesomeIcon icon={faHeart} className='w-[24px] h-[24px]  text-[#EE0E10]' />
      </div>
      <div className="cart-icon cursor-pointer hover:scale-110 tranistion-all ease-in-out duration-300">
        <FontAwesomeIcon icon={faShoppingCart} className='w-[24px] h-[24px] '/>
      </div>
      <button className="account-icon  cursor-pointer text-[18px] border-solid border-[1px] px-4 py-2 border-indigo-600 hover:border-gray-400 hover:scale-105 rounded-[37px] tranistion-all ease-in-out duration-300">
        <h2 >Sign Up
        <FontAwesomeIcon icon={faArrowRight} className='mx-2'/>
        </h2>
      </button>
    </div>
  </div>
  <hr className="h-px bg-gray-400 border-0 "></hr>
  <Dropdown />
  </div>
  </>
  )
}

export default Navbar