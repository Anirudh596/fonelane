import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Define an array of card data
const cardData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // Add more objects as needed
const ImageData = ["./images/ban1.png", "./images/ban1.png"];

function ReelSection() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1160 });
  const isLaptop = useMediaQuery({ maxWidth: 1500 });

  // Define different slide view settings based on screen size
  let slidesPerView;
  if (isMobile) {
    slidesPerView = 2.6;
  } else if (isTablet) {
    slidesPerView = 3.4;
  } else if (isLaptop) {
    slidesPerView = 4;
  } else {
    slidesPerView = 6;
  }
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={5}
      autoplay={{
        duration: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {cardData.map((index) => (
        <SwiperSlide key={index}>
          <Link to="/products">
          <div className="my-1 mb-2 md:my-5 md:mb-10 md:mx-10 lg:my-5 lg:mb-10 lg:mx-10 xl:my-5 xl:mb-10 xl:mx-10">
          <div className="w-[160px] h-[300px] md:w-[180px] md:h-[360px] lg:w-[210px] lg:h-[420px] xl:w-[260px] xl:h-[470px] bg-white rounded-md cursor-pointer card-container">
              <img src={ImageData[index % ImageData.length]} alt="" className="w-full h-full overflow-hidden"/>
            </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ReelSection;
