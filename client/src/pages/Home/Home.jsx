import Assured from "./Hero/Assured/Assured";
import ProductCard from "../../components/ProductCard/ProductCard";
import Accessories from "../../components/Accessories/Accessories";
import Slider from "./Hero/Slider/Slider";
import Blog from "./Blog/Blog";
import { Button } from "@material-tailwind/react";
import Scroll from "../../components/scroll/Scroll";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function Home() {
  return (
    <>
    <Scroll />
      <div className="block md:hidden overflow-hidden">
        <AdButtons />
      </div>
      <div className="block">
        <Slider />
      </div>
      <div className="custom-w mx-auto overflow-hidden">
        <Assured />
      </div>


      <div className="w-full flex-col justify-center items-center custom-w">
        <div className="title  w-fit ">
          <p className="text-sm md:text-lg font-medium scale-animation2 reddot">H<span className=" text-red-400 ">o</span>t Deals</p>
        </div>
        <ProductCard />
      <div className="my-3">
        <BankOffer />
      </div>
        <div className="title  my-5">
          <h2 className="text-[20px] font-semibold ">
          Fonelane – A Tech Reborn
          </h2>
          <p className="text-sm md:text-base font-medium">
          Welcome to the world of refurbished. Great Tech doesn{"'"}t cost the World !!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/BHACKCNDMW8?si=IuqKwn6W98IM3BdL"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="w-full h-[300px] p-6 md:w-[660px] md:h-[415px]"
          ></iframe>
        </div>

        <div className="w-full title flex justify-between items-center my-5">
          <p className="text-base lg:text-xl xl:text-lg font-semibold">
            Cases & Covers
          </p>
        </div>
        <Accessories />
        <div className="title my-5 ">
          <p className="text-base lg:text-xl xl:text-lg font-semibold">
            Dicover More
          </p>
        </div>
        <div className="hidden md:flex rounded-lg  border-gray-500 px-2 py-3  ">
        <Button size="lg" color="white" className="h-16 mx-1 md:mx-5 relative flex items-center gap-3 z-10 rounded-lg md:h-40 w-1/3">
        <img src="images/h1.png" className="h-16 md:h-full md:w-full absolute top-0 left-0 z-0 rounded-lg" />
        {/* <p className="absolute top-1/4 left-10 text-white">New Arrival</p> */}
      </Button>
      <Button size="lg" color="white" className="mx-1 md:mx-5  relative flex items-center gap-3  z-10 rounded-lg  md:h-40 w-1/3">
        <img src="images/h2.png" className=" md:h-full md:w-full absolute top-0 left-0 z-0 rounded-lg" />
        {/* <p className="absolute top-1/4 left-10 text-white">Students Offer</p> */}
      </Button>
      <Button size="lg" color="white" className="mx-1 md:mx-5  relative flex items-center gap-3  z-10 rounded-lg  md:h-40 w-1/3">
        <img src="images/h3.png" className=" md:h-full md:w-full absolute top-0 left-0 z-0 rounded-lg" />
        {/* <p className="absolute top-1/4 left-10 text-white">Students Offer</p> */}
      </Button>
      

        </div>
        <div className="w-full  block md:hidden">
      <Swiper
        slidesPerView={1.3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}

      className="mySwiper"
    >
      <SwiperSlide><Button size="lg" color="white" className=" md:mx-5 relative flex items-center gap-3 z-10 rounded-lg w-full h-40 ">
        <img src="images/h1.png" className=" h-full w-full absolute top-0 left-0 z-0 rounded-lg" />
        {/* <p className="absolute top-1/4 left-10 text-white">New Arrival</p> */}
      </Button></SwiperSlide>
      <SwiperSlide><Button size="lg" color="white" className="  md:mx-5 relative flex items-center gap-3 z-10 rounded-lg h-40 w-full">
        <img src="images/h2.png" className=" h-full w-full absolute top-0 left-0 z-0 rounded-lg" />
        {/* <p className="absolute top-1/4 left-10 text-white">New Arrival</p> */}
      </Button></SwiperSlide>
      <SwiperSlide><Button size="lg" color="white" className=" md:mx-5 relative flex items-center gap-3 z-10 rounded-lg h-40 w-full">
        <img src="images/h3.png" className=" h-full w-full absolute top-0 left-0 z-0 rounded-lg" />
        {/* <p className="absolute top-1/4 left-10 text-white">New Arrival</p> */}
      </Button></SwiperSlide>
      
    </Swiper>
      
    </div>
        <div className="title my-5 ">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-base lg:text-xl xl:text-2xl font-semibold ">
          The Latest Buzz in Refurbished Tech
          </p>
        </div>
        <Blog />
        <div className="title flex justify-start items-center gap-5 my-5 ">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          <a href="https://www.instagram.com/fonelane/" target="_blank"  rel="noreferrer"><img
            src="./images/instagram.png"
            alt=""
            className="w-[30px] h-[30px] cursor-pointer"
          /></a>
          <p className="text-sm md:text-base lg:text-xl xl:text-lg ">
            Follow{" "}
            <a href="https://www.instagram.com/fonelane/" target="_blank"  rel="noreferrer"><span className="hover:text-[#0049b7] cursor-pointer hover:underline font-semibold">
              @fonelane
            </span>{" "}</a>
            for more such Content
          </p>
        </div>
        <div className="block my-10">
          <div>
            <iframe
              src="https://widget.taggbox.com/142854"
              style={{
                width: "100%",
                height: "400px",
                border: "none",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;


function AdButtons() {
  const AssuredContent = [
    {
      // icon: <img src="./images/1.png" alt="" className="w-12 h-12"/>,
      text: "Student Special",
      path: "/deals"
    },
    {
      // icon: <img src="./images/2.png" alt="" className="w-14 h-12"/>,
      text: "Deals",
      path: "/deals"
    },
    {
      // icon: <img src="./images/3.png" alt="" className="w-12 h-12"/>,
      text: "iPhones",
      path: "/iphones"
    },
    {
      // icon: <img src="./images/4.png" alt="" className="w-20 h-12"/>,
      text: "Accessories",
      path: "/deals"
    },
  ];

  // Check if the screen width is less than 768px (mobile)
  // const isMobile = window.innerWidth < 768 ;

  return (
    <div className=" md:mx-5 my-3 md:my-3 w-full flex justify-between gap-2 px-2">
      {AssuredContent.map((item, index) => (
        <div key={index} className="bg-[#eeeeee] w-full flex justify-center items-center text-center p-1 border border-gray-400 rounded-sm">
         <Link  to={item.path}> <div className="flex ">

            <p className=" w-full text-[10px] md:text-xs  font-semibold">
              {item.text}
            </p>
          </div></Link>
        </div>
      ))}
    </div>
  );
}




function BankOffer() {
  const bankIcons = [
    "./images/image-4.png",
    "./images/image-5.png",
    "./images/image-3.png",
    "./images/image.png",
    "./images/image-1.png"
  ];

  return (
    <div className="custom-w md:my-4 px-2 flex justify-center items-center border-2 border-gray-400 bg-[#eeeeee]   ">
      <div className="flex md:w-1/4  justify-center items-center text-center border-rborder-black">
        <p className="text-[10px] md:flex items-end gap-2 md:text-base font-medium px-1">NO COST <p className="text-xs md:text-xl font-semibold font-serif">EMI ON</p></p>
      </div>
      <div className="w-full flex-1 flex gap-1 md:gap-2 justify-between items-center px-5 h-[45px] md:h-[80px]">
        {bankIcons.map((icon, index) => (
          <div key={index}>
            <img src={icon} alt="" className=" w-[80px] md:w-[120px] " />
          </div>
        ))}
      </div>
    </div>
  );
}

