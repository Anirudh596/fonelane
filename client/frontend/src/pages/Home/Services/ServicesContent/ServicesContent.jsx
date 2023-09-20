// eslint-disable-next-line react/prop-types
function ServicesContent({imgSrc}) {
  return (
    <>
    <div className="ServicesContent flex-col-reverse justify-center items-center ">
        <img src={imgSrc} className="w-full h-full " alt="" />
    </div>
        
    </>
  )
}

export default ServicesContent