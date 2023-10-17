import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
function CoverContent({cIndex}) {

  const [data, setData] = useState([]);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
       try {
        const res = await axios.get(`http://ec2-35-154-21-93.ap-south-1.compute.amazonaws.com:1337/api/covers/${cIndex}?populate=*`, {
          headers: {
            Authorization: "bearer "+ "422d2e9d1a9f0707a1622e0552b49661b6e630c8d02f25c724721eedc0376e8947e98312a4adf3bf21bbc7bee43f269d1471ca84c9f927b05ed421fba03c5217ec35ecd8121e836f96e0f01fe4582de30c62aad923007ae34066f6a443dd2e554cc819db2869212bc54a139c4b28fe55de325cdf9049dd7dbf253b053c56cd14",
          }
        }
        );
        // setData(res.data.data?.attributes);
        setImageData(res.data.data.attributes.mainimage.data.attributes);
        // console.log(res.data.data.attributes.mainimage.data.attributes)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async ()=>{
      try {
          const res = await axios.get(`http://ec2-35-154-21-93.ap-south-1.compute.amazonaws.com:1337/api/covers/${cIndex}`, {
          headers: {
            Authorization: "bearer "+ "422d2e9d1a9f0707a1622e0552b49661b6e630c8d02f25c724721eedc0376e8947e98312a4adf3bf21bbc7bee43f269d1471ca84c9f927b05ed421fba03c5217ec35ecd8121e836f96e0f01fe4582de30c62aad923007ae34066f6a443dd2e554cc819db2869212bc54a139c4b28fe55de325cdf9049dd7dbf253b053c56cd14",
          }
        }
        );
        setData(res.data.data.attributes);
        // console.log(res.data.data.attributes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, [])

  const mainPrice = data.price;
  const mrp = data.MRP;

 const saved = () => {
  let saving = (((mrp - mainPrice)* 100 )/ mrp);
  let intSaving = Math.floor(saving)
  return intSaving;
 }
 const savedPrice = mrp - mainPrice;


  return (
    <div className="mx-1 md:mx-1 lg:mx-2 xl:mx-3 group leading-5">
      <div className="text-[10px] md:text-xs bg-[#ffc65d] w-12 md:w-14 p-1 font-semibold ml-[-4px] md:ml-[-10px] rounded-br-md rounded-tl-md ">
        <p >{saved()}% off</p>
      </div>
      <div className="w-full ease-linear duration-200 flex justify-center items-center">
        {imageData && (
          <img
            src={`${imageData.url}`}
            className=" h-[105px] md:h-[125px] lg:h-[145px] xl:h-[175px] bg-cover"
            alt=""
          />
        )}
      </div>
      <div className="relative mb-6 cursor-pointer z-50">
        <div className="text-sm">
        <Rating value={4}  readonly className={"left-0"} classNamePoints={"hidden"} />
        </div>
        <div className="flex flex-col text-xs md:text-base lg:text-lg xl:text-xl w-full">
          <p className="text-sm md:text-sm  font-semibold">{data.title}</p>
        </div>
        <p className="text-[12px] md:text-xs w-full flex items-center font-bold gap-2" ><p className="text-sm md:text-xs  font-bold  flex justify-start items-end"> ₹{mainPrice}
        </p>
        <span className="text-xs md:text-xs lg:text-xs xl:text-xs font-semibold"> ₹<span className="line-through">{mrp}</span></span>
        </p>
        <p className="text-xs text-[#32CD32] font-semibold">You Save ₹{savedPrice}</p>
        
        {/* <p className="text-[12px] md:text-[10px] ">or only ₹xxx per month</p> */}
      </div>
    </div>  
  );
}

export default CoverContent;
