import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="w-[100px] h-[100px] flex justify-center items-center">
        <img src="./images/logo 2.png" alt="" />
      </div>
    </Link>
  );
}

export default Logo;
