// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="">
        <ul className="flex items-center justify-between transform transition-transform ease-linear duration-200 mx-16 my-1">
          {dropdownLabel.map((item, index) => (
            <li
              key={index}
              className="group hover:scale-105 relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="w-full flex justify-center items-center cursor-pointer  text-[10px] md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
                <span className="mx-1">{item.label}</span>
              </a>
              {/* {isOpen && activeLabel === item.label && (
                <>
                <DropdownBoard content={labelContent[item.label]} />
                
                </>

              )} */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const dropdownLabel = [
  { label: "All " },
  { label: "Verified Refurbished" },
  { label: "Student Special" },
  { label: "Deals" },
  { label: "Iphone" },
  { label: "OnePlus" },
  { label: "Samsung Galaxy" },
  { label: "mi" },
  { label: "Accessories" },
];

export default Dropdown;
