import ServicesContent from "./ServicesContent/ServicesContent"

function Services() {
  return (
    <>
    <div className="services w-full flex justify-between items-center my-10">
        <div className="block1   flex-col w-[80px] h-[55px] md:w-[150px] md:h-[130px] lg:w-[220px] lg:h-[180px] xl:w-[220px] xl:h-[180px]  hover:drop-shadow-3xl rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl flex justify-center items-center"><ServicesContent imgSrc={"./images/img1.jpg"}/><p className="text-[10px] md:text-base lg:text-lg xl:text-xl font-medium">Flashy Sale</p></div>
        <div className="block2   flex-col w-[80px] h-[55px] md:w-[150px] md:h-[130px] lg:w-[220px] lg:h-[180px] xl:w-[220px] xl:h-[180px]  hover:drop-shadow-3xl rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl flex justify-center items-center"><ServicesContent imgSrc={"./images/img2.jpg"}/><p className="text-[10px] md:text-base lg:text-lg xl:text-xl font-medium">Flashy Sale</p></div>
        <div className="block3   flex-col w-[80px] h-[55px] md:w-[150px] md:h-[130px] lg:w-[220px] lg:h-[180px] xl:w-[220px] xl:h-[180px]  hover:drop-shadow-3xl rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl flex justify-center items-center"><ServicesContent imgSrc={"./images/img3.jpg"}/><p className="text-[10px] md:text-base lg:text-lg xl:text-xl font-medium">Flashy Sale</p></div>
        <div className="block4   flex-col w-[80px] h-[55px] md:w-[150px] md:h-[130px] lg:w-[220px] lg:h-[180px] xl:w-[220px] xl:h-[180px]  hover:drop-shadow-3xl rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl flex justify-center items-center"><ServicesContent imgSrc={"./images/img4.jpg"}/><p className="text-[10px] md:text-base lg:text-lg xl:text-xl font-medium">Flashy Sale</p></div>
        <div className="block5   flex-col w-[80px] h-[55px] md:w-[150px] md:h-[130px] lg:w-[220px] lg:h-[180px] xl:w-[220px] xl:h-[180px]  hover:drop-shadow-3xl rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl flex justify-center items-center"><ServicesContent imgSrc={"./images/img5.jpg"}/><p className="text-[10px] md:text-base lg:text-lg xl:text-xl font-medium">Flashy Sale</p></div>
    </div>
    </>
  )
}

export default Services