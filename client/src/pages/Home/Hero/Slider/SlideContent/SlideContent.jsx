// import Button from "../../../../../components/Button/Button";

// eslint-disable-next-line react/prop-types
function SlideContent({ sliderImage }) {
  return (
    <div
      className="cursor-pointer  h-[200px] md:h-[300px] lg:h-[380px] w-full xl:h-[420px] slider-bg relative z-0" // Add relative positioning
      style={{
        backgroundImage: `url(${sliderImage})`,
        backgroundSize: "cover",
      }}
    >
      {/* Content */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* <Button btnText={"View Products"} className={"bg-[#4d8ade] text-white py-2 px-10 flex justify-center items-center "}/> */}
      </div>
    </div>
  );
}

export default SlideContent;

//#4d8ade
