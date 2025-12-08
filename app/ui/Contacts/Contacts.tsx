import React from 'react';
import { BsFillGeoAltFill, BsTelephoneFill } from 'react-icons/bs';
import { FaRegClock, FaTelegram } from 'react-icons/fa';
import { TbBrandMessenger, TbMailFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { EMAIL, TELEPHONE_NUMBER } from '../../config';
import { formatPhoneNumber } from '../../helpers';

export const Contacts: React.FC = () => {
  return (
    <section className="relative mx-auto flex min-h-screen w-full flex-col pt-[92px] md:pt-[100px] lg:relative">
      <div className="lg:py-25 z-[5] w-full rounded-2xl bg-[#13151e]/90 p-6 backdrop-blur-md lg:absolute lg:left-[5%] lg:top-[20%] lg:max-w-lg lg:p-10 lg:px-20">
        <h1 className="heading-h1 mb-8">Контакты</h1>

        <div className="space-y-8">
          <div className="flex items-start">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1b1e29]">
              <BsTelephoneFill size={18} className="text-white" />
            </div>
            <div>
              <p className="text-body-sm">Телефон</p>
              <Link
                to={`tel:${TELEPHONE_NUMBER}`}
                className="text-body hover:text-accent transition-colors"
              >
                {formatPhoneNumber(TELEPHONE_NUMBER)}
              </Link>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1b1e29]">
              <BsFillGeoAltFill size={18} className="text-white" />
            </div>
            <div>
              <p className="text-body-sm">Адрес</p>{' '}
              <p className="text-body">г. Санкт-Петербург, ул. Седова 57</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1b1e29]">
              <FaRegClock size={18} className="text-white" />
            </div>
            <div>
              <p className="text-body-sm">Режим работы</p>
              <p className="text-body">Пн. - Пт.: с 10:00 до 19:00</p>
              <p className="text-body">Сб. - Вс.: выходные</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1b1e29]">
              <TbMailFilled size={18} className="text-white" />
            </div>
            <div>
              <p className="text-body-sm">E-mail</p>
              <Link
                to={`mailto:${EMAIL}`}
                className="text-body hover:text-accent transition-colors"
              >
                {EMAIL}
              </Link>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1b1e29]">
              <TbBrandMessenger size={18} className="text-white" />
            </div>
            <div>
              <p className="text-body-sm">Мессенджеры</p>
              <div className="mt-2">
                <Link
                  to="https://t.me/nrgmru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#1b1e29] px-4 py-2 text-white transition-colors hover:bg-[#252a39]"
                >
                  <FaTelegram className="mr-2" /> Telegram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Фоновая карта - снизу на мобильных */}
      <div className="h-[60vh] w-full lg:absolute lg:inset-0 lg:h-screen lg:max-h-screen lg:overflow-hidden">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A1_bPGipJIRyuCIuWrZ2dVK6CYVPMo0Rz&amp;source=constructor&amp;ll=30.424308%2C59.880216&amp;z=16&amp;pt=30.426208%2C59.880216,pm2rdl~%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%AD%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D0%9C%D0%B0%D1%88&amp;scroll=false"
          width="100%"
          height="100%"
          className="opacity-70 lg:opacity-70"
        ></iframe>
      </div>
    </section>
  );
};
