import { useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Pagination } from 'swiper/modules';
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductImage() {
    // const cmsApiUrl = import.meta.env.CMS_RENDER_BACKEND_URL;
  // const ApiUrl = import.meta.env.RENDER_BACKEND_URL;
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();
  const [productImages, setProductImages] = useState([]); // Store product images
  const qualityCheck = useMemo(() => [
    {
      main: "32",
      text: "points quality check",
    },
    {
      main: "7",
      text: "Days Refund",
    },
    {
      main: "12",
      text: "months warranty",
    },
    {
      main: "COD",
      text: "Available",
    },
    {
      main: "EMI",
      text: "at no cost",
    },
  ], []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:1337/api/deal-of-the-day-2s/${id}?populate=*`, {
          headers: {
            Authorization: "bearer " + "39b7cacb135a44150b60bd07187d017019f0e42446ec942628b42d692b5167211053739ff1639603a4ba90d1bbd1611d5af24b85941013764fb5077847ef758e8b23546d0bfe0801c26d9ee10474b2385ad46d9ce5843a4958c94527436ee10fd8aa378049221afe4833b1245bb206e81cdf47f9065b675125749fe64fc3541d",
          }
        });

        // Extract and set product images from the response data
        const imageData = res.data.data.attributes.otherimages.data;
        setProductImages(imageData.map(image => image.attributes.url));
        console.log(res.data.data.attributes.otherimages.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    // Set the initial selected image to the first image when the page loads
    if (productImages.length > 0) {
      setSelectedImage(productImages[0]);
    }
  }, [productImages]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="flex">
        <div className="hidden md:grid grid-rows-4 w-[80px] h-fit gap-4">
          {productImages.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(image)}
              className={` overflow-hidden cursor-pointer bg-gray-200 w-[50px] h-[50px] rounded-[10px] flex justify-center items-center ${
                selectedImage === image ? "bg-sky-200" : ""
              }`}
            >
              <img
                src={`http://localhost:1337${image}`}
                alt={`Product Image ${index}`}
                className="w-[20px] h-[30px]"
              />
            </div>
          ))}
        </div>
        <div className="hidden md:grid grid-rows-4 lg:w-28 xl:w-32 h-fit gap-1 rounded-t-xl rounded-b-xl">
          {qualityCheck.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 text-[#353C60] flex flex-col items-center justify-center rounded-md"
            >
              <p className="lg:text-base xl:text-xl" >{item.main}</p>
              <p className="lg:text-[10px] xl:text-[12px]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 hidden md:block">
          {selectedImage && (
            <img
              src={`http://localhost:1337${selectedImage}`}
              alt="Selected Product Image"
              className="w-[250px] h-[310px]"
            />
          )}
        </div>
      </div>
      <div className="buttons hidden md:flex gap-3 text-sm md:text-base my-10">
        <button className="flex-1 px-5 border border-black flex justify-center items-center rounded-lg py-2 active:bg-black active:text-white hover:scale-105">
          Buy Now
        </button>

        <button className="py-2 flex-1 px-5 border border-black flex justify-center items-center rounded-lg bg-black text-white active:bg-white active:text-black hover:scale-105">
          Add to Cart
        </button>
      </div>
      <div className="flex relative md:hidden w-full justify-center items-center">
        <div className="absolute left-0 bottom-5 drop-shadow-xl grid md:hidden grid-rows-4 w-28 h-fit gap-1 z-30 rounded-t-xl rounded-b-xl  p-1">
          {qualityCheck.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 text-[#353C60] flex flex-col items-center justify-center rounded-md"
            >
              <p className="text-[18px]">{item.main}</p>
              <p className="text-[10px]">{item.text}</p>
            </div>
          ))}
        </div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {productImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex justify-center items-center">
              <img src={`http://localhost:1337${image}`} alt={`Product Image ${index}`} className="w-52 h-72" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ProductImage;
