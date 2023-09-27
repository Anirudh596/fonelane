import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
function BackBtn({className, func}) {
    // const goBack = () => {
    //     window.history.back()
    //   };
  return (
    <div className="group ">
                <FontAwesomeIcon onClick={func}
                  icon={faX}
                  className={`ease-in-out duration-150  group-hover:scale-110  cursor-pointer ${className} `}
                />
              </div>
  )
}

export default BackBtn