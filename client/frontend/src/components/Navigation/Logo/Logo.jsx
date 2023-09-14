import { Link } from "react-router-dom"

function Logo() {
  return (
  <>
  <Link to='/'><div href="#" className="text-[20px] font-bold group cursor-pointer logo" >f<img src="./images/leaves.png" alt="" className="w-[30px] h-[30px] bg-auto rotating-char"/>n<span className="text-[#87ff83] ease-in-out duration-200 group-hover:text-[34px] "><span>e</span></span>lane</div>
  </Link>
</>
    
  )
}

export default Logo