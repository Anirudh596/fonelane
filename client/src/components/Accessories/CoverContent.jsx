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
        const res = await axios.get(`https://fonelane-cms.onrender.com/api/covers/${cIndex}?populate=*`, {
          headers: {
            Authorization: "bearer "+ "2db02d82e1ae075c920ecc147cf978b1b53c09964e651485cca3084579203f4ed9ed98fb25545898e05b1b3b59deec607f910db3ec242a02bd4ed43ffd6fb5361c3c3b1d5385ca72ea12ab33634728354e9f8d9df08ce60b9e14993483ecaddf6e8e018201a95be71cb740be3546489fa075944959a9870e3c1dba157b1bfa83",
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
          const res = await axios.get(`https://fonelane-cms.onrender.com/api/covers/${cIndex}`, {
          headers: {
            Authorization: "bearer "+ "2db02d82e1ae075c920ecc147cf978b1b53c09964e651485cca3084579203f4ed9ed98fb25545898e05b1b3b59deec607f910db3ec242a02bd4ed43ffd6fb5361c3c3b1d5385ca72ea12ab33634728354e9f8d9df08ce60b9e14993483ecaddf6e8e018201a95be71cb740be3546489fa075944959a9870e3c1dba157b1bfa83",
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



  return (
    <div className="mx-1 md:mx-1 lg:mx-2 xl:mx-3 group leading-5">
      <div className="text-[10px] md:text-xs bg-[#f0ecfc] w-12 md:w-14 p-1 font-semibold ml-[-4px] md:ml-[-10px] rounded-br-md rounded-tl-md ">
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
        <p className="text-[10px] md:text-xs w-full flex items-center font-medium gap-2" >starting from <p className="text-sm md:text-xs  font-bold  flex justify-start items-end"> ₹{mainPrice}
        </p></p>
        
        <span className="text-xs md:text-xs lg:text-xs xl:text-xs font-semibold">M.R.P: ₹<span className="line-through">{mrp}</span></span>
        {/* <p className="text-[12px] md:text-[10px] ">or only ₹xxx per month</p> */}
      </div>
    </div>  
  );
}

export default CoverContent;