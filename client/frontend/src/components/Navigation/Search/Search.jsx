import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"; // Import useState

function Search() {
  // Use state to track the focus state of the input
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <div
      className={`w-[450px] h-[35px] text-black flex items-center x justify-center border rounded-lg overflow-hidden ${
        isInputFocused ? "border-gray-700" : "border-gray-300"
      }`}
    >
      <label htmlFor="Search-bar">
      <FontAwesomeIcon
        icon={faSearch}
        className={`ml-3 flex justify-center cursor-pointer items-center text-sm text-center ${
          isInputFocused ? "text-gray-700" : "text-gray-400"
        }`}
      />
      </label>
      
      <input
        type="text"
        className="w-[450px] h-[35px] rounded-lg px-4 py-2 focus:outline-none"
        id="Search-bar"
        name="Search-bar"
        onFocus={() => setInputFocused(true)} // Handle input focus
        onBlur={() => setInputFocused(false)} // Handle input blur
      />
    </div>
  );
}

export default Search;
