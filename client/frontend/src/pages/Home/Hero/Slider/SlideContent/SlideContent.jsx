import Button from "../../../../../components/Button/Button";

// eslint-disable-next-line react/prop-types
function SlideContent({ sliderImage }) {
  return (
    <div
      className="w-full h-[520px] slider-bg relative" // Add relative positioning
      style={{ backgroundImage: `url(${sliderImage})`, backgroundSize: 'cover' }}
    >
      {/* Content */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-white text-4xl font-bold mb-4">Your Slide Title</h2>
        <p className="text-white text-lg mb-6">Your slide description goes here.</p>
        <Button btnText={"View Products"} className={"py-2 flex justify-center items-center "}/>
      </div>
    </div>
  );
}

export default SlideContent;
