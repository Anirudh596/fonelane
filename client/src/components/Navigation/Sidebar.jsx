
import { motion } from 'framer-motion';
import BackBtn from '../BackBtn/BackBtn';

const Sidebar = ({ isSidebarOpen, links, handleSidebarOptionClick }) => {
  const sidebarLinks = [
    'About Us',
    'Track Order',
    'Help',
    'Verified Refurbished',
    'Student Special',
    'Deals',
    'iPhone',
    'OnePlus',
    'Samsung Galaxy',
    'MI',
    'VIVO',
    'OPPO',
  ];

  const sidebarVariants = {
    hidden: { x: -300 },
    visible: { x: 0 },
  };

  const sidebarContentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white z-50 border-r border-gray-200 ${
        isSidebarOpen ? 'visible' : 'hidden'
      }`}
      initial="hidden"
      animate={isSidebarOpen ? 'visible' : 'hidden'}
      exit="hidden"
      variants={sidebarVariants}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sidebarContentVariants}
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
};

export default Sidebar;
