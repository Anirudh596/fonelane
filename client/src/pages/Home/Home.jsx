import Assured from "./Hero/Assured/Assured";
import ProductCard from "../../components/ProductCard/ProductCard";
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
          <p className="text-sm md:text-lg font-medium ">Deal Of the Day</p>
        </div>
        <ProductCard />
        <div className="title  my-5">
          <h2 className="text-[20px] font-medium ">
            Let them buy new, we buy fone-lane
          </h2>
          <p className="text-sm md:text-base ">
            We get the same quality, and the same excitement, for less. Watch to
            see why.
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
          <p className="text-sm md:text-base lg:text-xl xl:text-lg ">
            Covers & Cases
          </p>
        </div>
        <Accessories />
        <div className="title my-5 ">
          <p className="text-sm md:text-base lg:text-xl xl:text-lg ">
            Hot Deal{"'"}
          </p>
        </div>
        <Banner />
        <div className="title my-5 ">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-sm md:text-base lg:text-xl xl:text-2xl ">
            If you don{"'"}t know
          </p>
        </div>
        <Blog />
        <div className="title flex justify-start items-center gap-5 my-5 ">
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
