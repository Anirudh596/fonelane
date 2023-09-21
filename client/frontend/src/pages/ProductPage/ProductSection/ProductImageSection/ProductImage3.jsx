import { useState, useEffect, useMemo } from "react";

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
      <div className="flex">
        <div className="grid grid-rows-4 w-[80px] h-fit gap-4 ">
          {productImages.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(image)}
              className={`cursor-pointer bg-gray-200 w-[60px] h-[80px]  rounded-[10px] flex justify-center items-center ${
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
              className="w-[350px]h-[500px]"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ProductImage;
