'use client';

import React from 'react';
import Image from 'next/image';
import { useOrderForm } from '../../contexts/OrderFormContext';

export const LazerCutting: React.FC = () => {
  const { openOrderForm } = useOrderForm();

  return (
    <div className="relative mx-auto bg-[#1a1e2c] pt-[92px] md:pt-[100px]">
      <div className="mx-auto px-4 md:max-w-[1350px]">
        <h1 className="heading-h1 mb-6 md:mb-12">Лазерная резка металла</h1>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/images/error-image.webp"
          alt="Лазерная резка металла"
          width={1000}
          height={1000}
          className="w-full object-cover md:h-[500px]"
        ></Image>
        <div className="absolute bg-black/50 p-4 text-white">
          <span>Произошла ошибка. Отправьте заявку через</span>{' '}
          <button onClick={() => openOrderForm('order')} className="text-[#3B82F6] underline">
            форму
          </button>
        </div>
      </div>
    </div>
  );
};
