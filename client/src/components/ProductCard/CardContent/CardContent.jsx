import Review from "../../Review/Review"
import Button from "../../Button/Button"

function CardContent() {
  return (
    <div className="mx-1 md:mx-2 lg:mx-3 xl:mx-5 group">
        <div className="w-full ease-linear duration-200">
            <img src="./images/iphone.png" className="w-full h-[80px] md:h-[95px] lg:h-[115px] xl:h-[130px] bg-cover" alt="" />
        </div>
        <div className="flex flex-col leading-loose  text-xs md:text-base lg:text-lg xl:text-xl w-full">
            <p className="text-[8px] md:text-xs lg:text-sm xl:text-base font-semibold">IPhone 14 Pro Max</p>
        <div className="relative   mb-6 cursor-pointer z-50">
            <Review className={"left-0"} classNamePoints={"hidden"}/>
        </div>
            <p className="text-[6px] md:text-xs lg:text-sm xl:text-sm ">Teal Purple <span className="text-[6px] md:text-xs lg:text-sm xl:text-sm font-semibold">(128 GB)</span></p>
            <p className="text-[6px] md:text-xs lg:text-sm xl:text-xs font-semibold">R39,999 <span className="text-[7px] md:text-xs lg:text-xs xl:text-xs font-medium">M.R.P: R<span className=" line-through">99,999</span></span></p>
            <p className="text-[5px] md:text-[8px] lg:text-[8px] xl:text-[11px]">Save Extra with No Cost EMI</p>

        </div>
    
    </div>
  )
}

export default CardContent