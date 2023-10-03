import Review from "../../Review/Review";
import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function CardContent({pIndex}) {
  const [data, setData] = useState([]);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:1337/api/products/${pIndex}?populate=*`, {
          headers: {
            Authorization: "bearer " + "2ec30f082320c496ed24bc7722585cefc1b1078e6b32f5b77f5de157190641ef31ba5b3d4ddab8b53b227e7be72750200641d55f6c00f4190df68656dee12f8acf40d16712faf76f49ca4348826da57778fff1c384e5b96867a2a52bf64e2d31b90d712528ed1117b68326f2fd7a36caacfe37260b8f923f032bc62d791a8119",
          },
        });
        // setImageData(res.data.data?.attributes.images.data?.attributes);
        setImageData(res.data.data?.attributes.images.data[0]?.attributes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:1337/api/products/${pIndex}`, {
          headers: {
            Authorization: "bearer " + "2ec30f082320c496ed24bc7722585cefc1b1078e6b32f5b77f5de157190641ef31ba5b3d4ddab8b53b227e7be72750200641d55f6c00f4190df68656dee12f8acf40d16712faf76f49ca4348826da57778fff1c384e5b96867a2a52bf64e2d31b90d712528ed1117b68326f2fd7a36caacfe37260b8f923f032bc62d791a8119",
          },
        });
        setData(res.data.data?.attributes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-1 md:mx-1 lg:mx-2 xl:mx-3 group leading-5">
      <div className="text-[7px] md:text-xs">
        <p>40% off</p>
      </div>
      <div className="w-full ease-linear duration-200">
        {imageData && (
          <img
            src={`http://localhost:1337${imageData.url}`}
            className="w-full h-[115px] md:h-[125px] lg:h-[145px] xl:h-[175px] bg-cover"
            alt=""
          />
        )}
      </div>
      <div className="relative mb-6 cursor-pointer z-50">
        <Review className={"left-0"} classNamePoints={"hidden"} />
        <div className="flex flex-col text-xs md:text-base lg:text-lg xl:text-xl w-full">
          <p className="text-base md:text-sm lg:text-sm xl:text-base font-semibold">{data.title}</p>
        </div>
        <p className="text-[5px] md:text-xs" >starting from</p>
        <p className="text-sm md:text-xs lg:text-xs                                                    xl:text-xs font-semibold gap-2 flex justify-start items-end mx-2">
          ₹{data.price} <span className="text-[10px] md:text-xs lg:text-xs xl:text-xs font-normal">M.R.P: ₹<span className="line-through">99,999</span></span>
        </p>
        <p className="text-[8px] md:text-[10px] lg:text-[8px] xl:text-[11px]">or only ₹xxx per month</p>
      </div>
    </div>  
  );
}

export default CardContent;
