import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"; // Import useState

// eslint-disable-next-line react/prop-types
function Search({className}) {
  // Use state to track the focus state of the input
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <div
      className={`w-full  flex items-center mx-5   justify-start border rounded-md md:rounded-lg group ${className} ${
        isInputFocused ? "border-gray-700" : "border-gray-300"
      }`}
    >
      
      <input
        type="text"
        className=" mx-2  py-2  md:rounded-lg w-full md:w-11/12 md:h-9  md:py-2 focus:outline-none text-xs md:text-sm "
        id="Search-bar"
        name="Search-bar" 
        placeholder="What are you looking for?"
        onFocus={() => setInputFocused(true)} // Handle input focus
        onBlur={() => setInputFocused(false)} // Handle input blur
      />
      <label htmlFor="Search-bar" className="text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-base font-thin mx-1 md:mx-5 cursor-pointer">
        <FontAwesomeIcon icon={faSearch} />
      </label>
    </div>
  );
}

export default Search;
