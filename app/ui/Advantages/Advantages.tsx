import React from 'react';
import { advantages } from './const';

export const Advantages: React.FC = () => {
  return (
    <section className="relative mx-auto bg-[#1b1e29] pb-[50px] pt-[100px] text-white">
      <div className="mx-auto px-4 md:max-w-[1350px]">
        <h2 className="mb-10 pl-6 text-left text-3xl  font-semibold text-[#d6d6d6] md:pl-0 md:text-center">
          Наши преимущества
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => (
            <div key={index} className=" group relative py-6 pl-6">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-3/5 w-4/5 -translate-x-1/2 -translate-y-1/2 bg-[rgba(48,152,255,0.35)] opacity-0 blur-[100px] transition-opacity duration-300 group-hover:opacity-100"></div>

              <h3 className="relative z-[5] mb-3 text-xl font-semibold text-[#d6d6d6]">
                {item.title}
              </h3>
              <p className="relative z-[5] leading-relaxed text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
