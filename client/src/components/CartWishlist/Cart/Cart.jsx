import BackBtn from "../../Common/BackBtn/BackBtn";
import Button from "../../Common/Button/Button";
import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar";
import Assured from "../../../pages/Home/Assured/Assured";
import ProductCard from "../../Products/ProductCard/ProductCard";

function Cart() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen custom-w">
        <div className="w-full h-[10vh] flex justify-between items-center px-5">
          <h1 className="text-2xl font-semibold">My Cart</h1> <BackBtn />
        </div>
        <hr className="h-px border-0 bg-black" />
        <div className="flex justify-start px-5 py-5 gap-3 items-center h-5">
          <input type="checkbox" name="selectall" id="select-all" />
          <label htmlFor="select-all">Select All</label>
        </div>
        <div className="w-full h-auto flex justify-between py-10">
          <div className="flex flex-col w-fit h-auto mx-5 my-3">
            <div className="flex">
              <div className="flex">
                <input type="checkbox" name="addcart" id="add-cart" />
                <label htmlFor="add-cart" className="flex gap-4 cursor-pointer">
                  <div className="w-[144px] h-[144px] bg-gray-300 mx-3"></div>
                  <div className="w-full h-[144px] flex flex-col m-2">
                    <h1 className="text-2xl font-semibold">Iphone 12</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, ea.
                    </p>
                    <p className="flex text-xl font-medium justify-start items-end gap-2 my-2">
                      R81,999{" "}
                      <p className="flex text-sm font-medium gap-2">
                        R1,29,000{" "}
                        <p className="text-sm font-medium">
                          Save R57001 (41% Off)
                        </p>
                      </p>
                    </p>
                  </div>
                </label>
              </div>
              <div className="w-[105px] h-[40px] flex bg-gray-400 justify-evenly">
                <button className="w-[35px] h-full active:border-r-[1px] active:border-gray-600 ">
                  -
                </button>
                <button className="w-[35px] h-full active:border-[1px] active:border-gray-600 ">
                  1
                </button>
                <button className="w-[35px] h-full active:border-l-[1px] active:border-gray-600 ">
                  +
                </button>
              </div>
            </div>
            <div className="flex">
              <div className="flex">
                <input type="checkbox" name="addcart" id="add-cart2" />
                <label
                  htmlFor="add-cart2"
                  className="flex gap-4 cursor-pointer"
                >
                  <div className="w-[144px] h-[144px] bg-gray-300 mx-3"></div>
                  <div className="w-full h-[144px] flex flex-col m-2">
                    <h1 className="text-2xl font-semibold">Iphone 12</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, ea.
                    </p>
                    <p className="flex text-xl font-medium justify-start items-end gap-2 my-2">
                      R81,999{" "}
                      <p className="flex text-sm font-medium gap-2">
                        R1,29,000{" "}
                        <p className="text-sm font-medium">
                          Save R57001 (41% Off)
                        </p>
                      </p>
                    </p>
                  </div>
                </label>
              </div>
              <div className="w-[105px] h-[40px] flex bg-gray-400 justify-evenly">
                <button className="w-[35px] h-full active:border-r-[1px] active:border-gray-600 ">
                  -
                </button>
                <button className="w-[35px] h-full active:border-[1px] active:border-gray-600 ">
                  1
                </button>
                <button className="w-[35px] h-full active:border-l-[1px] active:border-gray-600 ">
                  +
                </button>
              </div>
            </div>
            <Button btnText={"Back to Home"} className={"w-1/2"} />
          </div>
          <div className=" flex-1 flex-col gap-2 w-full h-auto relative bg-[#f8f3f3] px-7 py-3">
            <h1 className="text-2xl font-medium">Summary</h1>
            <div className="flex justify-between items-center">
              <p>MRP:</p>
              <p>R81,999</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Savings:</p>
              <p>R31,999</p>
            </div>
            <div className="w-full h-28 bg-gray-300">h</div>
            <button className="my-3 text-center px-5 py-3 w-full rounded-lg border-[#483480] border-[1px]">
              Have Coupon Click Me!
            </button>

            <div className="mt-3">
              <Button btnText={"Proceed"} />
            </div>
          </div>
        </div>
        <Assured />
        <div className="title my-10">
          <p className="text-[28px] font-bold">Hurry, Almost Out</p>
        </div>
        <ProductCard />
      </div>
      <Footer />
    </>
  );
}

export default Cart;
