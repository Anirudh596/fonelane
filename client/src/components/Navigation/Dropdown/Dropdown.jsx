import { useState } from "react";
import {  HiBars3BottomRight } from "react-icons/hi2";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState(null);

  const handleMouseEnter = (label) => {
    setIsOpen(label === "All"); // Open the dropdown only if the label is "All"
    setActiveLabel(label);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveLabel(null);
  };

  // Define content sections for each label
  const labelContent = {
    "All": (
      <div>
        <h2>All Products</h2>
        <p>This is the content for All products.</p>
      </div>
    ),
    // Add content for other labels if needed
  };

  const dropdownLabel = [
    { label: "VERIFIED REFURBISHED" },
    { label: "STUDENT SPECIAL" },
    { label: "DEALS" },
    { label: "iPHONE" },
    { label: "ONEPLUS" },
    { label: "SAMSUNG GALAXY" },
    { label: "MI" },
    { label: "VIVO" },
    { label: "OPPO" },
    { label: "ACCESSORIES" },
  ];

  return (
    <>
      <div className="mx-2 md:mx-10  py-1 z-50">
        <ul className="flex items-center justify-between transform transition-transform ease-linear duration-200 mx-auto my-0.5 md:my-1">
          <button className="hover:scale-110 font-bold text-[6px] md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-xs flex justify-center items-center "><HiBars3BottomRight className="flex ease-linear duration-400 md:text-[12px] lg:text-[14px] xl:text-xl 2xl:text-base"/> All</button>

          {dropdownLabel.map((item, index) => (
            <li
              key={index}
              className="group hover:scale-105 relative ease-linear duration-200"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="mx-2 w-full flex justify-center items-center cursor-pointer font-bold text-[6px] md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-xs">
                <span className="mx-1">{item.label}</span>
              </a>
              {isOpen && activeLabel === item.label && (
                <DropdownBoard content={labelContent[item.label]} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function DropdownBoard({ content }) {
  return (
    <div className="absolute top-3.5 flex justify-center z-50 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-2 px-4">{content}</div>
    </div>
  );
}

export default Dropdown;
