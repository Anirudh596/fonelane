import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <>
      <div className="text-black flex items-center justify-center">
        <div className="border rounded-[37px] overflow-hidden flex">
          <div className="flex z-10">
            <input
              type="text"
              className="rounded-[37px] px-4 py-2"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="lg:w-[80px] md:w-[80px] sm:w-[0px] rounded-[37px] px-4 py-2 border-l flex items-center justify-center bg-gray-300 text-black z-0 ml-[-40px] ">
          <button className=" px-4 z-0 ">
            <div></div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-8"/>
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
