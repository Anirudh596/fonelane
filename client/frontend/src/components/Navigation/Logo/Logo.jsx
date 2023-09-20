import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="text-[16px] md:text-[14px] lg:text-[18px] xl:text-[20px] font-bold group cursor-pointer logo flex justify-center items-center">
        <span className="text-[16px] md:text-[14px] lg:text-[18px] xl:text-[20px] ">f</span>
        <img
          src="./images/leaves.png"
          alt="Leaves Logo"
          className=" w-[16px] h-[16px] md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px] xl:w-[30px] xl:h-[30px] rotating-char"
        />
        <span className="text-[16px] md:text-[14px] lg:text-[18px] xl:text-[20px] ">n</span>
        <span className=" text-[16px] md:text-[14px] lg:text-[18px] xl:text-[20px]">
          <span className="text-[16px] md:text-[14px] lg:text-[18px] xl:text-[20px] ">e</span>lane
        </span>
      </div>
    </Link>
  );
}

export default Logo;
