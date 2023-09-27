import { useState, useEffect } from "react";
import axios from "axios";

function ProductImage() {
  const [selectedImage, setSelectedImage] = useState("");
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/products/1?populate=*", {
          headers: {
            Authorization: "bearer " + "2a2f438d92aaa75f945593b16bae514f47678c8ac01491b15b854abbd19257baa975b48a8df17e6a75842d29ff15b8888dff50e96cf7bf78a25d0bcf7767142218c60e3710a8723a44275de5695445d06ada51b8706e28bd1a2bed5b974106def5f35837527960626ec23883f26d2c59b6a46a2c62ff863ba9e0b4f4037a2be5",
          },
        });
        const imageData = res.data.data?.attributes.iphoneMainImage.data?.attributes;
        const imagesData = res.data.data?.attributes.iphoneColorImages.data;

        if (imageData && imagesData && imagesData.length > 0) {
          const imageUrls = imagesData.map((image) =>
            `http://localhost:1337${image.attributes.url}`
          );

          setProductImages([
            `http://localhost:1337${imageData.url}`,
            ...imageUrls,
          ]);

          setSelectedImage(`http://localhost:1337${imageData.url}`);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
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
            className="w-[350px] h-[500px]"
          />
        )}
      </div>
    </div>
  );
}

export default ProductImage;
