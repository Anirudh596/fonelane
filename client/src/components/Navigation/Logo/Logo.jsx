import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="flex justify-center items-center">
        <img src="./images/logo2.png" alt=""  className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-28 xl:h-24 "/>
      </div>
    </Link>
  );
}

export default Logo;
