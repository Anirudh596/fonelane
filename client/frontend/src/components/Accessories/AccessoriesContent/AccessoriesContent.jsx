import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function AccessoriesContent() {
  return (
    <>
    <div className="flex-col-reverse justify-center items-center ">
        <div className="flex justify-center items-center p-5">
            <img src="./images/air.jpg" alt="" className="w-[220px] h-[200px]"/>
        </div>
        <div className="px-5">
            <p className="title w-full text-inherit text-[18px] font-semibold" >Airpods 2nd Generation</p>
            <p className="title w-full text-inherit flex gap-5 text-[20px] font-medium justify-center items-center" >₹9,999 <p className="flex text-[16px] gap-1 font-normal">M.R.P: <p className="line-through">24,999</p></p></p>
        
        </div>
        <div className="star flex w-full justify-center items-center ml-5  text-[#ffdd00]">
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStarHalf}/>
          <div className="star-count text-black justify-center items-center">
            <p>4.5/5</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default AccessoriesContent