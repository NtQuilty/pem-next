import { Menu, MenuItem, Tooltip } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TbMailFilled } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { EMAIL, navigationLinks, NavigationOption, TELEPHONE_NUMBER } from '../../config';
import { useOrderForm } from '../../contexts/OrderFormContext';
import { SocialLink } from '../Footer/components/SocialLink';
import { HeaderDrawer } from './components/HeaderDrawer';

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { openOrderForm } = useOrderForm();
  const location = useLocation();

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

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setServicesAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 py-4 transition-all duration-300 ${
        isScrolled || location.pathname === '/contacts'
          ? 'bg-[rgba(19,21,30,0.5)] shadow-header backdrop-blur-[57.5px]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-4 md:max-w-[1350px]">
        <button onClick={toggleDrawer(true)} className="ml-3 block lg:hidden" aria-label="Меню">
          <RxHamburgerMenu size={24} color="white" />
        </button>

        <Link to="/" className="relative z-10 ml-10">
          <img
            src="/images/logo.webp"
            alt="logo"
            className="h-[60px] w-[150px] md:h-[75px] md:w-[180px]"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-around lg:flex">
          {navigationLinks.map(navigationLink => {
            if (navigationLink.id === 'home') return null;

            if (navigationLink.options) {
              return (
                <div
                  key={navigationLink.id}
                  className="group relative"
                  onMouseEnter={handleClick}
                  onMouseLeave={handleClose}
                >
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[rgba(48,152,255,0.35)] opacity-0 blur-[50px] transition-opacity duration-300 group-hover:opacity-100"></div>
                  <button className="flex items-center justify-center gap-1 text-base text-[#a7a8ab] transition-colors group-hover:text-[#3198ff]">
                    {navigationLink.title}
                    <div className="mt-[3px]">
                      {servicesAnchorEl ? (
                        <MdKeyboardArrowLeft
                          size={24}
                          className="transition-colors group-hover:text-[#3198ff]"
                        />
                      ) : (
                        <MdKeyboardArrowDown
                          size={24}
                          className="transition-colors group-hover:text-[#3198ff]"
                        />
                      )}
                    </div>
                  </button>
                  <Menu
                    id="services-menu"
                    anchorEl={servicesAnchorEl}
                    keepMounted
                    open={Boolean(servicesAnchorEl)}
                    onClose={handleClose}
                    disableScrollLock={true}
                    MenuListProps={{
                      onMouseLeave: handleClose,
                    }}
                  >
                    {navigationLink.options.map((option: NavigationOption) => (
                      <MenuItem
                        key={option.id}
                        onClick={handleClose}
                        className="text-[#a7a8ab] hover:bg-[rgba(49,152,255,0.1)]"
                      >
                        <Link key={option.id} to={option.link} className="w-full px-2 py-1">
                          {option.title}
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              );
            }

            return (
              <div key={navigationLink.id} className="group relative">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[rgba(48,152,255,0.35)] opacity-0 blur-[50px] transition-opacity duration-300 group-hover:opacity-100"></div>
                <Link
                  to={navigationLink.link}
                  className="text-base text-[#a7a8ab] transition-colors hover:text-[#3198ff]"
                >
                  {navigationLink.title}
                </Link>
              </div>
            );
          })}
        </div>

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

        {/* Правая часть десктопного хедера - скрыта на мобильных */}
        <div className="hidden items-center gap-[16px] lg:flex">
          <div className="group relative">
            <button
              onClick={() => openOrderForm('order')}
              className="rounded-xl bg-[#3198ff] px-[40px] py-[10px] text-lg text-[#fff] transition-colors group-hover:bg-[#1d80e2]"
            >
              Заказать
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное боковое меню */}
      <HeaderDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </header>
  );
};
