import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

// Define an array of card data with video URLs
const cardData = [
  { id: 1, videoUrl: "/images/video1.mp4" },
  { id: 2, videoUrl: "/images/video1.mp4" },
  { id: 3, videoUrl: "/images/video1.mp4" },
  { id: 4, videoUrl: "/images/video1.mp4" },
  { id: 5, videoUrl: "/images/video1.mp4" },
  { id: 6, videoUrl: "/images/video1.mp4" },
  { id: 7, videoUrl: "/images/video1.mp4" },
  { id: 8, videoUrl: "/images/video1.mp4" },
  // Add more video objects
];

function ReelSection() {
  const [isOpen, setOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const openModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setOpen(true);
  };

  const closeModal = () => {
    setCurrentVideoUrl("");
    setOpen(false);
  };

  return (
    <div className="w-full reel-section mt-4 mb-4 rounded-lg">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={2} // Show 1 slide on mobile
        spaceBetween={15}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 4, // Show 2 slides on tablets
          },
          1024: {
            slidesPerView: 4, // Show 3 slides on larger screens
          },
          1280: {
            slidesPerView: 5, // Show 3 slides on larger screens
          },
          1440: {
            slidesPerView: 6, // Show 3 slides on larger screens
          },
        }}
        className="mySwiper"
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className=" relative rounded-lg cursor-pointer  w-[170px] h-[330px] 2xl:w-[270px] 2xl:h-[430px]"
              onClick={() => openModal(card.videoUrl)}
            >
              <div className=" w-full h-full rounded-lg">
                <video
                  src={card.videoUrl}
                  alt=""
                  className="video-content w-full h-full rounded-lg"
                  autoPlay
                  muted
                  loop
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ModalVideo
        channel="custom"
        isOpen={isOpen}
        url={currentVideoUrl}
        onClose={closeModal}
      />
    </div>
  );
}

export default ReelSection;
