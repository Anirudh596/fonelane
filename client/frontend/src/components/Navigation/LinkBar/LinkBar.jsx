function LinkBar() {
  return (
    <>
    <div className="custom-w">
    <ul className="list-none w-full flex justify-between items-center h-[32px]  text-[8px] md:text-[12px] lg:text-[14px] xl:text-[16px] ">
      <div  className="flex gap-20">
      <li><a href="#">Track Order</a></li>
      <li><a href="#">Get 5% on sales of $10000 or above</a></li>
      </div>
      <div className="flex gap-20">
      <li><a className="underline " href="#">About Us</a></li>
      <li><a className="underline " href="#">Contact Us</a></li>
      </div>
    </ul>
    </div>
    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  )
}

export default LinkBar