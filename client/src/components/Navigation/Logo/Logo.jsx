import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="flex justify-center items-end w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-44 xl:h-44">
        <img src="./images/logo 2.png" alt=""  className=" flex justify-start items-center w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-44 xl:h-44 "/>
      </div>
    </Link>
  );
}

export default Logo;
