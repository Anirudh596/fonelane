// eslint-disable-next-line react/prop-types
function Block({ imgSrc, text, className }) {
  return (
    <div className='w-full flex-col justify-center items-center'>
      <img
        src={imgSrc}
        alt={`${text} image`} // Add alt text based on the text prop
        className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] xl:w-[50px] xl:h-[50px] "
      />
      <span className={` ${className}`}>{text}</span>
    </div>
  );
}

export default Block;
