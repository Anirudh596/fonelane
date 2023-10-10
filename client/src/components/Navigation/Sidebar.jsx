import "./styles.css";
import { useState } from "react";




<<<<<<< HEAD
  const sidebarContentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
=======
function App() {
>>>>>>> 35879406966b6dbd446e1ec0f343e913abc2143b
  

  return (
    <motion.nav
      
      className="menu"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <BackBtn func={handleSidebarOptionClick} className="left-0 m-5 text-base" />
        
        {sidebarLinks.map((link, index) => (
          <>
            <li className="my-2 flex items-center justify-center" key={link}>
              {link}
            </li>
            {index < sidebarLinks.length - 1 && (
              <hr className="h-px border-0 my-1 bg-gray-200" />
            )}
          
          </>
        ))}
        
      </motion.div>
    </motion.div>
  );
}

export default App;
