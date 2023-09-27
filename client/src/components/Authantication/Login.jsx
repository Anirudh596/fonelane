// import { useEffect } from "react";
// import BackBtn from "../BackBtn/BackBtn";

// eslint-disable-next-line react/prop-types
function Login({ isLogOpen, onLogClose }) {
  // useEffect(() => {
  //   const handleDocumentClick = (e) => {
  //     if (isLogOpen) {
  //       if (!e.target.closest(".cart-container")) {
  //         onLogClose();
  //       }
  //     }
  //   };

  //   return () => {
  //     document.removeEventListener("mousedown", handleDocumentClick);
  //   };
  // }, [isLogOpen, onLogClose]);

  return (
    <div
      className={` flex justify-center items-center w-screen h-screen   bg-white z-50 transform transition-transform  ease-in-out duration-700 `}
    >
      <div className="w-2/3 h-3/4 flex mx-auto ">
        <div className=" flex-1 w-full h-full background-image rounded-l-xl">
          <p className="text-lg md:text-xl z-10 text-white font-semibold m-5">
            Login/Signup
          </p>
        </div>
        <div className="flex-grow bg-white rounded-r-2xl ">
          <div className="relative">
            
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center  p-5 ">
            <form action="" className="w-full p-5">
              {/* Your form content */}
            </form>
            <div className="hidden">
              <form action="" method="post">
                {/* Additional form content */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
