import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"; // Import useState

function Search() {
  // Use state to track the focus state of the input
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <div
      className={` xl:w-full flex items-center  justify-start border rounded-sm md:rounded-lg group ${
        isInputFocused ? "border-gray-700" : "border-gray-300"
      }`}
    >
      <label htmlFor="Search-bar" className="text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-base font-thin mx-1 md:mx-5 cursor-pointer">
        <FontAwesomeIcon icon={faSearch} className=""/>
      </label>
      
      <input
        type="text"
        className="rounded-sm md:rounded-lg w-11/12 h-5 md:h-9 xl:py-2 focus:outline-none text-[8px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm"
        id="Search-bar"
        name="Search-bar" 
        placeholder="Search for Mobile, Accessories & More"
        onFocus={() => setInputFocused(true)} // Handle input focus
        onBlur={() => setInputFocused(false)} // Handle input blur
      />
    </div>
  );
}

export default Search;
