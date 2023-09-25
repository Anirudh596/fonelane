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
      <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3   p-2">
        <div className=" md:w-[250px] md:h-[220px] card-container cursor-pointer rounded-lg">
          <div className="bg-gray-300 ">
            <img src="./images/bl5.png" alt="" className="w-full h-auto" />
          </div>
          <div className="0 p-4 ">Grid Item 5</div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
