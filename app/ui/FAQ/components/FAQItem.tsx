import React, { useEffect, useRef } from 'react';
import { FiMinusCircle } from 'react-icons/fi';
import { GoPlusCircle } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="group relative border-b border-gray-800 py-5">
      <div className="pointer-events-none absolute left-1/2 top-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 bg-[rgba(48,152,255,0.35)] opacity-0 blur-[100px] transition-opacity duration-300 group-hover:opacity-100"></div>

      <button
        className={`relative z-[5] flex w-full items-center justify-between text-left transition-colors duration-200 ${
          isOpen ? 'text-[#3198ff]' : 'hover:text-[#3198ff]'
        }`}
        onClick={onClick}
      >
        <h3
          className={`text-lg font-normal transition-colors duration-200 ${
            isOpen ? 'text-[#3198FF]' : 'text-[#afafb1] group-hover:text-[#3198FF]'
          }`}
        >
          {question}
        </h3>
        <span
          className={`ml-4 transition-colors duration-200 ${
            isOpen ? 'text-accent' : 'group-hover:text-accent text-gray-400'
          }`}
        >
          {isOpen ? <FiMinusCircle size={24} /> : <GoPlusCircle size={24} />}
        </span>
      </button>

      <div
        className="relative z-[5] overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          height: `${height}px`,
          transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div ref={contentRef} className="text-body-sm py-3">
          {answer === '' ? (
            <button
              className="btn-text-sm ml-4 mt-2 inline-flex transform items-center gap-2 rounded-lg bg-[#3198ff] px-4 py-2 text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#2980e6] hover:shadow-lg"
              onClick={() => navigate('/cookies')}
            >
              Ознакомиться
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ) : (
            answer
          )}
        </div>
      </div>
    </div>
  );
};
