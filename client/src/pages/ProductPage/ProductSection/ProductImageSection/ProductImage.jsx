import { useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
// import required modules
import { EffectCreative } from 'swiper/modules';

// Remove unused import
// import { EffectCreative } from 'swiper/modules';

function ProductImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const productImages = useMemo(
    () => [
      "./images/iphone 2-1.png",
      "./images/iphone 1.png",
      "./images/iphone 3.png",
      "./images/iphone 4.png",
      // Add more image URLs here
    ],
    []
  );

  // Set the initial selected image to the first image when the page loads
  useEffect(() => {
    setSelectedImage(productImages[0]);
  }, [productImages]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="hidden md:flex">
        <div className="grid grid-rows-4 w-[80px] h-fit gap-4 ">
          {productImages.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(image)}
              className={`cursor-pointer bg-gray-200 w-[60px] h-[80px] rounded-[10px] flex justify-center items-center ${
                selectedImage === image ? "bg-sky-200" : ""
              }`}
            >
              <img
                src={image}
                alt={`Product Image ${index}`}
                className="w-[29px] h-[50px]"
              />
            </div>
          ))}
        </div>
        <div className="mt-4">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected Product Image"
              className="w-[350px] h-[500px]"
            />
          )}
        </div>
      </div>
      <div className="flex md:hidden justify-center items-center w-screen">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          loop= {true}
          creativeEffect={{
            prev: {
              shadow: false,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          // Remove 'modules' prop as it's not needed for this effect
          modules={[EffectCreative]}
          className="mySwiper6"
        >
          {productImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className={`w-full flex justify-center items-center`}
              >
                <img
                  src={image}
                  alt={`Product Image ${index}`}
                  className="w-screen h-[500px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ProductImage;
