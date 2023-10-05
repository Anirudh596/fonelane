import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import CardContent from "./CardContent/CardContent";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";
import axios from "axios";

function FirstCard() {

    const cmsApiUrl = import.meta.env.CMS_RENDER_BACKEND_URL;
  // const ApiUrl = import.meta.env.RENDER_BACKEND_URL;
  const isMobile = useMediaQuery({ maxWidth: 550 });
  const isTablet2 = useMediaQuery({ maxWidth: 768 });
  const isLaptop = useMediaQuery({ maxWidth: 1260 });
  const isDesktop = useMediaQuery({ maxWidth: 1500 });

  const [data, setData] = useState([]);

  // Define different slide view settings based on screen size
  let slidesPerView;
  if (isMobile) {
    slidesPerView = 2.5;
  } else if (isTablet2) {
    slidesPerView = 3.5;
  }
  else if (isLaptop) {
    slidesPerView = 4.5;
  }
  else if (isDesktop) {
    slidesPerView = 5;
  } else {
    slidesPerView = 6.2;
  }
  useEffect(() => {
    const fetchData = async ()=>{
      try {
        // const res = await axios.get(`http://localhost:1337/api/iphones`, {
          const res = await axios.get(`${cmsApiUrl}/api/deal-of-the-day-2s?populate=*`, {
          headers: {
            Authorization: "bearer "+ "39b7cacb135a44150b60bd07187d017019f0e42446ec942628b42d692b5167211053739ff1639603a4ba90d1bbd1611d5af24b85941013764fb5077847ef758e8b23546d0bfe0801c26d9ee10474b2385ad46d9ce5843a4958c94527436ee10fd8aa378049221afe4833b1245bb206e81cdf47f9065b675125749fe64fc3541d",
          }
        }
        );
        // setData(res.data.data);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, [])

  // Create an array cardData with the same length as data and map over it
  const cardData = data.map((item, index) => (
    <SwiperSlide key={index+1}>
      <Link to={`/products/${item.id}`}>
        <div className="my-1 mb-2 md:my-5 md:mb-10 md:mx-10 lg:my-5 lg:mb-10 lg:mx-10 xl:my-5 xl:mb-10 xl:mx-10">
          <div className="w-[160px] h-[220px] md:w-[160px] md:h-[240px] lg:w-[180px] lg:h-[270px] xl:w-[202px] xl:h-[291px] bg-white rounded-md cursor-pointer card-container">
            <CardContent pIndex={index+1}/>
          </div>
        </div>
      </Link>
    </SwiperSlide>
  ));

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={10}
      autoplay={{
        duration: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {cardData}
    </Swiper>
  );
}

export default FirstCard;
