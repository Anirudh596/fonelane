import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="flex justify-center items-end w-auto h-auto">
        <img src="./images/logo 2.png" alt=""  className=" flex  items-center w-40 h-40 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 "/>
      </div>
    </Link>
  );
}

export default Logo;
