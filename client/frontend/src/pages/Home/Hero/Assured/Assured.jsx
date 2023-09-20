import Block from "./Assured_blocks/Block"; // Ensure correct import path

const assuredData = [
  {
    imgSrc: "./images/shield.png",
    text: "12 month warranty",
  },
  {
    imgSrc: "./images/rupee.png",
    text: "No cost Emi",
  },
  {
    imgSrc: "./images/cash-on-delivery.png",
    text: "Cash On Delivery",
  },
  {
    imgSrc: "./images/100-percent.png",
    text: "100% Genuine Products",
  },
  {
    imgSrc: "./images/battery.png",
    text: "90% Battery Health or Better",
  },
  {
    imgSrc: "./images/lowest-price.png",
    text: "Lowest Price",
  },
  {
    imgSrc: "./images/lowest-price.png",
    text: "Free and Secure Shipping",
  },
];

function Assured() {
  return (
    <div className="w-full ">
      <div className="  mx-3 md:py-5 lg:py-8 xl:py-10 md:mx-5 lg:mx-8 xl:mx-10">
        <div className="flex justify-between items-center gap-10 my-10 text-[6px] md:text-base lg:text-lg xl:text-xl">
        {assuredData.map((item, index) => (
          <Block key={index} imgSrc={item.imgSrc} text={item.text}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Assured;
