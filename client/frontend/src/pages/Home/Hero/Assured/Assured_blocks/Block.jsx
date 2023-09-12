// eslint-disable-next-line react/prop-types
function Block({imgSrc, text}) {
  return (
    <>
    <div  className=' flex-col justify-center items-center'>
        <img   src={imgSrc} alt="Fonelane Assured image" className="w-[60px] "/>
        <span className='  text-[15px] inline-block w-32'>{text}</span>
    </div>
    </>
  )
}

export default Block