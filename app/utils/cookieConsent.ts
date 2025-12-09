export const COOKIE_CONSENT_KEY = 'cookie-consent';

export const hasCookieConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted';
};

export const setCookieConsent = (accepted: boolean): void => {
  if (typeof window === 'undefined') return;
  if (accepted) {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
  } else {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
  }
};
