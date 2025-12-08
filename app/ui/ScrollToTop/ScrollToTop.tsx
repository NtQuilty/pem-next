import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-[9] flex h-12 w-12 items-center justify-center rounded-full bg-[#3198FF] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#2980e6] focus:outline-none focus:ring-2 focus:ring-[#3198FF] focus:ring-offset-2 md:bottom-8 md:right-8"
      aria-label="Прокрутить вверх"
    >
      <MdKeyboardArrowUp className="h-6 w-6" />
    </button>
  );
};
