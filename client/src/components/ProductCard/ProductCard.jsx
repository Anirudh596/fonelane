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
        const res = await axios.get(`http://localhost:1337/api/iphones`, {
          headers: {
            Authorization: "bearer "+ "ea2cc92777940d9cd90404735d813e642f04d4895d82f82372a51ea4b98cf0f851111798b2a88b55c9c048ec8c2f8d265dd0514b02c02c06efb5e21ca8f09e06ab5f92c596a6962f7b02ebe6ea6cb580c9ff42c892a94594fed906b0b27dd896fe141b51991b4a2cbe6562cc7359b718809b3331625b57982c5223bb9152f2ee",
          }
        }
        );
        setData(res.data.data);
        // console.log(res.data.data.attributes);
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
