'use client';

import React from 'react';
import Image from 'next/image';
import { useOrderForm } from '../../contexts/OrderFormContext';

export const ConsultationPromo: React.FC = () => {
  const { openOrderForm } = useOrderForm();

  return (
    <div className="relative overflow-visible py-10 md:py-20">
      <div className="container relative mx-auto px-4">
        <div className="relative flex items-center">
          <div className="absolute -left-[50%] top-1/2 z-0 -translate-y-1/2 md:-left-[10%] lg:-left-[15%]">
            <Image
              src="/images/blue-crystal.webp"
              alt="Кристалл"
              width={1200}
              height={1000}
              className="h-auto w-[400px] md:w-[600px] lg:w-[800px]"
            />
          </div>

          <div className="relative z-10 ml-auto flex max-w-[280px] flex-col justify-end md:max-w-[700px] lg:max-w-[860px]">
            <h2 className="mb-6 text-right text-[21px] font-bold leading-tight text-[rgba(214,214,214,0.8)] md:text-justify md:text-[40px] lg:text-[53px]">
              Проконсультируем по любому интересующему вас вопросу.
            </h2>
            <div className="flex flex-col items-end gap-4 md:flex-row md:items-center md:justify-normal md:gap-[24px]">
              <button
                onClick={() => openOrderForm('consultation')}
                className="max-w-[180px] rounded-[10px] bg-[#3B82F6] px-[30px] py-3 text-center text-white md:max-w-none md:px-[80px] md:py-4"
              >
                Консультация
              </button>
              <p className="text-md hidden text-[rgba(214,214,214,0.8)] md:block">
                Наши специалисты свяжутся с вами, в течение 15 минут. <br /> Любым удобным для вас
                способом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
