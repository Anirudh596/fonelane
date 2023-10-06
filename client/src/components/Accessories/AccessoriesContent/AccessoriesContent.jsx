import { Rating } from "@material-tailwind/react";

function AccessoriesContent() {
  return (
    <>
    <div className="flex flex-col justify-center items-center mx-auto">
        <div className="flex justify-center items-center p-5">
            <img src="./images/cover.png" alt="" className=" w-full h-[70px] md:h-[115px] lg:h-[135px] xl:h-[145px] bg-cover"/>
        </div>
        <div className=" flex flex-col justify-center items-center w-full mx-auto">
            <p className="text-base md:text-sm lg:text-base xl:text-base font-semibold" >Iphone Clear Case</p>
            <p className="title w-full flex gap-1 text-base md:text-sm lg:text-base xl:text-base font-medium justify-center items-center" >₹499 <p className="flex  text-xs md:text-sm lg:text-base xl:text-base gap-1 font-normal">M.R.P: <p className="line-through  text-xs md:text-sm lg:text-base xl:text-base">999</p></p></p>
        
        </div>
        <Rating value={4} readonly/>
    </div>
    </>
  )
}

export default AccessoriesContent