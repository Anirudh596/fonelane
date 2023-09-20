import Review from "../../Review/Review"
import Button from "../../Button/Button"

function CardContent() {
  return (
    <div className="mx-1 md:mx-2 lg:mx-3 xl:mx-5 group">
        <div className="w-full hover:drop-shadow-xl group-hover:scale-110 ease-linear duration-200">
            <img src="./images/iphone.png" className="w-full h-[70px] md:h-[205px] lg:h-[205px] xl:h-[205px] bg-cover" alt="" />
        </div>
        <div className="relative xl:mt-[-2rem] mb-6 cursor-pointer z-50">
            <Review className={"absolute right-2"} classNamePoints={"hidden"}/>
        </div>
        <div className="flex flex-col leading-[10px]  xl:mt-10 xl:mb-3 text-xs md:text-base lg:text-lg xl:text-xl">
            <p className="text-[10px] md:text-base lg:text-lg xl:text-xl font-semibold">IPhone 14 Pro Max</p>
            <p className="text-[8px] md:text-xs lg:text-sm xl:text-sm my-2">Teal Purple <span className="text-[8px] md:text-xs lg:text-sm xl:text-sm font-semibold">(128 GB)</span></p>
            <p className="text-[8px] md:text-xs lg:text-sm xl:text-sm font-semibold">R39,999 <span className="text-[5px] md:text-xs lg:text-sm xl:text-sm font-medium">M.R.P: R<span className=" line-through">99,999</span></span></p>
            <p className="text-[8px] md:text-xs lg:text-sm xl:text-sm">Save Extra with No Cost EMI</p>

        </div>
        <div className=" flex justify-between items-center gap-3 my-2">
            <Button className={"hidden md:block lg:block xl:block border-[1px] border-b-[1px] border-r-[1px] xl:px-4 xl:py-2 text-[8px] md:text-xs lg:text-sm xl:text-sm font-medium"} btnText={"ShopNow"}/>
            <Button className={"border-[1px] border-b-[1px] border-r-[1px] bg-white justify-center text-[8px] md:text-xs lg:text-sm xl:text-sm font-medium py-[2px] xl:px-4 xl:py-2"} btnText={"AddtoCart"}/>
        </div>
    </div>
  )
}

export default CardContent