import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { hasCookieConsent, COOKIE_CONSENT_KEY } from '../../utils/cookieConsent';
import { useNavigate, useLocation } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isCookiePage = location.pathname === '/cookies';

    if (!hasCookieConsent() && !isCookiePage) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    window.dispatchEvent(new Event('cookieConsentChange'));
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[50] max-w-full rounded-2xl border-t border-gray-600 bg-[#1b1e29] shadow-[0_-4px_20px_rgba(0,0,0,0.4)] md:mx-4 md:mb-[15px]">
      <div className="relative mx-auto max-w-7xl p-6 md:p-8">
        <div className=" flex flex-col gap-4">
          <Typography variant="h6" component="h2" className="heading-sm mb-4">
            Используем cookies для улучшения работы сайта
          </Typography>

          <Typography variant="body1" className="text-body mb-6">
            Наш сайт <span className="text-accent font-medium">nrg-lr.ru</span> использует файлы
            cookie, чтобы улучшить работу сайта, повысить его эффективность и удобство. Вы можете
            ознакомиться с нашими{' '}
            <button
              onClick={() => navigate('/cookies')}
              className="text-accent cursor-pointer border-none bg-transparent p-0 font-medium underline transition-colors hover:text-blue-400"
            >
              Условиями использования файлов cookie
            </button>{' '}
            для получения дополнительной информации.
          </Typography>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={handleAccept}
              className="btn-text rounded-xl bg-[#3198ff] px-8 py-3 text-white shadow-lg transition-all duration-200 hover:bg-[#1d80e2]"
            >
              Принять все файлы Сookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
