import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay} from "swiper/modules";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import AccessoriesContent from "./AccessoriesContent/AccessoriesContent";

// Define an array of card data
const cardData = [
  1,2,3,4,5,6,7,8,9,10,11,12,13// Add more objects as needed
];

function Accessories() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet2 = useMediaQuery({ maxWidth: 968 });
    const isLappy = useMediaQuery({ maxWidth: 1080 });
    const isTablet = useMediaQuery({ maxWidth: 1160 });
    const isLaptop = useMediaQuery({ maxWidth: 1500 });
  
    // Define different slide view settings based on screen size
    let slidesPerView;
    if (isMobile) {
      slidesPerView = 2.7;
    } else if (isTablet2) {
      slidesPerView = 3.5;
    } 
    else if (isTablet) {
      slidesPerView = 4;
    } 
    else if (isLappy) {
      slidesPerView = 4.5;
    }
    
    else if (isLaptop) {
      slidesPerView = 5;
    } else {
      slidesPerView = 6.2;
    }
  
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
      {cardData.map((card, index) => (
        <SwiperSlide key={index}>
          <Link to="/products">
            <div className="my-1 mb-2 md:my-5 md:mb-10 md:mx-10 lg:my-5 lg:mb-10 lg:mx-10 xl:my-5 xl:mb-10 xl:mx-10">
              <div className="w-[150px] h-[200px] md:w-[160px] md:h-[240px] lg:w-[180px] lg:h-[270px] xl:w-[202px] xl:h-[291px] bg-white rounded-md cursor-pointer card-container">
               <AccessoriesContent />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


export default Accessories;
