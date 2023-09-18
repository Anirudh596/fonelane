import  { useEffect, useState } from 'react';

function LinkBar() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can adjust the scroll threshold as needed
      if (scrollY > 100) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`custom-w ${isTop ? 'show' : 'hide'}`}>
      <ul className="list-none w-full flex justify-around items-center h-[30px] text-[8px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
        <li><a href="#" className='text-[13px] text-white'>Track Order</a></li>
        <li><a href="#" className='text-[13px] text-white'>Get 5% on sales of $10000 or above</a></li>
      </ul>
    </div>
  );
}

export default LinkBar;
