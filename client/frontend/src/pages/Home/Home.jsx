import Assured from "./Hero/Assured/Assured";
import ProductCard from "../../components/ProductCard/ProductCard";
import Services from "./Services/Services";
import ReelSection from "./ReelSection/ReelSection";
import Accessories from "../../components/Accessories/Accessories";
import Banner from "../../components/Banner/Banner";
import Slider from "./Hero/Slider/Slider";
import LinkBar from "../../components/Navigation/LinkBar/LinkBar";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <div className="w-full bg-[#674eae]">
        <LinkBar />
      </div>
      <hr className="w-full h-px bg-gray-400 border-0 "></hr>
      <div className="w-full sticky top-0 bg-white z-50">
        <Navbar />
      </div>
      <Slider />
      <div className="w-full flex-col justify-center items-center custom-w">
        <Assured />
        <div className="title my-10">
          <p className="text-[28px] font-bold">Hurry, Almost Out</p>
        </div>
        <ProductCard />
        <div className="title my-10">
          <p className="text-[28px] font-bold">Our Services</p>
        </div>
        <Services />
        <div className="title my-10">
          <p className="text-[28px] font-bold">What Our Customer says</p>
        </div>
        <ReelSection />
        <div className="w-full title my-10 flex justify-between items-center">
          <p className="text-[28px] font-bold">What Our Customer says</p>
          <ul className="flex justify-between items-center gap-9">
            <li className="group">
              <a
                className="group-hover:underline text-[15px] group-hover:text-[16px] font-medium group-hover:font-semibold ease-linear duration-200"
                href="#"
              >
                Charger
              </a>
            </li>
            <li className="group">
              <a
                className="group-hover:underline text-[15px] group-hover:text-[16px] font-medium group-hover:font-semibold ease-linear duration-200"
                href="#"
              >
                Charger
              </a>
            </li>
            <li className="group">
              <a
                className="group-hover:underline text-[15px] group-hover:text-[16px] font-medium group-hover:font-semibold ease-linear duration-200"
                href="#"
              >
                Charger
              </a>
            </li>
            <li className="group">
              <a
                className="group-hover:underline text-[15px] group-hover:text-[16px] font-medium group-hover:font-semibold ease-linear duration-200"
                href="#"
              >
                Charger
              </a>
            </li>
          </ul>
        </div>
        <Accessories />
        <div className="title my-10">
          <p className="text-[28px] font-bold">Deal Of the day</p>
        </div>
        <Banner />
        <div className="title my-10">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-[28px] font-bold">If you don't know</p>
        </div>
        <section className="w-full h-[60vh] flex justify-center items-center bg-gray-300">
          Hellow
        </section>
        <div className="title my-10 flex justify-start items-center gap-5">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          <img
            src="./images/instagram.png"
            alt=""
            className="w-[50px] h-[50px]"
          />
          <p className="text-[28px] font-bold">
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
