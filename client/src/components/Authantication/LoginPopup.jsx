import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import BackBtn from "../BackBtn/BackBtn";

// eslint-disable-next-line react/prop-types
const LoginPopup = ({ isOpen, onClose }) => {
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
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50`}
      initial="hidden"
      animate={controls}
      variants={popupVariants}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-full h-full md:w-2/3 md:h-3/4" ref={popupRef}>
        <div className="flex justify-center items-center w-full h-full rounded-xl bg-white z-50 transform transition-transform ease-in-out duration-700">
          <div className="absolute top-0 right-0 m-5 z-50">
            <BackBtn func={onClose} className="text-base text-white md:text-black" />
          </div>
          <div className="w-full h-full flex flex-col md:flex-row mx-auto ">
            <div className=" md:flex-1  md:w-full md:h-full background-image  md:rounded-l-xl z-0">
              <p className="text-xl font-semibold text-white m-5">
                Login/Signup
              </p>
            </div>
            <div className="flex-grow bg-white rounded-r-2xl z-50">
              <div className="w-full h-full flex md:flex-col justify-center md:items-center p-5">
                <form action="" className="w-full p-5">
                  <div className="flex flex-col justify-between md:items-center gap-72 relative">
                    <div className="w-full">
                      <label htmlFor="phone_id">Mobile Number:</label>
                      <input
                        type="tel"
                        className="w-full px-2 py-1 border-b-2 border-[#a132cd] text-base"
                        placeholder="Mobile Number (+91-8791XXXXXX)"
                        pattern="[0-9]{10}"
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="terms"
                          id="T_C"
                          defaultChecked
                        />
                        <label htmlFor="T_C" className="text-xs">
                          I agree to the{" "}
                          <span className="text-[#32cd92] underline cursor-pointer active:text-[#32cd32]">
                            Terms & conditions
                          </span>
                        </label>
                      </div>
                      <input
                        type="submit"
                        value="Login"
                        id="logBtn"
                        name="phone_input"
                        className="bg-slate-100 w-full py-2 rounded-md cursor-pointer hover:bg-slate-200 active:bg-black active:text-white"
                      />
                    </div>
                  </div>
                </form>
                <div className="hidden">
                  <form action="" method="post">
                    <div className="flex flex-col space-y-16">
                      <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs space-x-3">
                        {[1, 2, 3, 4].map((index) => (
                          <div key={index} className="w-16 h-16">
                            <input
                              className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                              type="text"
                              name=""
                              id=""
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col space-y-5">
                        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                          <p>Didn{"'"}t receive the code?</p>
                          <a
                            className="text-blue-600"
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Resend
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const SignUp = () => {
   return (
    <>
    Hello
    </>
   ) 
}



export default LoginPopup;
