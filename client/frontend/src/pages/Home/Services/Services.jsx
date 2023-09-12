import ServicesContent from "./ServicesContent/ServicesContent"

function Services() {
  return (
    <>
    <div className="services w-full flex justify-between items-center my-10">
        <div className="block1 w-[220px] h-[180px] bg-gray-200 hover:drop-shadow-3xl rounded-[37px] flex justify-center items-center"><ServicesContent /></div>
        <div className="block2 w-[220px] h-[180px] bg-gray-200 hover:drop-shadow-3xl rounded-[37px] flex justify-center items-center"><ServicesContent /></div>
        <div className="block3 w-[220px] h-[180px] bg-gray-200 hover:drop-shadow-3xl rounded-[37px] flex justify-center items-center"><ServicesContent /></div>
        <div className="block4 w-[220px] h-[180px] bg-gray-200 hover:drop-shadow-3xl rounded-[37px] flex justify-center items-center"><ServicesContent /></div>
        <div className="block5 w-[220px] h-[180px] bg-gray-200 hover:drop-shadow-3xl rounded-[37px] flex justify-center items-center"><ServicesContent /></div>
    </div>
    </>
  )
}

export default Services