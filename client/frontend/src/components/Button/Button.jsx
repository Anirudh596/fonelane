// eslint-disable-next-line react/prop-types
function Button({ btnText, className }) {
  return (
    <>
      <button className={`ease-in-out duration-200 w-full right-0 px-9 py-2 text-[16px] bg-[#f6b93b] border rounded-[5px] border-black border-b-4 border-r-4 text-black hover:border-b-[1px] hover:border-r-[1px] active:bg-[#edf7f6] active:border-white ${className}`}>
        {btnText}
      </button>
    </>
  );
}

export default Button;
