
function BankOffer() {
  const bankIcons = [
    "./images/image-4.png",
    "./images/image-5.png",
    "./images/image-3.png",
    "./images/image.png",
    "./images/image-1.png"
  ];

  return (
    <div className="custom-w md:my-4 px-2 flex justify-center items-center border-2 border-gray-400 bg-[#eeeeee] rounded-tl-3xl rounded-br-3xl   ">
      <div className="flex md:w-1/4  justify-center items-center text-center border-r h-full border-black">
        <p className="text-[10px] md:flex items-end gap-2 md:text-base font-medium px-1">NO COST <p className="text-xs md:text-xl font-semibold font-serif">EMI ON</p></p>
      </div>
      <div className="w-full flex-1 flex gap-1 md:gap-2 justify-between items-center px-5">
        {bankIcons.map((icon, index) => (
          <div key={index}>
            <img src={icon} alt="" className="h-[80px] w-[80px] md:w-[120px] md:h-[120px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BankOffer;
