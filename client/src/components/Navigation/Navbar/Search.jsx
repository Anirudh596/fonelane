import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"; // Import useState
function Search({className, setResults}) {
  // Use state to track the focus state of the input
  const [isInputFocused, setInputFocused] = useState(false);
  const [input, setInput] = useState("");
  const fetchData = (value)=>{
        fetch(`http://52.66.77.248:1337/api/deal-of-the-day-2s?populate=*`, {
        headers: {
          Authorization: "bearer "+ "422d2e9d1a9f0707a1622e0552b49661b6e630c8d02f25c724721eedc0376e8947e98312a4adf3bf21bbc7bee43f269d1471ca84c9f927b05ed421fba03c5217ec35ecd8121e836f96e0f01fe4582de30c62aad923007ae34066f6a443dd2e554cc819db2869212bc54a139c4b28fe55de325cdf9049dd7dbf253b053c56cd14",
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