import { Link } from "react-router-dom";

function Dropdown() {
  const dropdownLabel = [
    { label: "JUST IN", link: "/justin", class: "scale-animate" },
    { label: "VERIFIED REFURBISHED", link: "/deals" },
    { label: "STUDENT SPECIAL", link: "/deals" },
    { label: "DEALS", link: "/deals" },
    { label: "iPHONE", link: "/iphones" },
    { label: "ONEPLUS", link: "/deals" },
    { label: "SAMSUNG GALAXY", link: "/deals" },
    { label: "ACCESSORIES", link: "/deals" },
  ];

  return (
    <>
      <div className="mx-2 md:mx-10 py-1 z-50">
        <ul className="flex items-center justify-between transform transition-transform ease-linear duration-200 mx-auto my-0.5 md:my-1">
          {dropdownLabel.map((item, index) => (
            <li
              key={index}
              className="group hover:scale-105 relative ease-linear duration-200"
            >
              <Link to={item.link}>
                <a
                  href="#"
                  className="mx-2 w-full flex justify-center items-center cursor-pointer font-semibold text-[6px] md:text-[11px] "
                >
                  <span
                    className={`mx-1 ${item.class} ${
                      item.label === "JUST IN" ? "scale-animation" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
