import { Block, BlockText} from "./Assured_blocks/Block"; // Ensure correct import path

const assuredData = [
  {
    imgSrc: "./images/shield.png",
     
 },
  {
    imgSrc: "./images/rupee.png",
     
 },
  {
    imgSrc: "./images/cash-on-delivery.png",
     
 },
  {
    imgSrc: "./images/100-percent.png",
     
  },
  {
    imgSrc: "./images/battery.png",
     
  },
  {
    imgSrc: "./images/lowest-price.png",
  },
     
 {
    imgSrc: "./images/shipping.png",
     
  },
];
const assuredText = [
  {
    text: "12 Month Warranty",
     
 },
  {
    text: "",
     
 },
  {
    text: "",
     
 },
  {
    text: "",
     
  },
  {
    text: "",
     
  },
  {
    text: "",
  },
     
 {
    text: "",
     
  },
];

function Assured() {
  return (
    <div className="w-full ">
      <div className=" ">
        <div className="flex justify-between items-center  text-[6px] md:text-base lg:text-lg xl:text-xl">
        {assuredData.map((item, index) => (
          <Block key={index} imgSrc={item.imgSrc} />
        ))}
        </div>
        <div className="flex justify-between items-center  text-[6px] md:text-base lg:text-lg xl:text-xl">
        {assuredText.map((item, index) => (
          <BlockText key={index} text={item.text} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Assured;


// function Assured() {
//   return (
//     <>

//     </>
//   )
// }

// export default Assured
