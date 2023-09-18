

function DropdownBoard({ content }) {
  return (
    <div className='absolute top-3.5 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
      <div className='py-2 px-4'>
        {content}
      </div>
    </div>
  );
}

export default DropdownBoard;
