import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="flex justify-center items-end w-auto h-auto">
        <img src="./images/logo 2.png" alt=""  className=" flex  items-center w-40 h-40 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-48 xl:h-48 "/>
      </div>
    </Link>
  );
}

export default Logo;
