import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// eslint-disable-next-line react/prop-types
function Review({className ,classNamePoints}) {
  return (
    <>
    <div className={`star flex xl:ml-5 xl:my-[5px] text-[6px] md:text-base lg:text-lg xl:text-xl text-[#ffdd00] ${className}`}>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStarHalf}/>
          <div className={`star-count text-black justify-center items-center ${classNamePoints}`}>
            <p>4.5/5</p>
          </div>
        </div>
    </>
  )
}

export default Review