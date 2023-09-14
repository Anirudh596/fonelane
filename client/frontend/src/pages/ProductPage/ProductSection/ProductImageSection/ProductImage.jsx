import { useState, useEffect, useMemo } from "react";

function ProductImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const productImages = useMemo(
    () => [
      "./images/iphone 2.png",
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
      <div className="flex">
        {/* <div className="flex flex-col justify-center items-center gap-3">
            <div className="w-[62px] h-[80px] bg-slate-300 rounded-[15px] cursor-pointer">h</div>
            <div className="w-[62px] h-[80px] bg-slate-300 rounded-[15px] cursor-pointer">h</div>
            <div className="w-[62px] h-[80px] bg-slate-300 rounded-[15px] cursor-pointer">h</div>
            <div className="w-[62px] h-[80px] bg-slate-300 rounded-[15px] cursor-pointer">h</div>
        </div> */}
        <div></div>
        <div className="flex">
          <div className="grid grid-rows-4 w-[80px] h-fit gap-4">
            {productImages.map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(image)}
                className={`cursor-pointer w-[60px] h-[80px]  rounded-[10px] flex justify-center items-center ${
                  selectedImage === image ? "bg-gray-200" : ""
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
                className="w-full h-auto"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductImage;
