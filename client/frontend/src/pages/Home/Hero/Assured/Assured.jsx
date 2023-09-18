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
    <div className="w-full bg-[#fdfded]">
      <div className="flex justify-between items-center my-14">
        {assuredData.map((item, index) => (
          <Block key={index} imgSrc={item.imgSrc} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default Assured;
