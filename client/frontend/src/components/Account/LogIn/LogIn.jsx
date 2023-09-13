import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LogIn() {
  return (
    <>
      <div className="flex h-[100vh] w-full relative ">
        <div className="flex-1 background-image">
          <div className="h-1/12  p-5">
            <div
              href="#"
              className="text-[20px] font-bold group cursor-pointer logo text-white"
            >
              f
              <img
                src="./images/leaves.png"
                alt=""
                className="w-[30px] h-[30px] bg-auto rotating-char"
              />
              n
              <span className="text-[#87ff83] ease-in-out duration-200 group-hover:text-[34px] ">
                <span>e</span>
              </span>
              lane
            </div>
          </div>
          <div className="p-20 w-full flex flex-col justify-end text-right items-center text-white gap-5">
            <p className="w-full text-[5rem] text-right font-bold">Hi There!</p>
            <p className="w-full text-right text-[1.4em]">
              Welcome or Welcome back.
            </p>
            <p className="w-full text-right text-[1.2em]"> New to Fonelane ?</p>
            <div className="relative w-full ">
              <button className="ease-in-out duration-200 absolute right-0 px-9 py-2 text-[16px] bg-[#f6b93b] border rounded-[5px] border-black border-b-4 border-r-4 text-black hover:border-b-[1px] hover:border-r-[1px] active:bg-[#edf7f6] active:border-white">
                Create an Account
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex-col">
          <div className="h-1/12 p-5 w-full">
            <div className="relative  group ">
              <FontAwesomeIcon
                icon={faX}
                className="ease-in-out duration-150 absolute right-5 text-[20px] group-hover:scale-110  cursor-pointer group-hover:border group-hover:border-black group-hover:rounded-full p-2 active:bg-slate-200 active:border-gray-600"
              />
            </div>
          </div>
          <div className="h-full"></div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
