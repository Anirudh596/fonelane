// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Taggbox from "./taggbox";

function ReelSection() {
  return (
    <>
      <section className="w-full h-fit">
        <Taggbox />
      </section>
    </>
  );
}

export default ReelSection;
