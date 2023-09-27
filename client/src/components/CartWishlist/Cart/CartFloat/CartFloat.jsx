import { useEffect } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../../../DropMenu/DropdownMenu";

// eslint-disable-next-line react/prop-types
function CartFloat({ isOpen, onClose }) {
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (isOpen) {
        // Check if the click occurred outside of the cart
        if (!e.target.closest(".cart-container")) {
          onClose();
        }
      }
    };

    // Add the event listener when the component mounts
    // document.addEventListener('mousedown', handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isOpen, onClose]);

  // ... rest of your Cart component
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-white z-50 transform transition-transform  ease-in-out duration-700 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Your cart content goes here */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

        <Link to="/cart">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">
            Go to Cart
          </button>
        </Link>
        <DropdownMenu />
      </div>
    </>
  );
}

export default CartFloat;
