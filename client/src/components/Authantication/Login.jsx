import BackBtn from "../BackBtn/BackBtn";

// eslint-disable-next-line react/prop-types
function Login({ isLogOpen, isLogClose }) {
  return (
    <div
      className={`flex justify-center items-center w-screen h-screen bg-slate-800/10 ${isLogOpen} `}
    >
      <div className="w-2/3 h-3/4 flex mx-auto ">
        <div className=" flex-1 w-full h-full background-image rounded-l-xl">
          <p className="text-lg md:text-xl z-10 text-white font-semibold m-5">
            Login/Signup
          </p>
        </div>
        <div className="flex-grow bg-white rounded-r-2xl ">
          <div className="relative">
            <BackBtn
              onClick={isLogClose}
              className={"absolute right-0 m-5 text-base "}
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center  p-5 ">
            <form action="" className="w-full p-5">
              <div className="flex flex-col justify-between items-center relative gap-72">
                <div className="div-1 w-full">
                  <label htmlFor="phone_id">Mobile Number:</label>
                  <input
                    type="tel"
                    className="w-full px-2 py-1 border-b-2 border-[#a132cd] text-sm md:text-base overflow-hidden"
                    placeholder="Mobile Number (+91-8791XXXXXX)"
                    pattern="[0-9]{10}"
                  />
                </div>
                <div className="flex-initial flex flex-col gap-5 div-2">
                  <div className="flex gap-3 ">
                    <input
                      type="checkbox"
                      name="terms"
                      id="T_C"
                      defaultChecked
                    />
                    <label htmlFor="T_C" className="text-xs">
                      I agree to the{" "}
                      <span className="text-xs font-semibold text-[#32cd92] underline cursor-pointer active:text-[#32cd32]">
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
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn{"'"}t recieve code?</p>{" "}
                      <a
                        className="flex flex-row items-center text-blue-600"
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
  );
}

export default Login;
