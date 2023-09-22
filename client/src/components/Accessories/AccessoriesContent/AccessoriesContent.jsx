import Review from "../../Review/Review"

function AccessoriesContent() {
  return (
    <>
    <div className="flex-col-reverse justify-center items-center ">
        <div className="flex justify-center items-center p-5">
            <img src="./images/air.jpg" alt="" className=" w-[220px] h-[200px] md:w-[220px] md:h-[200px] lg:w-[220px] lg:h-[200px] xl:w-[220px] xl:h-[200px]"/>
        </div>
        <div className="px-5">
            <p className="title w-full text-inherit text-sm md:text-base lg:text-xl xl:text-xl font-semibold" >Airpods 2nd Generation</p>
            <p className="title w-full text-inherit flex gap-5 text-sm md:text-base lg:text-xl xl:text-xl font-medium justify-center items-center" >₹9,999 <p className="flex text-sm md:text-base lg:text-xl xl:text-xl gap-1 font-normal">M.R.P: <p className="line-through">24,999</p></p></p>
        
        </div>
        <Review />
    </div>
    </>
  )
}

export default AccessoriesContent