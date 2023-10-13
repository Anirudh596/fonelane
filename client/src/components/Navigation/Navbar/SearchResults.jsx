import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
export const SearchResults = ({ results, className, onClose }) => {
  const containerRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    };
    const handleLinkClick = () => {
      onClose();
    };
    document.addEventListener('mousedown', handleClickOutside);
    // Add an event listener for each result
    results.forEach((result) => {
      const link = document.getElementById(`search-result-link-${result.id}`);
      link.addEventListener('click', handleLinkClick);
    });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      results.forEach((result) => {
        const link = document.getElementById(`search-result-link-${result.id}`);
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [onClose, results, containerRef]);
  return (
    <div ref={containerRef} className={`w-1/2 mx-auto justify-start items-start bg-white flex flex-col shadow-lg rounded-sm z-50 ${className}`}>
      {results.map((result, id) => (
        <Link
          to={`/products/${result.id}`}
          id={`search-result-link-${result.id}`}
          className="py-3 px-5 hover:bg-[#EFEFEF]"
          key={id}
        >
          {result.attributes.title}
        </Link>
      ))}
    </div>
  );
};