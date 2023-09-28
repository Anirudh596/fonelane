import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BackBtn from "../BackBtn/BackBtn";
import SignupPopup from "./SignUp";
import axios from "axios";

const LoginPopup = ({ isOpen, onClose }) => {
  const popupVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };


  const controls = useAnimation();
  const popupRef = useRef();
  const [otpValues, setOtpValues] = useState(["", "", "", ""]); // State to manage OTP input values
  const [showOTPForm, setShowOTPForm] = useState(false); // State to manage OTP form visibility
  const [mobile, setMobile] = useState('');

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

  const handleLoginClick = async (e) => {
    e.preventDefault();
    // Add logic here to verify the mobile number and show OTP form
    try {
      await axios.post("http://localhost:5000/api/user/all-users/", {
        mobile
      })
      .then(res=>{
        if(res.data === "exist"){
          console.log("mobile number exist");
        }else{
          console.log("mobile number doesnt exist");
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e);
      })
    } catch (error) {
      console.log(error);
    }
    setShowOTPForm(true);
  };

  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Move focus to the next input box if available
    if (index < 3 && value !== "") {
      document.getElementById(`otpInput${index + 1}`).focus();
    }
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 `}
      initial="hidden"
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
                Login/Signup
              </p>
            </div>
            <div className="flex-grow bg-white rounded-r-2xl z-30">
              <div className="w-full h-full flex md:flex-col justify-center md:items-center p-5">
                {showOTPForm ? (
                  <form action="" method="post">
                    <div className="flex flex-col space-y-16">
                      <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs space-x-3">
                        {otpValues.map((value, index) => (
                          <div key={index} className="w-16 h-16">
                            <input
                              id={`otpInput${index}`}
                              className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                              type="text"
                              name={`otpInput${index}`}
                              maxLength="1" // Limit input length to 1 character
                              value={value}
                              onChange={(e) => handleOtpChange(index, e.target.value)}
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
                ) : (
                  <form action="POST" className="w-full p-5">
                    <div className="flex flex-col justify-between md:items-center gap-72 relative">
                      <div className="w-full">
                        <label htmlFor="phone_id">Mobile Number:</label>
                        <input
                          type="tel"
                          className="w-full px-2 py-1 border-b-2 border-[#a132cd] text-base"
                          placeholder="Mobile Number (+91-8791XXXXXX)"
                          pattern="[0-9]{10}" name="mobile"
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
                        <button
                          onClick={handleLoginClick}
                          className="bg-slate-100 w-full py-2 rounded-md cursor-pointer hover:bg-slate-200 active:bg-black active:text-white"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPopup;


// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import BackBtn from "../BackBtn/BackBtn";
// import SignupPopup from "./SignUp";
// import axios from "axios";

// const LoginPopup = ({ isOpen, onClose }) => {
//   const popupVariants = {
//     hidden: { opacity: 0, scale: 0 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   const controls = useAnimation();
//   const popupRef = useRef();
//   const [otpValues, setOtpValues] = useState(["", "", "", ""]);
//   const [showOTPForm, setShowOTPForm] = useState(false);
//   const [mobile, setMobile] = useState("");
//   const [isUserExists, setIsUserExists] = useState(false); // State to track if the user exists

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (popupRef.current && !popupRef.current.contains(e.target)) {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       controls.start("visible");
//       document.addEventListener("mousedown", handleOutsideClick);
//     } else {
//       controls.start("hidden");
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [isOpen, onClose, controls]);

//   const handleLoginClick = async (e) => {
//     e.preventDefault();
//     try {
//       // Fetch the list of users from the API
//       const response = await axios.get("http://localhost:5000/api/user/all-users");

//       // Check if any user has the specified mobile number
//       const userExists = response.data.some((user) => user.mobile === mobile);

//       if (userExists) {
//         setIsUserExists(true);
//         // You can proceed to show the OTP form or take further actions
//         setShowOTPForm(true);
//       } else {
//         setIsUserExists(false);
//         console.log("Mobile number doesn't exist");
//         // Handle the case where the mobile number doesn't exist
//       }
//     } catch (error) {
//       console.error(error);
//       alert("An error occurred");
//     }
//   };

//   const handleOtpChange = (index, value) => {
//     const newOtpValues = [...otpValues];
//     newOtpValues[index] = value;
//     setOtpValues(newOtpValues);

//     if (index < 3 && value !== "") {
//       document.getElementById(`otpInput${index + 1}`).focus();
//     }
//   };

//   return (
//     <motion.div
//       className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 `}
//       initial="hidden"
//       animate={controls}
//       variants={popupVariants}
//       transition={{ duration: 0.2 }}
//     >
//       <div className="relative w-full h-full md:w-2/3 md:h-3/4" ref={popupRef}>
//         <div className="flex justify-center items-center w-full h-full rounded-xl bg-white z-30 transform transition-transform ease-in-out duration-700">
//           <div className="absolute top-0 right-0 m-5 z-50">
//             <BackBtn func={onClose} className="text-base text-white  md:text-black " />
//           </div>
//           <div className="w-full h-full flex flex-col md:flex-row mx-auto ">
//             <div className=" md:flex-1  md:w-full md:h-full background-image  md:rounded-l-xl z-0">
//               <p className="text-xl font-semibold text-white m-5">
//                 Login/Signup
//               </p>
//             </div>
//             <div className="flex-grow bg-white rounded-r-2xl z-30">
//               <div className="w-full h-full flex md:flex-col justify-center md:items-center p-5">
//                 {showOTPForm ? (
//                   <form action="" method="post">
//                     {/* OTP form content */}
//                   </form>
//                 ) : (
//                   <form action="POST" className="w-full p-5">
//                     <div className="flex flex-col justify-between md:items-center gap-72 relative">
//                       <div className="w-full">
//                         <label htmlFor="phone_id">Mobile Number:</label>
//                         <input
//                           type="tel"
//                           className="w-full px-2 py-1 border-b-2 border-[#a132cd] text-base"
//                           placeholder="Mobile Number (+91-8791XXXXXX)"
//                           // pattern="[0-9]{10}"
//                           name="mobile"
//                           onChange={(e) => setMobile(e.target.value)}
//                         />
//                       </div>
//                       <div className="flex flex-col gap-5">
//                         <div className="flex items-center gap-3">
//                           <input
//                             type="checkbox"
//                             name="terms"
//                             id="T_C"
//                             defaultChecked
//                           />
//                           <label htmlFor="T_C" className="text-xs">
//                             I agree to the{" "}
//                             <span className="text-[#32cd92] underline cursor-pointer active:text-[#32cd32]">
//                               Terms & conditions
//                             </span>
//                           </label>
//                         </div>
//                         <button
//                           onClick={handleLoginClick}
//                           className="bg-slate-100 w-full py-2 rounded-md cursor-pointer hover:bg-slate-200 active:bg-black active:text-white"
//                         >
//                           Login
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 )}
//                 {isUserExists && (
//                   <div className="text-red-500">
//                     Mobile number already exists. Please proceed with OTP.
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default LoginPopup;
