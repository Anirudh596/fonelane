
function BankOffer() {
  const bankIcons = [
    "./images/image-4.png",
    "./images/image-5.png",
    "./images/image-3.png",
    "./images/image.png",
    "./images/image-1.png"
  ];

  return (
    <div className="custom-w py-4 px-5 flex justify-center items-center border-2 border-gray-400 bg-[#eeeeee] rounded-tl-xl rounded-br-xl md:rounded-tl-3xl md:rounded-br-3xl mx-5 ">
      <div className="flex md:w-1/4  justify-center items-center text-center border-r h-full border-black">
        <p className="text-[10px] md:flex items-end gap-2 md:text-base font-medium px-1">NO COST <p className="text-xs md:text-xl font-semibold font-serif">EMI ON</p></p>
      </div>
      <div className="w-full flex-1 flex gap-5 md:gap-2 justify-between items-center px-5">
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
