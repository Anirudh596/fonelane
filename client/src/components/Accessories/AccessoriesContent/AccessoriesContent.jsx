import Review from "../../Review/Review"

function AccessoriesContent() {
  return (
    <>
    <div className="flex flex-col justify-center items-center mx-auto">
        <div className="flex justify-center items-center p-5">
            <img src="./images/air.jpg" alt="" className=" w-full h-[65px] md:h-[115px] lg:h-[135px] xl:h-[145px] bg-cover"/>
        </div>
        <div className=" flex flex-col justify-center items-center w-full mx-auto">
            <p className="text-[8px] md:text-sm lg:text-base xl:text-base font-semibold" >Iphone Clear Case</p>
            <p className="title w-full flex gap-1 text-[7px] md:text-sm lg:text-base xl:text-base font-medium justify-center items-center" >₹9,999 <p className="flex  text-[7px] md:text-sm lg:text-base xl:text-base gap-1 font-normal">M.R.P: <p className="line-through  text-[7px] md:text-sm lg:text-base xl:text-base">24,999</p></p></p>
        
        </div>
        <Review />
    </div>
    </>
  )
}

export default AccessoriesContent