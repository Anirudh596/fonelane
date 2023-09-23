import Assured from "./Hero/Assured/Assured";
import ProductCard from "../../components/ProductCard/ProductCard";
import Services from "./Services/Services";
import ReelSection from "./ReelSection/ReelSection";
import Accessories from "../../components/Accessories/Accessories";
import Banner from "../../components/Banner/Banner";
import Slider from "./Hero/Slider/Slider";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Blog from "../../components/Blog/Blog";

function Home() {
  return (
    <>
      <div className="w-full sticky top-0 bg-white z-50">
        <Navbar />
      </div>
      <Slider />
      <div className="w-full flex-col justify-center items-center custom-w my-5">
        <Assured />
        </div>
        <hr className="h-px bg-black border-0 my-10"/>
        <div className="w-full flex-col justify-center items-center custom-w">
        <div className="title  my-5">
          <p className="text-sm md:text-sm lg:text-base xl:text-lg ">Hurry, Almost Out</p>
        </div>
        <ProductCard />
        <div className="title my-5">
          <p className="text-sm md:text-base lg:text-xl xl:text-lg ">What Our Customer says</p>
        </div>
        <ReelSection />
        <div className="w-full title flex justify-between items-center my-5">
          <p className="text-sm md:text-base lg:text-xl xl:text-lg ">Covers</p>
        </div>
        <Accessories />
        <div className="title my-5 ">
          <p className="text-sm md:text-base lg:text-xl xl:text-lg ">Deal Of the day</p>
        </div>
        <Banner />
        <div className="title my-5 ">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
           <p className="text-sm md:text-base lg:text-xl xl:text-2xl ">If you don't know</p>
        </div> 
         <Blog />
        <div className="title flex justify-start items-center gap-5 my-5">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          <img
            src="./images/instagram.png"
            alt=""
            className="w-[30px] h-[30px]"
          />
          <p className="text-sm md:text-base lg:text-xl xl:text-lg ">
            Follow{" "}
            <span className="hover:text-[#0049b7] cursor-pointer hover:underline">
              @fonelane
            </span>{" "}
            for more such Content
          </p>
        </div>
        <ReelSection />
      </div>

      <Footer />
    </>
  );
}

export default Home;
