import { faEye, faSlash, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Navigation/Logo/Logo";

function SignUp() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const goBack = () => {
    window.history.back()
  };
  return (
    <>
      <div className="flex h-screen w-full relative">
        <div className="flex-1 background-image h-full">
        <div className="h-1/6  p-5 text-white">
            <Logo  />
        </div>
          <div className="h-5/6 pb-32 pr-20  w-full flex flex-col justify-center text-center items-center text-white gap-5">
            <p className="w-full text-[7rem] text-right font-bold">Hi There!</p>
            <p className="w-full text-right text-[2rem]">
              Welcome to Fonelane. Quickly make an account and continue browsing.
            </p>
            <p className="w-full text-right text-[1.6em]">Already have an account ?</p>
            <div className="relative w-full ">
              <Link to="/login"><button className="ease-in-out duration-200 absolute right-0 px-9 py-2 text-[16px] bg-[#f6b93b] border rounded-[5px] border-black border-b-4 border-r-4 text-black hover:border-b-[1px] hover:border-r-[1px] active:bg-[#edf7f6] active:border-white">
                Log In
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex-col">
          <div className="h-full">
          <div className="p-5 w-full">
            <div className="relative  group ">
              <FontAwesomeIcon onClick={goBack}
                icon={faX}
                className="ease-in-out duration-150 absolute right-5 text-[20px] group-hover:scale-110  cursor-pointer group-hover:border group-hover:border-black group-hover:rounded-full p-2 active:bg-slate-200 active:border-gray-600"
              />
            </div>
          </div>
          <div className="h-[90vh] flex justify-center items-center">
            <div className=" flex flex-col justify-center items-center gap-2 w-[420px]">
              <p className="title  text-3xl font-semibold text-[#f]">Sign Up</p>
              <p>Continues your browsing in just a minute!</p>
              <div className="flex border border-black rounded-[4px] cursor-pointer w-full bg-[#f8ffdd] active:bg-[#edff9d]">
                <div className="flex justify-center items-center  px-[100px] py-3 gap-2">
                  <span>
                    <img
                      src="./images/google.png"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                  </span>
                  <p>continue with Google</p>
                </div>
              </div>
              <div className="flex border border-black rounded-[4px] cursor-pointer w-full bg-[#f9ffdd] active:bg-[#edff9d]">
                <div className="flex justify-center items-center  px-[100px] py-3 gap-2">
                  <FontAwesomeIcon
                    className="text-[24px] text-[#1877f2]"
                    icon={faFacebookF}
                  />{" "}
                  <p>continue with Facebook</p>
                </div>
              </div>
              <div className="w-[420px] flex justify-center items-center my-2">
                <hr className="w-1/2 h-px bg-gray-500 border-0" />
                <p className="p-3 text-[16px]">or</p>
                <hr className="w-1/2 h-px bg-gray-500 border-0" />
              </div>
              <div className="flex flex-col relative w-full">
                <input
                  type="email"
                  placeholder="Email Or Username"
                  className="w-full transition ease-in-out delay-200 peer text-center py-3 px-[110px] border rounded-[5px] border-black bg-[#f9ffdd] focus:bg-[#edff9d] placeholder:text-black"
                  id="email"
                  name="log_email"
                />
                <p className=" relative mt-2 hidden peer-invalid:block text-red-600 text-sm">
                  Please provide a valid email address.
                </p>
              </div>
              {/* <input type="password" placeholder="Password" className="text-center py-3 px-[110px] border rounded-[5px] border-black" id="password" name="log_password"/> */}
              
              <div className="relative flex justify-center items-center w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Set Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="placeholder:text-black  border border-black py-3 text-center px-[110px] rounded-[5px] bg-[#f9ffdd] focus:bg-[#edff9d] w-[420px]"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-5 py-2 text-black rounded-[5px] "
                >
                  {showPassword ? (
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faSlash}
                        className="absolute mr-[2px] mt-[2px]"
                      />
                      <FontAwesomeIcon icon={faEye} />
                    </div>
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </button>
              
              </div>
              <div className="relative flex justify-center items-center w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repeat Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="placeholder:text-black  border border-black py-3 text-center px-[110px] rounded-[5px] bg-[#f9ffdd] focus:bg-[#edff9d] w-[420px]"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 px-5 py-2 text-black rounded-[5px] "
                >
                  {showConfirmPassword ? (
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faSlash}
                        className="absolute mr-[2px] mt-[2px]"
                      />
                      <FontAwesomeIcon icon={faEye} />
                    </div>
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </button>
              
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center gap-2">
                  <input
                    type="checkbox"
                    id="rem-check"
                    name="Rem-check"
                    value="Remember me"
                    className="peer"
                  />
                  <label
                    htmlFor="rem-check"
                    className="peer-checked:text-[#44ef00]"
                  >
                    Remember me
                  </label>
                </div>
                <p className="cursor-pointer opacity-80 underline text-[16px] hover:scale-105 active:opacity-100">
                  Forgot Password?
                </p>
              </div>
              <div className="w-full">
                <div className="flex justify-start items-center gap-3">
                  <input type="checkbox" id="term-box" value="terms"  required/>
                  <label htmlFor="term-box"> I accept <span className="hover:text-blue-500 underline ">Terms and condtions*</span> of fonelane</label>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <input type="checkbox" id="privacy-box" value="privacy"  required/>
                  <label htmlFor="privacy-box"> I accept <span className="hover:text-blue-500 underline ">Privacy Policies</span> of fonelane</label>
                </div>
              </div>
              <div className="flex justify-center items-center w-full ">
              <button className="ease-in-out duration-200 w-full right-0 px-9 py-2 text-[16px] bg-[#f6b93b] border rounded-[5px] border-black border-b-4 border-r-4 text-black hover:border-b-[1px] hover:border-r-[1px] active:bg-[#edf7f6] active:border-white">
                Sign Up
              </button>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
