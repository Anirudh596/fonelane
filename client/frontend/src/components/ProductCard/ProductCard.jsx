import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import CardContent from "./CardContent/CardContent";

// Define an array of card data
const cardData = [
  1,2,3,4,5,6,7,8,9// Add more objects as needed
];

function FirstCard() {
  return (
    <Swiper
      
      slidesPerView={4.2}
      spaceBetween={20}
      autoplay={{
        duration: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper hidden"
    >
      {cardData.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="my-1 mb-2  md:my-5 md:mb-10 md:mx-10 lg:my-5 lg:mb-10 lg:mx-10 xl:my-5 xl:mb-10 xl:mx-10">
            <div className="  w-[100px] h-[200px] md:w-[300px] md:h-[400px] lg:w-[300px] lg:h-[400px] xl:w-[300px] xl:h-[400px]  bg-white
            rounded-[10px] lg:rounded-[18px] xl:rounded-[20px] cursor-pointer card-container">
              <CardContent />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default FirstCard;
