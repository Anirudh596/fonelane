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
    <div className={`w-full ${isTop ? 'show' : 'hide'}`}>
      <ul className="list-none flex justify-around items-center h-[20px] text-black md:h-[24px] lg:h-[28px] xl:h-[30px] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[16px]">
        <li><a href="#" className='active:underline'>Track Order</a></li>
        <li><a href="#" className='active:underline'>Get 5% on sales of $10000 or above</a></li>
      </ul>
    </div>
  );
}

export default LinkBar;
