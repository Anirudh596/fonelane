import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className=" flex justify-center items-center">
        <img src="./images/logo 2.png" alt="" className="w-10 h-10 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-24 xl:h-24 "/>
      </div>
    </Link>
  );
}

export default Logo;
