import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BackBtn from "./BackBtn/BackBtn";

function Specs({ isOpen, onClose }) {
    const popupVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      };
      const controls = useAnimation();
      const popupRef = useRef();
      

      useEffect(() => {
        if (isOpen) {
          controls.start("visible");
          const handleOutsideClick = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
              onClose();
            }
          };
    
          document.addEventListener("mousedown", handleOutsideClick);
    
          return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
          };
        } else {
          controls.start("hidden");
        }
      }, [isOpen, onClose, controls]);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 `}
      initial="hidden"
      animate={controls}
      variants={popupVariants}
      transition={{ duration: 0.2 }}
    >
         <div className="relative w-full h-full md:w-1/3 md:h-3/4" ref={popupRef}>
         <div className="flex justify-center items-center w-full h-full rounded-xl bg-white z-30 transform transition-transform ease-in-out duration-700">
         <div className="absolute top-0 right-0 m-5 flex justify-between items-center  z-50">
            <p>Technical Specification</p>
            <BackBtn func={onClose} className="text-base text-white md:text-black " />
          </div>
         </div>
         </div>
    </motion.div>
  )
}

export default Specs