import Review from "../../Review/Review";
import { useEffect, useState } from "react";
import axios from "axios";

function CardContent({pIndex}) {
  const [data, setData] = useState([]);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:1337/api/products/${pIndex}?populate=*`, {
          headers: {
            Authorization: "bearer " + "2a2f438d92aaa75f945593b16bae514f47678c8ac01491b15b854abbd19257baa975b48a8df17e6a75842d29ff15b8888dff50e96cf7bf78a25d0bcf7767142218c60e3710a8723a44275de5695445d06ada51b8706e28bd1a2bed5b974106def5f35837527960626ec23883f26d2c59b6a46a2c62ff863ba9e0b4f4037a2be5",
          },
        });
        setImageData(res.data.data?.attributes.iphoneMainImage.data?.attributes);
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
            Authorization: "bearer " + "2a2f438d92aaa75f945593b16bae514f47678c8ac01491b15b854abbd19257baa975b48a8df17e6a75842d29ff15b8888dff50e96cf7bf78a25d0bcf7767142218c60e3710a8723a44275de5695445d06ada51b8706e28bd1a2bed5b974106def5f35837527960626ec23883f26d2c59b6a46a2c62ff863ba9e0b4f4037a2be5",
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
        <Review className={"left-0"} classNamePoints={""} />
        <div className="flex flex-col text-xs md:text-base lg:text-lg xl:text-xl w-full">
          <p className="text-base md:text-sm lg:text-sm xl:text-base font-semibold">{data.title}</p>
        </div>
        <p className="text-sm md:text-xs lg:text-sm xl:text-xs font-semibold gap-2 flex justify-start items-end mx-2">
          ₹{data.price} <span className="text-[10px] md:text-xs lg:text-xs xl:text-xs font-normal">M.R.P: ₹<span className="line-through">99,999</span></span>
        </p>
        <p className="text-[8px] md:text-[10px] lg:text-[8px] xl:text-[11px]">Save Extra with No Cost EMI</p>
      </div>
    </div>
  );
}

export default CardContent;
