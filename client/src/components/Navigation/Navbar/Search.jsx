import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"; // Import useState
function Search({className, setResults}) {
  // Use state to track the focus state of the input
  const [isInputFocused, setInputFocused] = useState(false);
  const [input, setInput] = useState("");
  const fetchData = (value)=>{
        fetch(`https://fonelane-cms.onrender.com/api/deal-of-the-day-2s?populate=*`, {
        headers: {
          Authorization: "bearer "+ "e651485cca3084579203f4ed9ed98fb25545898e05b1b3b59deec607f910db3ec242a02bd4ed43ffd6fb5361c3c3b1d5385ca72ea12ab33634728354e9f8d9df08ce60b9e14993483ecaddf6e8e018201a95be71cb740be3546489fa075944959a9870e3c1dba157b1bfa83",
        }
      }
      ).then((response) => response.json()).then((json) => {
        const results = (json.data).filter((user) => {
          return value && user.attributes && user.attributes.title && user.attributes.title.toLowerCase().includes(value)
        })
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
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
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <label htmlFor="Search-bar" className="text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-base font-thin mx-1 md:mx-5 cursor-pointer">
        <FontAwesomeIcon icon={faSearch} />
      </label>
    </div>
  );
}
export default Search;
// .then((response) => response.json()).then((json) => {
//   const results = json.filter((user) => {
//     return user && user.name && user.name.toLowerCase().includes(value)
//   });
//   console.log(results);
// });