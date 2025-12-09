'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useOrderForm } from '../../contexts/OrderFormContext';
import { FAQItem } from './components/FAQItem';
import { DeliverySection } from './components/DeliverySection';
import { questions } from './const';

export const FAQ: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { openOrderForm } = useOrderForm();

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative mx-auto pb-[50px]">
      <div className={`relative mx-auto bg-[#13151e] pb-[50px] ${isHomePage ? 'pt-[100px]' : 'pt-[92px] md:pt-[100px]'}`}>
        {!isHomePage && (
          <>
            <div 
              className="absolute left-0 top-0 z-0 h-[120vh] md:h-[115vh] w-full bg-[url(/images/faq-banner-new.webp)] bg-cover bg-no-repeat opacity-90 md:bg-contain md:bg-center" 
              style={{ boxShadow: 'inset 0 0 100px #0f1116' }} 
              aria-hidden="true" 
            />
            <div className="absolute left-0 top-0 z-0 h-[120vh] md:h-[115vh] w-full bg-black/40" aria-hidden="true" />
          </>
        )}
        <div className="relative z-10 mx-auto px-4 md:max-w-[1350px]">
          <div className={`max-w-[660px] ${!isHomePage ? 'md:ml-auto md:mt-20' : ''}`}>
            <h2 className="heading-lg mb-8">Ответы на вопросы</h2>

            <div className="mb-8 space-y-2">
              {questions.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={activeIndex === index}
                  onClick={() => toggleItem(index)}
                />
              ))}
            </div>

            <div className="flex w-full items-center justify-between gap-4">
              <span className="text-body md:text-body-lg hidden md:block">
                Остались вопросы?
              </span>
              <button
                onClick={() => openOrderForm('consultation')}
                className="btn-text md:btn-text-lg group relative w-full rounded-xl bg-[#3198FF] px-6 py-3 text-white transition-colors hover:bg-[#2980e6] md:w-auto md:px-12"
              >
                Задать вопрос
              </button>
            </div>
          </div>
        </div>
      </div>

      {!isHomePage && <DeliverySection />}
    </section>
  );
};
