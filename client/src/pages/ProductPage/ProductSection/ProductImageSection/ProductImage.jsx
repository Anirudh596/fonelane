// import { useState, useEffect, useMemo } from "react";

// function ProductImage() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const productImages = useMemo(
//     () => [
//       "./images/iphone 2-1.png",
//       "./images/iphone 1.png",
//       "./images/iphone 3.png",
//       "./images/iphone 4.png",
//       // Add more image URLs here
//     ],
//     []
//   );

//   // Set the initial selected image to the first image when the page loads
//   useEffect(() => {
//     setSelectedImage(productImages[0]);
//   }, [productImages]);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   return (
//     <>
//       <div className="flex">
//         <div className="grid grid-rows-4 w-[80px] h-fit gap-4 ">
//           {productImages.map((image, index) => (
//             <div
//               key={index}
//               onClick={() => handleImageClick(image)}
//               className={`cursor-pointer bg-gray-200 w-[60px] h-[80px]  rounded-[10px] flex justify-center items-center ${
//                 selectedImage === image ? "bg-sky-200" : ""
//               }`}
//             >
//               <img
//                 src={image}
//                 alt={`Product Image ${index}`}
//                 className="w-[29px] h-[50px]"
//               />
//             </div>
//           ))}
//         </div>
//         <div className="mt-4">
//           {selectedImage && (
//             <img
//               src={selectedImage}
//               alt="Selected Product Image"
//               className="w-[350px]h-[500px]"
//             />
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductImage;



import { useState, useEffect } from "react";
import axios from "axios";

function ProductImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [productImages, setProductImages] = useState([]);

  // Fetch images from your API and set them in the productImages state
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetch the images from your API
        const res = await axios.get(`http://localhost:1337/api/products?populate=*`, {
          headers: {
            Authorization: "bearer "+ "2ec30f082320c496ed24bc7722585cefc1b1078e6b32f5b77f5de157190641ef31ba5b3d4ddab8b53b227e7be72750200641d55f6c00f4190df68656dee12f8acf40d16712faf76f49ca4348826da57778fff1c384e5b96867a2a52bf64e2d31b90d712528ed1117b68326f2fd7a36caacfe37260b8f923f032bc62d791a8119",
          }
        }
        );
        const images = res.data.data[0].attributes.images.data; // Adjust this based on your API response structure
        // console.log(images);
        // Extract image URLs and store them in the productImages state
        const imageUrls = images.map((image) => image.attributes.url);
        setProductImages(imageUrls);
        // console.log(imageUrls)

        // Set the initial selected image to the first image
        if (imageUrls.length > 0) {
          setSelectedImage(imageUrls[0]);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex">
      <div className="grid grid-rows-4 w-[80px] h-fit gap-4">
        {productImages.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(image)}
            className={`cursor-pointer bg-gray-200 w-[60px] h-[80px]  rounded-[10px] flex justify-center items-center ${
              selectedImage === image ? "bg-sky-200" : ""
            }`}
          >
            <img
              src={`http://localhost:1337${image}`}
              alt={`Product Image ${index}`}
              className="w-[29px] h-[50px]"
            />
          </div>
        ))}
      </div>
      <div className="mt-4">
        {selectedImage && (
          <img
            src={`http://localhost:1337${selectedImage}`}
            alt="Selected Product Image"
            className="w-[350px] h-[500px]"
          />
        )}
      </div>
    </div>
  );
}

export default ProductImage;

