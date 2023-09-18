// eslint-disable-next-line react/prop-types
function Block({ imgSrc, text }) {
  return (
    <div className='flex-col justify-center items-center'>
      <img
        src={imgSrc}
        alt={`${text} image`} // Add alt text based on the text prop
        className="w-[50px] h-[50px]"
      />
      <span className='text-[15px] inline-block w-32'>{text}</span>
    </div>
  );
}

export default Block;
