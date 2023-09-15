import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Review() {
  return (
    <>
    <div className="star flex ml-5 my-[5px] text-[#ffdd00]">
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStarHalf}/>
          <div className="star-count text-black justify-center items-center">
            <p>4.5/5</p>
          </div>
        </div>
    </>
  )
}

export default Review