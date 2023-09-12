import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Dropdown() {
  return (
    <>
    <div className="bg-gray-300">
    <ul className="flex items-center justify-center gap-5 md:gap-7 lg:gap-10 xl:gap-14 text-[8px] md:text-[14px] lg:text-[14px] xl:text-[16px] h-[32px]">
        <li className="group hover:scale-105"><a href="#"><span>All products</span>
        <FontAwesomeIcon icon={faChevronRight} className="px-1 ease-in-out duration-200 group-hover:rotate-90 "/></a></li>
        <li className="group hover:scale-105"><a href="#"><span>Iphones</span>
        <FontAwesomeIcon icon={faChevronRight} className="px-1 ease-in-out duration-200 group-hover:rotate-90 "/></a></li>
        <li className="group hover:scale-105"><a href="#"><span>AirPods</span>
        <FontAwesomeIcon icon={faChevronRight} className="px-1 ease-in-out duration-200 group-hover:rotate-90 "/></a></li>
        <li className="group hover:scale-105"><a href="#"><span>Accessories</span>
        <FontAwesomeIcon icon={faChevronRight} className="px-1 ease-in-out duration-200 group-hover:rotate-90 "/></a></li>
    </ul>
    </div>

    </>
  )
}

export default Dropdown