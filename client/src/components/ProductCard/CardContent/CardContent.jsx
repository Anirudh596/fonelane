import Review from "../../Review/Review"

function CardContent() {
  return (
    <div className="mx-1 md:mx-1 lg:mx-2 xl:mx-3 group leading-5">
        <div className="w-full ease-linear duration-200">
            <img src="./images/iphone.png" className="w-full     h-[115px] md:h-[125px] lg:h-[145px] xl:h-[175px] bg-cover" alt="" />
        </div>
        <div className="relative  mb-6 cursor-pointer z-50">
            <Review className={"left-0"} classNamePoints={""}/>
        <div className="flex flex-col text-xs md:text-base lg:text-lg xl:text-xl w-full">
            <p className="text-base md:text-sm lg:text-sm xl:text-base font-semibold">IPhone 14 Pro Max</p>
        </div>
            <p className="text-sm md:text-xs lg:text-sm xl:text-xs font-semibold gap-2 flex justify-start items-end mx-2">₹39,999 <span className="text-[10px] md:text-xs lg:text-xs xl:text-xs font-normal">M.R.P: ₹<span className=" line-through">99,999</span></span></p>
            <p className=" text-[8px] md:text-[10px] lg:text-[8px] xl:text-[11px]">Save Extra with No Cost EMI</p>
        </div>
    
    </div>
  )
}

export default CardContent