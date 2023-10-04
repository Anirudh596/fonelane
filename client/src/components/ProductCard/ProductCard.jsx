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
          const res = await axios.get(`http://localhost:1337/api/deal-of-the-days?populate=*`, {
          headers: {
            Authorization: "bearer "+ "d6ac95ba95181cd90c44295e9c8e09137962dede50de6bea512ef8555e7e374bb8689d4dc37595bcccc03f26c454d4bff035a6a5ff9a79691cc933f442bacf3d77d3a3fa70cfce75353c6cf382db121d0c500335ba5d67f30bcc565dea2a08bf54cb0ca4becae34c886522d53bb32d55935f8384f90c054b2b0f48523ed8d13a",
          }
        }
        );
        // setData(res.data.data);
        console.log(res.data.data[0].attributes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, [])

  // Create an array cardData with the same length as data and map over it
  const cardData = data.map((item, index) => (
    <SwiperSlide key={index+1}>
      <Link to="/products">
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
