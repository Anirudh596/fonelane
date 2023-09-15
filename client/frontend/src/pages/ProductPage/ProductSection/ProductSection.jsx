import ProductImage from "./ProductImageSection/ProductImage";
import Review from "../../../components/Review/Review"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

function ProductSection() {
  return (
    <>
      <div className="flex ">
        <div className="flex-1">
          <ProductImage />
        </div>

        <div className="flex-1 w-full h-fullpx-8 py-8">
          <div className="main-sec flex flex-col gap-3 justify-start ">
            <div className="title-icon flex gap-16 justify-start items-center">
              <div className="titles">
                <div className="title"><p className="text-3xl font-semibold">
                  Apple Iphone 13 Pro Max
                  </p> </div>
                <div className="spec-config flex text-center items-center gap-2 w-full flex-nowrap">
                  <p>Quality: <span>Excellent</span></p>
                  <p className="mx-1 text-[25px] font-extralight">|</p>
                  <p>Storage: <span>6GB/128GB</span></p>
                  <p className="mx-1 text-[25px] font-extralight">|</p>
                  <p>Color: <span>Sierra Blue</span></p>
                </div>
                <div className="review cursor-pointer flex flex-nowrap items-center">
                  <Review />
                  <p className="mx-1 text-[25px] font-extralight ">|</p>
                  <p><span>3000 </span> reviews</p>
                </div>
              </div>
              <div className="icons">
                <div className="text-[24px] text-[#ee0e10] cursor-pointer group ">
                  <FontAwesomeIcon icon={faHeart} className="group-hover:scale-110 ease-in-out duration-200 active:text-[#ee600e]"/>
                </div>
                <div className="text-[24px]  cursor-pointer group ">
                  <FontAwesomeIcon icon={faShare} className="group-hover:scale-110 ease-in-out duration-200 active:text-[#db0eee]" />
                  
                </div>
              </div>
            </div>
            <div className="prices">
              <div className=" text-4xl font-thin">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
