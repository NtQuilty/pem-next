export const formatPhoneNumber = (phone: string): string => {
  const digits = phone.replace(/\D/g, '');
  const normalizedPhone = digits.startsWith('7') ? digits : `7${digits}`;

  return normalizedPhone.replace(/^7(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($1) $2 $3 $4');
};
