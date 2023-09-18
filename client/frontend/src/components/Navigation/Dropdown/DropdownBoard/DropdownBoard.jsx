

// eslint-disable-next-line react/prop-types
function DropdownBoard({ content }) {
  return (
    <div className='absolute top-3.5 flex justify-center  mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
      <div className='py-2 px-4'>
        {content}
      </div>
    </div>
  );
}

export default DropdownBoard;
