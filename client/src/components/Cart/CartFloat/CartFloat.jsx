import { useEffect } from "react";
import BackBtn from "../../BackBtn/BackBtn";
import ProductCard from "../../ProductCard/ProductCard";

// eslint-disable-next-line react/prop-types
function CartFloat({ isOpen, onClose }) {
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (isOpen) {
        if (!e.target.closest(".cart-container")) {
          onClose();
        }
      }
    };

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isOpen, onClose]);
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-white z-50 transform transition-transform  ease-in-out duration-700 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2>Your Cart</h2>
          <BackBtn func={onClose} className={"text-base"} />
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default CartFloat;
