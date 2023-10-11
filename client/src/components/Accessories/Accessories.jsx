// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Autoplay} from "swiper/modules";
// import { Link } from "react-router-dom";
// import { useMediaQuery } from 'react-responsive';
// import { Rating } from "@material-tailwind/react";

// // Define an array of card data
// const cardData = [
//   1,2,3,4,5,6,7,8,9,10,11,12,13// Add more objects as needed
// ];

// function Accessories() {
//     const isMobile = useMediaQuery({ maxWidth: 768 });
//     const isTablet2 = useMediaQuery({ maxWidth: 968 });
//     const isLappy = useMediaQuery({ maxWidth: 1080 });
//     const isTablet = useMediaQuery({ maxWidth: 1160 });
//     const isLaptop = useMediaQuery({ maxWidth: 1500 });
  
//     // Define different slide view settings based on screen size
//     let slidesPerView;
//     if (isMobile) {
//       slidesPerView = 2.7;
//     } else if (isTablet2) {
//       slidesPerView = 3.5;
//     } 
//     else if (isTablet) {
//       slidesPerView = 4;
//     } 
//     else if (isLappy) {
//       slidesPerView = 4.5;
//     }
    
//     else if (isLaptop) {
//       slidesPerView = 5;
//     } else {
//       slidesPerView = 6.2;
//     }
  
//     return (
//       <Swiper
//         slidesPerView={slidesPerView}
//         spaceBetween={10}
//         autoplay={{
//           duration: 4000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//       modules={[Autoplay]}
//       className="mySwiper hidden"
//     >
//       {cardData.map((card, index) => (
//         <SwiperSlide key={index}>
//           <Link to="/products">
//             <div className="my-1 mb-2 md:my-5 md:mb-10 md:mx-10 lg:my-5 lg:mb-10 lg:mx-10 xl:my-5 xl:mb-10 xl:mx-10">
//               <div className="w-[150px] h-[200px] md:w-[160px] md:h-[240px] lg:w-[180px] lg:h-[270px] xl:w-[202px] xl:h-[291px] bg-white rounded-md cursor-pointer card-container">
//               <>
//     <div className="flex flex-col justify-center items-center mx-auto">
//         <div className="flex justify-center items-center p-5">
//             <img src="./images/cover.png" alt="" className=" w-full h-[70px] md:h-[115px] lg:h-[135px] xl:h-[145px] bg-cover"/>
//         </div>
//         <div className=" flex flex-col justify-center items-center w-full mx-auto">
//             <p className="text-base md:text-sm lg:text-base xl:text-base font-semibold" >Iphone Clear Case</p>
//             <p className="title w-full flex gap-1 text-base md:text-sm lg:text-base xl:text-base font-medium justify-center items-center" >₹499 <p className="flex  text-xs md:text-sm lg:text-base xl:text-base gap-1 font-normal">M.R.P: <p className="line-through  text-xs md:text-sm lg:text-base xl:text-base">999</p></p></p>
        
//         </div>
//         <Rating value={4} readonly/>
//     </div>
//     </>
//               </div>
//             </div>
//           </Link>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }


// export default Accessories;



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay} from "swiper/modules";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
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

    useEffect(() => {
      const fetchData = async ()=>{
        try {
          // const res = await axios.get(`http://localhost:1337/api/iphones`, {
            const res = await axios.get(`https://fonelane-cms.onrender.com/api/covers?populate=*`, {
            headers: {
              Authorization: "bearer "+ "2db02d82e1ae075c920ecc147cf978b1b53c09964e651485cca3084579203f4ed9ed98fb25545898e05b1b3b59deec607f910db3ec242a02bd4ed43ffd6fb5361c3c3b1d5385ca72ea12ab33634728354e9f8d9df08ce60b9e14993483ecaddf6e8e018201a95be71cb740be3546489fa075944959a9870e3c1dba157b1bfa83",
            }
          }
          );
          setData(res.data.data);
          // console.log(res.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData()
    }, [])

    const cardData = data.map((item, index) => (
      <SwiperSlide key={index+1}>
        <Link to={`/covers/${index+1}`}>
          <div className="my-1 mb-2 md:my-5 md:mb-10 md:mx-10 lg:my-5 lg:mb-10 lg:mx-10 xl:my-5 xl:mb-10 xl:mx-10">
            <div className="w-[160px] h-[260px] md:w-[202px] md:h-[320px] bg-white rounded-md cursor-pointer card-container">
            <CoverContent cIndex={index+1} />
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
