import Assured from "./Hero/Assured/Assured";
import ProductCard from "../../components/ProductCard/ProductCard";
import Services from "./Services/Services";
import ReelSection from "./ReelSection/ReelSection";
import Accessories from "../../components/Accessories/Accessories";
import Banner from "../../components/Banner/Banner";
import Slider from "./Hero/Slider/Slider";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <div className="w-full sticky top-0 bg-white z-50">
        <Navbar />
      </div>
      <Slider />
      <div className="w-full flex-col justify-center items-center custom-w">
        <Assured />
        <div className="title my-5 ">
          <p className="text-sm md:text-sm lg:text-base xl:text-lg font-bold">Hurry, Almost Out</p>
        </div>
        <ProductCard />
        <div className="title my-5 ">
          <p className="text-sm md:text-base lg:text-xl xl:text-2xl font-bold">Our Services</p>
        </div>
        <Services />
        <div className="title my-5  hidden md:hidden lg:block xl:block">
          <p className="text-sm md:text-base lg:text-xl xl:text-2xl font-bold">What Our Customer says</p>
        </div>
        <ReelSection />
        <div className="w-full titleflex justify-between items-center">
          <p className="text-sm md:text-base lg:text-xl xl:text-2xl font-bold">Covers</p>
        </div>
        <Accessories />
        <div className="title my-5 ">
          <p className="text-sm md:text-base lg:text-xl xl:text-2xl font-bold">Deal Of the day</p>
        </div>
        <Banner />
        {/* <div className="title my-5 ">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          {/* <p className="text-sm md:text-base lg:text-xl xl:text-2xl font-bold">If you don't know</p>
        </div> */} 
        {/* <section className="w-full h-[60vh] flex justify-center items-center bg-gray-300">
          Hellow
        </section> */}
        <div className="titleflex justify-start items-center gap-5">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          <img
            src="./images/instagram.png"
            alt=""
            className="w-[50px] h-[50px]"
          />
          <p className="text-sm md:text-base lg:text-xl xl:text-2xl font-bold">
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
