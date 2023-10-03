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
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/devices", {
          headers: {
            Authorization: "bearer " + "2ec30f082320c496ed24bc7722585cefc1b1078e6b32f5b77f5de157190641ef31ba5b3d4ddab8b53b227e7be72750200641d55f6c00f4190df68656dee12f8acf40d16712faf76f49ca4348826da57778fff1c384e5b96867a2a52bf64e2d31b90d712528ed1117b68326f2fd7a36caacfe37260b8f923f032bc62d791a8119",
          }
        });
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
      className="mySwiper hidden"
    >
      {cardData}
    </Swiper>
  );
}

export default FirstCard;
