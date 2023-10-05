import React from "react";

function BankOffer() {
  const bankIcons = [
    "./images/image-4.png",
    "./images/image-5.png",
    "./images/image-3.png",
    "./images/image.png",
    "./images/image-1.png"
  ];

  return (
    <div className="custom-w py-[-10px] flex justify-center items-center border-2 border-gray-400 bg-[#eeeeee]  mx-5 ">
      <div className=" flex  justify-center items-center text-center">
        <p className=" text-[10px] font-medium px-1">NO COST <p className="text-xs font-semibold">EMI ON</p></p>
      </div>
      <div className="w-full flex-1 flex gap-5 md:gap-8 justify-between items-center px-5">
        {bankIcons.map((icon, index) => (
          <div key={index}>
            <img src={icon} alt="" className="w-[60px] h-[] " />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BankOffer;
