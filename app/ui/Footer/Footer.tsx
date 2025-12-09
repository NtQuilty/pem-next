import React from 'react';
import Image from 'next/image';
import { ADDRESS, EMAIL, navigationLinks, TELEPHONE_NUMBER, SOCIAL_LINKS } from '../../config';
import Link from 'next/link';
import { FaTelegram, FaVk } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { TbMailFilled } from 'react-icons/tb';
import { IoLocationSharp } from 'react-icons/io5';
import { SocialLink } from './components/SocialLink';
import { ContactItem } from './components/ContactItem';
import { NavLink } from './components/NavLink';
import { formatPhoneNumber } from '../../helpers';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-linear-to-b from-[#1a1e2c] to-[#13151e] py-12 md:py-16">
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div>
             <div className="flex items-center gap-4">
            <Link href="/" className="mb-6 inline-block transition-opacity hover:opacity-80">
              <Image
                src="/images/sticker.webp"
                alt="Петроэнергомаш"
                width={100}
                height={84}
                className="h-auto w-[180px] md:w-[200px]"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Профессиональная лазерная резка металла и металлообработка в Санкт-Петербурге
            </p>
          </div>
          <div className="flex space-x-4">
              <SocialLink to={SOCIAL_LINKS.telegramSupport} icon={FaTelegram} />
              <SocialLink to={SOCIAL_LINKS.vk} icon={FaVk} />
            </div>
          </div>
         

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Навигация
            </h3>
            <nav className="space-y-3">
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

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Контакты
            </h3>
            <div className="space-y-4">
              <ContactItem to={`tel:${TELEPHONE_NUMBER}`} icon={BsTelephoneFill} size={16}>
                {formatPhoneNumber(TELEPHONE_NUMBER)}
              </ContactItem>

              <ContactItem to={`mailto:${EMAIL}`} icon={TbMailFilled} size={16}>
                {EMAIL}
              </ContactItem>

              <ContactItem
                to="https://yandex.ru/maps/org/petroenergomash/104925148159/?ll=30.426208%2C59.880216&z=17"
                icon={IoLocationSharp}
                size={16}
              >
                {ADDRESS}
              </ContactItem>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Петроэнергомаш. Все права защищены
            </p>
            <p className="text-sm text-gray-600">
              г. Санкт-Петербург, ул. Седова 57
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
