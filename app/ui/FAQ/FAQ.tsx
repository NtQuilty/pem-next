import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useOrderForm } from '../../contexts/OrderFormContext';
import { FAQItem } from './components/FAQItem';
import { questions } from './const';
import { deliveryInfo } from './delivery-const';

export const FAQ: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { openOrderForm } = useOrderForm();

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="relative mx-auto pb-[50px]">
      <div
        className={`relative mx-auto bg-[#13151e] pb-[50px] ${isHomePage ? 'pt-[100px]' : 'pt-[92px] md:pt-[100px]'} ${
          !isHomePage
            ? 'bg-[url(/images/faq-banner-new.png)] bg-cover bg-no-repeat md:bg-contain md:bg-center'
            : ''
        }`}
      >
        {!isHomePage && <div className="absolute inset-0 bg-black/40"></div>}
        <div className="relative z-10 mx-auto px-4 md:max-w-[1350px]">
          <div className={`max-w-[660px] ${!isHomePage ? 'md:ml-auto md:mt-20' : ''}`}>
            <h2 className="heading-lg mb-8">Ответы на вопросы</h2>

            <div className="mb-8">
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

            <div className="flex w-full items-center justify-between">
              <span className="text-body md:text-body-lg mr-4 hidden md:block">
                Остались вопросы?
              </span>
              <button
                onClick={() => openOrderForm('consultation')}
                className="btn-text md:btn-text-lg w-full rounded-md bg-[#3198FF] px-6 py-3 text-white transition-colors hover:bg-[#2980e6] md:w-auto md:px-12"
              >
                {'Задать вопрос'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {!isHomePage && (
        <div className="mt-16 bg-[#13151e]">
          <div className="mx-auto px-4 md:max-w-[1350px]">
            <h2 className="heading-md mb-6">{deliveryInfo.mainTitle}</h2>

            <p className="mb-8 text-[rgba(214,214,214,0.8)] md:mb-12">{deliveryInfo.intro}</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {deliveryInfo.sections.map(section => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-gray-700/30 bg-[#1b1e29] p-6 transition-all duration-200 hover:border-gray-600/50"
                >
                  <div className="mb-4 flex items-center gap-3">
                    {section.icon && (
                      <span className="text-2xl" role="img" aria-label={section.title}>
                        {section.icon}
                      </span>
                    )}
                    <h3 className="heading-sm text-white">{section.title}</h3>
                  </div>

                  {Array.isArray(section.content) ? (
                    <div className="space-y-3">
                      {section.content.map((text, pIndex) => (
                        <p
                          key={pIndex}
                          className="leading-relaxed text-[rgba(214,214,214,0.9)]"
                          dangerouslySetInnerHTML={{ __html: text }}
                        />
                      ))}
                    </div>
                  ) : (
                    <p
                      className="leading-relaxed text-[rgba(214,214,214,0.9)]"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
