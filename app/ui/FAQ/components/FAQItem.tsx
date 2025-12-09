'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FiMinusCircle } from 'react-icons/fi';
import { GoPlusCircle } from 'react-icons/go';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  const router = useRouter();

  const handleCookieClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push('/cookies');
  };

  return (
    <div className="group relative border-b border-gray-800 py-5">
      <div 
        className="pointer-events-none absolute left-1/2 top-1/2 h-full w-4/5 -translate-x-1/2 -translate-y-1/2 bg-[rgba(48,152,255,0.35)] opacity-0 blur-[50px] transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <button
        className="relative z-10 flex w-full items-center justify-between text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 
          className={`text-lg font-normal transition-colors duration-300 ${
            isOpen ? 'text-[#3198ff]' : 'text-[#a7a8ab] group-hover:text-[#3198ff]'
          }`}
        >
          {question}
        </h3>
        <span 
          className={`ml-4 transition-colors duration-300 ${
            isOpen ? 'text-[#3198ff]' : 'text-gray-400 group-hover:text-[#3198ff]'
          }`}
        >
          {isOpen ? <FiMinusCircle size={24} /> : <GoPlusCircle size={24} />}
        </span>
      </button>

      <div
        className={`relative z-10 grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="py-3 text-sm leading-relaxed text-gray-400">
            {answer ? (
              answer
            ) : (
              <button
                onClick={handleCookieClick}
                className="group/btn ml-4 mt-2 inline-flex items-center gap-2 rounded-xl bg-[#3198ff] px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-[#1d80e2] hover:shadow-lg"
              >
                Ознакомиться
                <svg 
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
