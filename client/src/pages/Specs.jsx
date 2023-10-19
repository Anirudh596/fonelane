import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BackBtn from "../components/BackBtn/BackBtn";
import axios from "axios";
import { useParams } from "react-router-dom";

function Specs({ isOpen, onClose }) {
  const [data, setData] = useState({});
  const { id } = useParams();

    const popupVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      };
      const controls = useAnimation();
      const popupRef = useRef();
      
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://52.66.77.248:1337/api/deal-of-the-day-2s/${id}?populate=*`, {
          headers: {
            Authorization: "bearer " + "422d2e9d1a9f0707a1622e0552b49661b6e630c8d02f25c724721eedc0376e8947e98312a4adf3bf21bbc7bee43f269d1471ca84c9f927b05ed421fba03c5217ec35ecd8121e836f96e0f01fe4582de30c62aad923007ae34066f6a443dd2e554cc819db2869212bc54a139c4b28fe55de325cdf9049dd7dbf253b053c56cd14",
          },
        });
        setData(res.data.data.attributes);
        // console.log(res.data.data.attributes.baseprice);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
      

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
         <div className="top-20 z-50 md:top-10 relative w-full  h-3/4 md:w-1/3 md:h-3/4" ref={popupRef}>
         <div className="flex justify-center p-5 items-center w-full h-full rounded-xl bg-white z-30 transform transition-transform ease-in-out duration-700">
         <div className="absolute top-0  right-0 p-5 flex  md:justify-between items-center w-full  z-50">
            <p>Technical Specification</p>
            <BackBtn func={onClose} className="text-base text-white md:text-black " />
          </div>
          <div>
            {data.specs}

          </div>
         </div>
         </div>
    </motion.div>
  )
}

export default Specs