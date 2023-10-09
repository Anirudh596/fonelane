

function Dropdown() {
  const dropdownLabel = [

    { label: "JUST IN" },
    { label: "VERIFIED REFURBISHED" },
    { label: "STUDENT SPECIAL" },
    { label: "DEALS" },
    { label: "iPHONE" },
    { label: "ONEPLUS" },
    { label: "SAMSUNG GALAXY" },
    { label: "ACCESSORIES" },
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
              <a
                href="#"
                className="mx-2 w-full flex justify-center items-center cursor-pointer font-bold text-[6px] md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-xs"
                
              >
                <span className="mx-1">{item.label}</span>
              </a>
              
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Dropdown;
