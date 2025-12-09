'use client';

import React from 'react';
import { deliveryInfo } from '../delivery-const';

export const DeliverySection: React.FC = () => {
  return (
    <div className="mt-30 bg-[#13151e]">
      <div className="mx-auto px-4 md:max-w-[1350px]">
        <h2 className="heading-md mb-6">{deliveryInfo.mainTitle}</h2>
        <p className="mb-8 text-[rgba(214,214,214,0.8)] md:mb-12">{deliveryInfo.intro}</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {deliveryInfo.sections.map(section => (
            <div
              key={section.title}
              className="group rounded-2xl border border-gray-700/30 bg-[#1b1e29] p-6 transition-all duration-200 hover:border-gray-600/50"
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
                  {section.content.map((text, index) => (
                    <p
                      key={index}
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
  );
};
