import { useEffect } from "react";

useEffect

const Scroll = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it only runs once when mounted

  return (
    <>
    </>
  )
}

export default Scroll