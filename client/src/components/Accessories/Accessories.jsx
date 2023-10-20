import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
// import { Rating } from "@material-tailwind/react";
import axios from "axios";
import CoverContent from "./CoverContent";

function Accessories() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet2 = useMediaQuery({ maxWidth: 968 });
  const isLappy = useMediaQuery({ maxWidth: 1080 });
  const isTablet = useMediaQuery({ maxWidth: 1160 });
  const isLaptop = useMediaQuery({ maxWidth: 1500 });

  const [data, setData] = useState([]);

  // Define different slide view settings based on screen size
  let slidesPerView;
  if (isMobile) {
    slidesPerView = 2.7;
  } else if (isTablet2) {
    slidesPerView = 3.5;
  } else if (isTablet) {
    slidesPerView = 4;
  } else if (isLappy) {
    slidesPerView = 4.5;
  } else if (isLaptop) {
    slidesPerView = 5;
  } else {
    slidesPerView = 6.2;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get(`http://193.203.161.234:1337/api/iphones`, {
        const res = await axios.get(
          `http://193.203.161.234:1337/api/covers?populate=*`,
          {
            headers: {
              Authorization:
                "bearer " +
                "422d2e9d1a9f0707a1622e0552b49661b6e630c8d02f25c724721eedc0376e8947e98312a4adf3bf21bbc7bee43f269d1471ca84c9f927b05ed421fba03c5217ec35ecd8121e836f96e0f01fe4582de30c62aad923007ae34066f6a443dd2e554cc819db2869212bc54a139c4b28fe55de325cdf9049dd7dbf253b053c56cd14",
            },
          }
        );
        setData(res.data.data);
        // console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const cardData = data.map((item, index) => (
    <SwiperSlide key={index + 1}>
      <Link to={`/covers/${index + 1}`}>
        <div className="my-1 mb-2 md:my-5 md:mb-10 md:mx-10 lg:my-5 lg:mb-10 lg:mx-10 xl:my-5 xl:mb-10 xl:mx-10">
          <div className="w-[160px] h-[260px] md:w-[202px] md:h-[320px] bg-white rounded-md cursor-pointer card-container">
            <CoverContent cIndex={index + 1} />
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

export default Accessories;
