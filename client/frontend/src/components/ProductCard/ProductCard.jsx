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
      className="mySwiper"
    >
      {cardData.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="my-5 mx-10">
            <div className="w-[300px] h-[400px] bg-white rounded-[20px] cursor-pointer card-container">
              <CardContent />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default FirstCard;
