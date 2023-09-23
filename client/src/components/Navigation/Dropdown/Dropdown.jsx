import { useState } from "react";
import DropdownBoard from "./DropdownBoard/DropdownBoard";

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
    { label: "ALL" }, // Corrected label name
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
      <div className="mx-2 md:mx-10 py-1">
        <ul className="flex items-center justify-between transform transition-transform ease-linear duration-200 mx-auto my-1">
          {dropdownLabel.map((item, index) => (
            <li
              key={index}
              className="group hover:scale-105 relative ease-linear duration-200"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="mx-2w-full flex justify-center items-center cursor-pointer font-extrabold  text-[6px] md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
                <span className="mx-1">{item.label}</span>
              </a>
              {isOpen && activeLabel === item.label && (
                <>
                  <DropdownBoard content={labelContent[item.label]} />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
