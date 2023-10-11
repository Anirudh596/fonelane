import { Button } from "@material-tailwind/react";

function Blog() {
  return (
    <div className="flex flex-wrap w-3/4 mx-auto">
      {/* First three grid items in one line on desktop */}
      <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3   p-2">
        <div className=" md:w-[250px] md:h-[220px] card-container cursor-pointer rounded-lg">
          <div className="bg-gray-300 ">
            <img src="./images/bl1.png" alt="" className="w-full h-auto" />
          </div>
          <div className="0 p-4">Grid Item 5</div>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3   p-2">
        <div className=" md:w-[250px] md:h-[220px]  card-container cursor-pointer rounded-lg">
          <div className="bg-gray-300  ">
            <img src="./images/bl2.png" alt="" className="w-full h-auto" />
          </div>
          <div className=" p-4">Grid Item 5</div>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3   p-2">
        <div className=" md:w-[250px] md:h-[220px]  card-container cursor-pointer rounded-lg">
          <div className="bg-gray-300  ">
            <img src="./images/bl3.png" alt="" className="w-full h-auto" />
          </div>
          <div className=" p-4">Grid Item 5</div>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3   p-2">
        <div className=" md:w-[250px] md:h-[220px]  card-container cursor-pointer rounded-lg">
          <div className="bg-gray-300  ">
            <img src="./images/bl4.png" alt="" className="w-full h-auto" />
          </div>
          <div className=" p-4">Grid Item 5</div>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3   p-2">
        <div className=" md:w-[250px] md:h-[220px] card-container cursor-pointer rounded-lg">
          <div className="bg-gray-300 ">
            <img src="./images/bl5.png" alt="" className="w-full h-auto" />
          </div>
          <div className="0 p-4 ">Grid Item 5</div>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 flex justify-center items-center   p-2">
      <Button variant="outlined" className="flex items-center gap-2 text-[10px] md:text-xs ">
        Read More{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
      </div>
      
    </div>
  );
}

export default Blog;
