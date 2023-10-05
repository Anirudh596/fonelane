import Assured from "./Hero/Assured/Assured";
import ProductCard from "../../components/ProductCard/ProductCard";
import ReelSection from "./ReelSection/ReelSection";
import Accessories from "../../components/Accessories/Accessories";
import Banner from "../../components/Banner/Banner";
import Slider from "./Hero/Slider/Slider";
import AdBar from "../../components/AdBar/AdBar";
import Blog from "../../components/Blog/Blog";
import BankOffer from "../../components/BankOffer/BankOffer";

function Home() {
  
  return (
    <>
      
      <div className="block md:hidden overflow-hidden">
      <AdBar />
      </div>
      <div className="block">
      <Slider />

      </div>
      <div className="custom-w mx-auto overflow-hidden">
        <Assured />
        </div>

        <div>
          <BankOffer />
        </div>

        <div className="w-full flex-col justify-center items-center custom-w">
        <div className="title  my-5">
          <p className="text-sm md:text-sm lg:text-base xl:text-lg ">Deal Of the Day</p>
        </div>
        <ProductCard />
        <div className="title my-5 hidden md:block">
          <p className="text-sm md:text-base lg:text-xl xl:text-lg ">Community Stories</p>
        </div>
        <div className="hidden md:block my-10">

        <ReelSection />
        </div>
        <div className="w-full title flex justify-between items-center my-5">
          <p className="text-sm md:text-base lg:text-xl xl:text-lg ">Covers & Cases</p>
        </div>
        <Accessories />
        <div className="title my-5 ">
          <p className="text-sm md:text-base lg:text-xl xl:text-lg ">Best Deal</p>
        </div>
        <Banner />
        <div className="title my-5 ">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
           <p className="text-sm md:text-base lg:text-xl xl:text-2xl ">If you don't know</p>
        </div> 
         <Blog />
        <div className="title hidden md:flex justify-start items-center gap-5 my-5 ">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          <img
            src="./images/instagram.png"
            alt=""
            className="w-[30px] h-[30px]"
          />
          <p className="text-sm md:text-base lg:text-xl xl:text-lg ">
            Follow{" "}
            <span className="hover:text-[#0049b7] cursor-pointer hover:underline font-semibold">
              @fonelane
            </span>{" "}
            for more such Content
          </p>
        </div>
        <div className="hidden md:block my-10">

        <ReelSection />
        </div>
      </div>

      
    </>
  );
}

export default Home;
