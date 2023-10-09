
import {
  Drawer,
  IconButton
} from "@material-tailwind/react";
import React from "react";

// eslint-disable-next-line react/prop-types
function DrawerComponent({ isOpen, onClose, links }) {
  return (
    <Drawer open={isOpen} onClose={onClose} size={500} className="p-4">
      <div className="mb-6 flex items-center justify-between">
        <IconButton variant="text" color="blue-gray" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 28"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      {/* eslint-disable-next-line react/prop-types */}
      {links.map((link, index) => (
          <React.Fragment key={link}>
          <li className="my-2 flex items-center justify-center">{link}</li>
            {/* eslint-disable-next-line react/prop-types */}
          {index < links.length - 1 && (
            <hr className="h-px border-0 my-1 bg-gray-200" />
          )}
        </React.Fragment>
      ))}
    </Drawer>
  );
}

export default DrawerComponent;
