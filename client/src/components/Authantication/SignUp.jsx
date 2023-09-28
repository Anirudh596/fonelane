import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BackBtn from "../BackBtn/BackBtn";

const SignUp = ({ isOpen, onClose }) => {
  const popupVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const controls = useAnimation();
  const popupRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
      controls.start("visible");
    }
  }, [isOpen, onClose, controls]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can perform further validation or submit data to your server here
    console.log("Name:", name);
    console.log("Email:", email);
    
    // Close the signup popup
    onClose();
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 `}
      initial="visible"
      animate={controls}
      variants={popupVariants}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-full h-full md:w-2/3 md:h-3/4" ref={popupRef}>
        <div className="flex justify-center items-center w-full h-full rounded-xl bg-white z-30 transform transition-transform ease-in-out duration-700">
          <div className="absolute top-0 right-0 m-5 z-50">
            <BackBtn func={onClose} className="text-base text-white  md:text-black " />
          </div>
          <div className="w-full h-full flex flex-col md:flex-row mx-auto ">
            <div className=" md:flex-1  md:w-full md:h-full background-image  md:rounded-l-xl z-0">
              <p className="text-xl font-semibold text-white m-5">
                Signup
              </p>
            </div>
            <div className="flex-grow bg-white rounded-r-2xl z-30">
              <div className="w-full h-full flex md:flex-col justify-center md:items-center p-5">
                <form onSubmit={handleSubmit} className="w-full p-5">
                  <div className="flex flex-col gap-72">
                    <div className="flex flex-col gap-10">
                    <div className="w-full">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-2 py-1 border-b-2 border-[#a132cd] text-base"
                        placeholder="Your Name"
                        value={name}
                        onChange={handleNameChange}
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-2 py-1 border-b-2 border-[#a132cd] text-base"
                        placeholder="Your Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                    </div>
                    </div>
                    <input
                      type="submit"
                      value="Signup"
                      id="signupBtn"
                      name="signupBtn"
                      className="bg-slate-100 w-full py-2 rounded-md cursor-pointer hover:bg-slate-200 active:bg-black active:text-white"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
