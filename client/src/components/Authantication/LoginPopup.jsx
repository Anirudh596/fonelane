import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BackBtn from "../BackBtn/BackBtn";
import axios from "axios";
import { Button, Input } from "@material-tailwind/react";
import { useAuth } from "../context/AuthContext";

const LoginPopup = ({ isOpen, onClose }) => {

  const { isLoggedIn, login } = useAuth();

  const popupVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const controls = useAnimation();
  const popupRef = useRef();
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [mobile, setMobile] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [mobileForRegistration, setMobileForRegistration] = useState(""); // State to store mobile for registration
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };


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

    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {
        mobile,
      });

      setLoginStatus(response.data.msg);

      if (response.data.success) {
        setShowOTPForm(true);
        setIsSignUp(false);
        setMobileForRegistration(mobile); // Store the mobile number for registration
      } else {
        setIsSignUp(true);
        setShowOTPForm(false);
      }
    } catch (error) {
      console.error(error);
      setLoginStatus("Error: Login failed");
    }
  };


  const handleOtpChange = (index, value) => {
    if (index >= 0 && index < otpValues.length) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (index < otpValues.length - 1 && value !== "") {
        document.getElementById(`otpInput${index + 1}`).focus();
      }
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/api/user/verify-otp", {
        mobile,
        otp: otpValues.join(""), // Combine the OTP values into a single string
      });
  
      // Handle the response from the backend
      if (response.data.success) {
        // OTP is valid, perform the necessary actions
        console.log("OTP is valid");
        login();
        onClose()
      } else {
        // OTP is invalid, display an error message or take appropriate action
        console.log("OTP is invalid");
      }
    } catch (error) {
      console.error("Error checking OTP:", error);
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
      <div className="relative w-full h-full md:w-2/4 md:h-3/4" ref={popupRef}>
        <div className="flex justify-center items-center w-full h-full rounded-xl bg-white z-30 transform transition-transform ease-in-out duration-700">
          <div className="absolute top-0 right-0 m-5 z-50">
            <BackBtn func={onClose} className="text-base text-black" />
          </div>
          <div className="w-full h-full flex flex-col md:flex-row mx-auto ">
            <div className="md:flex-1  md:w-full md:h-full background-image  md:rounded-l-xl z-0">
              <p className="text-xl font-semibold text-black m-5">
                {isSignUp ? "Signup" : "Login"}
              </p>
            </div>
            <div className="flex-grow md:w-1/5 w-full bg-white   md:rounded-r-2xl  z-30">
              <div className="w-full h-full flex md:flex-col justify-center md:items-center p-5">
                {showOTPForm ? (
                  
                    <div className="flex flex-col space-y-16">
                      <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs space-x-3">
                        {otpValues.map((value, index) => (
                          <div key={index} className="w-16 h-16">
                            <input
                              id={`otpInput${index}`}
                              className="w-full h-full flex flex-col items-center justify-center text-center mx-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                              type="text"
                              name={`otpInput${index}`}
                              maxLength="1"
                              value={value}
                              onChange={(e) => handleOtpChange(index, e.target.value)}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col space-y-5">
                        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                          <p>Didn't receive the code?</p>
                          <a
                            className="text-blue-600"
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Resend
                          </a>
                        </div>
                        <div className="flex justify-center">
                          <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 cursor-pointer"
                            onClick={handleOtpSubmit}
                          >
                            Submit OTP
                          </button>
                        </div>
                        <div className="flex justify-center mt-3">
                          <button
                            type="button"
                            onClick={() => setShowOTPForm(false)}
                            className="text-blue-500 cursor-pointer hover:underline"
                          >
                            Back to Login
                          </button>
                        </div>
                      </div>
                    </div>
                
                ) : isSignUp ? (
                  <SignUp onClose={onClose}
                    onFormClose={toggleForm}
                    mobileForRegistration={mobile} // Pass mobile number to signup
                  />
                ) : (
                  <form action="POST" className="w-full p-5">
                    <div className="flex flex-col justify-between md:items-center gap-84 md:gap-72 relative">
                      <div className="w-full">
                        
                        <Input
                          type="tel"
                          placeholder="Mobile Number (+91-8791XXXXXX)"
                          name="mobile"
                          id="mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          variant="static" label="Mobile Number"
                          size=""
                        />
                      </div>
                      <div className="flex flex-col gap-5 mt-5 md:mt-0">
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
                        <Button onClick={handleLoginClick}  size="lg">{isSignUp ? "Signup" : "Login"}</Button>
                        {loginStatus && <p>{loginStatus}</p>}
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


function SignUp({ onFormClose, mobileForRegistration, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(false); // Control OTP section visibility
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [mobile, setMobile] = useState("");
  // const {signup, error, isLoading} = useSignup()

  const { isLoggedIn, login } = useAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (index, value) => {
    if (index >= 0 && index < otpValues.length) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (index < otpValues.length - 1 && value !== "") {
        document.getElementById(`otpInput${index + 1}`).focus();
      }
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        {
          name,
          email,
          mobile: mobileForRegistration,
        }
        
        
      );
      await axios.post("http://localhost:5000/api/user/login", {
        mobile: mobileForRegistration,
      });
    setShowOtpSection(true);
      // Handle the response as needed
    } catch (error) {
      console.error(error);
    }

    
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault()

    // await signup(mobileForRegistration, name, email)
    try {
      const response = await axios.post("http://localhost:5000/api/user/verify-otp", {
        mobile: mobileForRegistration,
        otp: otpValues.join(""), // Combine the OTP values into a single string
      });
  
      // Handle the response from the backend
      if (response.data.success) {
        // OTP is valid, perform the necessary actions
        console.log("OTP is valid");
        login();
        onClose()
      } else {
        // OTP is invalid, display an error message or take appropriate action
        console.log("OTP is invalid");
      }
    } catch (error) {
      console.error("Error checking OTP:", error);
    }
  };
  


  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="relative w-full h-full">
          <div className="flex justify-center items-center w-full h-full rounded-xl bg-white z-30 transform transition-transform ease-in-out duration-700">
            <div className="w-full h-full flex flex-col md:flex-row mx-auto">
              <div className="md:flex-1 md:w-full md:h-full background-image md:rounded-l-xl z-0">
                <p className="text-xl font-semibold text-white m-5">Signup</p>
              </div>
              <div className="flex-grow bg-white rounded-r-2xl z-30">
                <div className="w-full h-full flex md:flex-col justify-center md:items-center p-5">
                  <form className="w-full p-5">
                    {showOtpSection ? (
                      // Only render the OTP section when showOtpSection is true
                      <div>
                        <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs space-x-3">
                          {otpValues.map((value, index) => (
                            <div key={index} className="w-16 h-16">
                              <input
                                id={`otpInput${index}`}
                                className="w-full h-full flex flex-col items-center justify-center text-center mx-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                type="text"
                                name={`otpInput${index}`}
                                maxLength="1"
                                value={value}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col space-y-5">
                          <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                            <p>Didn't receive the code?</p>
                            <a
                              className="text-blue-600"
                              href="http://"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Resend
                            </a>
                          </div>
                          <div className="flex justify-center">
                          <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 cursor-pointer"
                            onClick={handleOtpSubmit}
                          >
                            Submit OTP
                          </button>
                          </div>
                          <div className="flex justify-center mt-3">
                            <button
                              type="button"
                              onClick={() => setShowOtpSection(false)}
                              className="text-blue-500 cursor-pointer hover:underline"
                            >
                              Back to Login
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Render name and email inputs when showOtpSection is false
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
                    )}
                    <button
                      type="submit"
                      value="Signup"
                      id="signupBtn"
                      className="bg-slate-100 w-full py-2 rounded-md cursor-pointer hover-bg-slate-200 active-bg-black active-text-white"
                      onClick={handleSignUpSubmit}
                      // disabled={isLoading}
                    >
                      Signup
                    </button>
                    {/* {error && <div className="error">{error}</div>} */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






