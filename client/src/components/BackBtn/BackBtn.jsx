import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackBtn() {
    const goBack = () => {
        window.history.back()
      };
  return (
    <div className="group ">
                <FontAwesomeIcon onClick={goBack}
                  icon={faX}
                  className="ease-in-out duration-150 text-[20px] group-hover:scale-110  cursor-pointer "
                />
              </div>
  )
}

export default BackBtn