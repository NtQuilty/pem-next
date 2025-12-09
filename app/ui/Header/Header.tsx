'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tooltip } from '@mui/material';
import { BsTelephoneFill } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TbMailFilled } from 'react-icons/tb';
import { EMAIL, navigationLinks, TELEPHONE_NUMBER } from '../../config';
import { useOrderForm } from '../../contexts/OrderFormContext';
import { SocialLink } from '../Footer/components/SocialLink';
import { HeaderDrawer } from './components/HeaderDrawer';

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { openOrderForm } = useOrderForm();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 py-4 transition-all duration-300 ${
        isScrolled || pathname === '/contacts'
          ? 'bg-[rgba(19,21,30,0.5)] shadow-header backdrop-blur-[57.5px]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-4 md:max-w-[1350px]">
        <button onClick={toggleDrawer(true)} className="ml-3 block lg:hidden" aria-label="Меню">
          <RxHamburgerMenu size={24} color="white" />
        </button>

        <Link href="/" className="relative z-10 ml-10">
          <Image
            src="/images/logotip.webp"
            alt="logo"
            width={180}
            height={75}
            className="h-[60px] w-[150px] md:h-[75px] md:w-[180px]"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-around lg:flex">
          {navigationLinks.map(navigationLink => {
            if (navigationLink.id === 'home') return null;

            if (navigationLink.options) {
              return (
                <div key={navigationLink.id} className="group relative">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[rgba(48,152,255,0.35)] opacity-0 blur-[50px] transition-opacity duration-300 group-hover:opacity-100"></div>
                  
                  <span className="relative cursor-pointer text-base text-[#a7a8ab] transition-colors duration-300 hover:text-[#3198ff]">
                    {navigationLink.title}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-linear-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>

                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
                    <div className="min-w-[200px] rounded-lg bg-[#1d2233] shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <ul className="py-2">
                        {navigationLink.options.map(option => (
                          <li key={option.id}>
                            <Link
                              href={option.link}
                              className="block px-4 py-2 text-sm text-[#a7a8ab] transition-all duration-300 hover:bg-[rgba(49,152,255,0.1)] hover:text-blue-400 hover:translate-x-2"
                            >
                              <span className="relative inline-block">
                                {option.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={navigationLink.id} className="group relative">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[rgba(48,152,255,0.35)] opacity-0 blur-[50px] transition-opacity duration-300 group-hover:opacity-100"></div>
                <Link
                  href={navigationLink.link}
                  className="relative text-base text-[#a7a8ab] transition-colors duration-300 hover:text-[#3198ff]"
                >
                  <span className="relative inline-block">
                    {navigationLink.title}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-6 md:mr-10">
          <Tooltip
            title={TELEPHONE_NUMBER}
            arrow
            placement="bottom"
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: '#1d2233',
                  color: '#3198ff',
                  '& .MuiTooltip-arrow': {
                    color: '#1d2233',
                  },
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  fontWeight: 'medium',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '14px',
                },
              },
            }}
          >
            <span>
              <SocialLink to={`tel:${TELEPHONE_NUMBER}`} icon={BsTelephoneFill} size="24" />
            </span>
          </Tooltip>

          <Tooltip
            title={EMAIL}
            arrow
            placement="bottom"
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: '#1d2233',
                  color: '#3198ff',
                  '& .MuiTooltip-arrow': {
                    color: '#1d2233',
                  },
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  fontWeight: 'medium',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '14px',
                },
              },
            }}
          >
            <span>
              <SocialLink to={`mailto:${EMAIL}`} icon={TbMailFilled} size="24" />
            </span>
          </Tooltip>
        </div>

        <div className="hidden items-center gap-[16px] lg:flex">
          <div className="group relative">
            <button
              onClick={() => openOrderForm('order')}
              className="cursor-pointer rounded-xl bg-[#3198ff] px-[40px] py-[10px] text-lg text-white transition-colors group-hover:bg-[#1d80e2]"
            >
              Заказать
            </button>
          </div>
        </div>
      </div>

      <HeaderDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </header>
  );
};
