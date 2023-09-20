import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DropdownBoard from "./DropdownBoard/DropdownBoard";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState(null);

  const handleMouseEnter = (label) => {
    setIsOpen(true);
    setActiveLabel(label);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveLabel(null);
  };

  // Define content sections for each label
  const labelContent = {
    "All products": (
      <div>
        <h2>All Products</h2>
        <p>This is the content for All products.</p>
      </div>
    ),
    Iphones: (
      <div>
        <h2>Iphones</h2>
        <p>This is the content for Iphones.</p>
      </div>
    ),
    AirPods: (
      <div>
        <h2>AirPods</h2>
        <p>This is the content for AirPods.</p>
      </div>
    ),
    Accessories: (
      <div>
        <p>Airpods 2nd Genration </p>
      </div>
    ),
  };

  return (
    <>
      <div className="bg-[#f8f6ce]">
        <ul className="items-center justify-center transform transition-transform ease-linear duration-200 gap-5 md:gap-7 lg:gap-10 xl:gap-14 text-[8px] md:text-[12px] lg:text-[12px] xl:text-[14px] hidden md:flex lg:flex xl:flex md:h-[24px] lg:h-[28px] xl:h-[30px]">
          {dropdownLabel.map((item, index) => (
            <li
              key={index}
              className="group hover:scale-105 relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="flex justify-center items-center">
                <span className="mx-1">{item.label}</span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="px-1 ease-in-out duration-200 group-hover:rotate-90"
                />
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

const dropdownLabel = [
  { label: "All products" },
  { label: "Iphones" },
  { label: "AirPods" },
  { label: "Accessories" },
];

export default Dropdown;
