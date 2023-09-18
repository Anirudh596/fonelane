import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="text-20px font-bold group cursor-pointer logo flex">
        <span>f</span>
        <img
          src="./images/leaves.png"
          alt="Leaves Logo"
          className="w-[30px] h-[30px] bg-auto rotating-char"
        />
        <span>n</span>
        <span className="text-87ff83 ease-in-out duration-200 group-hover:text-34px">
          <span>e</span>lane
        </span>
      </div>
    </Link>
  );
}

export default Logo;
