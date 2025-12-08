import React from 'react';
import { useOrderForm } from '../../contexts/OrderFormContext';

export const ConsultationPromo: React.FC = () => {
  const { openOrderForm } = useOrderForm();

  return (
    <div className="container mx-auto pr-4 md:px-4">
      <div className="relative mx-auto mt-[-60px] flex items-center overflow-hidden ">
        <div>
          <img
            src="/images/blue-crystal.webp"
            alt="Кристалл"
            loading="lazy"
            className="-translate-x-1/2 transform md:h-[500px] md:-translate-x-1/4"
          />
        </div>

        <div className="absolute right-0 flex max-w-[280px] flex-col  justify-end md:max-w-[860px]">
          <h2 className="mb-6 text-right  text-[21px] font-bold leading-tight text-[rgba(214,214,214,0.8)] md:text-justify md:text-[53px]">
            Проконсультируем по любому интересующему вас вопросу.
          </h2>
          <div className="flex items-center justify-end gap-[24px] md:justify-normal">
            <button
              onClick={() => openOrderForm('consultation')}
              className="max-w-[180px] rounded-[10px] bg-[#3B82F6] px-[30px] py-3 text-center text-white md:max-w-none md:px-[80px] md:py-4"
            >
              Консультация
            </button>
            <p className="text-md hidden text-[rgba(214,214,214,0.8)] md:block">
              Наши специалисты свяжутся с вами в течение 15 минут. <br /> Любым удобным для вас
              способом.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
