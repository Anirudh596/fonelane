import Review from "../../Review/Review"
import Button from "../../Button/Button"

function CardContent() {
  return (
    <div className="mx-5 group">
        <div className="w-full hover:drop-shadow-xl group-hover:scale-110 ease-linear duration-200">
            <img src="./images/iphone.png" className="w-full h-[205px] bg-cover" alt="" />
        </div>
        <div className="relative mt-[-2rem] mb-6 cursor-pointer z-50">
            <Review className={"absolute right-2"} classNamePoints={"hidden"}/>
        </div>
        <div className="flex flex-col mt-10 mb-3">
            <p className="text-xl font-semibold">IPhone 14 Pro Max</p>
            <p className="text-sm my-2">Teal Purple <span className="text-[14px] font-semibold">(128 GB)</span></p>
            <p className="text-lg font-semibold">R39,999 <span className="text-sm font-medium">M.R.P: R<span className=" line-through">99,999</span></span></p>
            <p className="text-sm">Save Extra with No Cost EMI</p>

        </div>
        <div className=" flex justify-between items-center gap-3 my-2">
            <Button className={"border-[1px] border-b-[1px] border-r-[1px] px-4 py-2 text-sm font-medium"} btnText={"Shop Now"}/>
            <Button className={"border-[1px] border-b-[1px] border-r-[1px] bg-white justify-center text-sm font-medium px-4 py-2"} btnText={"Add to Cart"}/>
        </div>
    </div>
  )
}

export default CardContent