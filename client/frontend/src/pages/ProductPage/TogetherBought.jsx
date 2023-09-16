function TogetherBought() {
  return (
    <div className="my-5">
          <p className="text-[16px] font-medium">
            People Bought Together, Give it a shot.
          </p>
          <div className="flex mx-5 my-2">
            <div className="w-4/6 border-r-[1px] border-black px-7 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="BoughtTogether"
                    id="Bought-to"
                    className="flex justify-start items-start mt-1 mr-1"
                    defaultChecked // Set the checkbox as default checked
                  />
                  <label htmlFor="Bought-to">
                    <img
                      src="./images/iphone 2-1.png"
                      alt=""
                      className="w-[100px] h-[150px] flex-1 mt-2 cursor-pointer"
                    />
                  </label>
                </div>
                <p className="text-[20px]">R81,900</p>
              </div>
              <p className="mx-10 text-[24px]">+</p>
              <div className="flex flex-col justify-center items-center">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="BoughtTogether"
                    id="Bought-to2"
                    className="flex justify-start items-start mt-1 mr-1"
                    defaultChecked // Set the checkbox as default checked
                  />
                  <label htmlFor="Bought-to2">
                    <img
                      src="./images/air.jpg"
                      alt=""
                      className="w-[100px] h-[120px] flex-1 mt-2 cursor-pointer"
                    />
                  </label>
                </div>
                <p className="text-[20px]">R9,999</p>
              </div>
              <p className="text-[150px] font-thin mx-10">|</p>
              <div className="flex flex-col gap-4">
                <p className="flex gap-4 text-[16px] font-normal ">
                  Total Prize: <span>R91,998</span>
                </p>
                <button className="px-5 py-2 bg-slate-400 text-white hover:scale-105 active:border active:border-black active:text-black active:bg-transparent rounded-lg">
                  Add <span className="hidden">all</span> to cart
                </button>
              </div>
            </div>
            <div className="w-full flex-1 flex-col justify-center items-center px-10 py-3 mx-16 border border-gray-400 rounded-md">
              <p className="text-[24px] font-semibold flex flex-nowrap">
                In Package You Get
              </p>
              <ul className="list-disc text-[14px]">
                <li>Device</li>
                <li>Charger + Cable</li>
                <li>Back Cover</li>
                <li>Tempered Glass</li>
              </ul>
            </div>
          </div>
        </div>
  )
}

export default TogetherBought