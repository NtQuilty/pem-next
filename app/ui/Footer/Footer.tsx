import React from 'react';
import { ADDRESS, EMAIL, navigationLinks, TELEPHONE_NUMBER } from '../../config';
import { Link } from 'react-router-dom';
import { FaTelegram, FaVk } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { TbMailFilled } from 'react-icons/tb';
import { IoLocationSharp } from 'react-icons/io5';
import { SocialLink } from './components/SocialLink';
import { ContactItem } from './components/ContactItem';
import { NavLink } from './components/NavLink';
import { formatPhoneNumber } from '../../helpers';

export const Footer: React.FC = () => {
  const service = navigationLinks.find(item => item.id === 'laser-cutting');
  return (
    <footer className="bg-[#1a1e2c] py-8 md:py-12">
      <div className="mx-auto px-4 md:max-w-[1350px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center justify-between md:flex-col md:items-start">
            <Link to="/" className="mb-4 block md:mb-6">
              <div className="flex items-center">
                <img
                  src="/images/logo.webp"
                  alt="PEM"
                  className="h-[60px] w-[150px] md:h-[75px] md:w-[180px]"
                />
              </div>
            </Link>
            <div className="mb-6 ml-6 flex space-x-3">
              <SocialLink to="https://t.me/dmpmax" icon={FaTelegram} />
              <SocialLink to="https://vk.com/nrgmru" icon={FaVk} />
            </div>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h3 className="mb-3 text-base font-bold text-[#d6d6d6] md:mb-4 md:text-lg">
              Навигация
            </h3>
            <nav className="space-y-2 md:space-y-3">
              {navigationLinks.map(item => {
                if (item.id === 'home' || item.id === 'laser-cutting') return null;
                return (
                  <NavLink key={item.id} to={item.link}>
                    {item.title}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* Колонка 3: Услуги */}
          <div>
            <h3 className="mb-3 text-base font-bold  text-[#d6d6d6] md:mb-4 md:text-lg">Услуги</h3>
            <nav className="space-y-2 md:space-y-3">
              <NavLink key={service?.id} to={service?.link || ''}>
                {service?.title}
              </NavLink>

              {/* TODO: Если вдруг понадобятся */}
              {/* {servicesNav?.options?.map(service => (
                <NavLink key={service.id} to={service.link}>
                  {service.title}
                </NavLink>
              ))} */}
            </nav>
          </div>

          {/* Колонка 4: Контакты */}
          <div>
            <h3 className="mb-3 text-base font-bold  text-[#d6d6d6] md:mb-4 md:text-lg">
              Контакты
            </h3>
            <div className="space-y-2 md:space-y-3">
              <ContactItem to={`tel:${TELEPHONE_NUMBER}`} icon={BsTelephoneFill} size={14}>
                {formatPhoneNumber(TELEPHONE_NUMBER)}
              </ContactItem>

              <ContactItem to={`mailto:${EMAIL}`} icon={TbMailFilled} size={14}>
                {EMAIL}
              </ContactItem>

              <ContactItem
                to="https://yandex.ru/maps/org/petroenergomash/104925148159/?ll=30.426208%2C59.880216&z=17"
                icon={IoLocationSharp}
                size={14}
              >
                {ADDRESS}
              </ContactItem>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-4 md:mt-12 md:pt-6">
          <p className="text-center text-xs text-gray-500 md:text-sm">
            © {new Date().getFullYear()} Петроэнергомаш. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};
