'use client';

import { useOrderForm } from '../contexts/OrderFormContext';
import { OrderForm } from './OrderForm/OrderForm';

export function OrderFormWrapper() {
  const { isOpen, formType, closeOrderForm } = useOrderForm();

  return <OrderForm open={isOpen} onClose={closeOrderForm} formType={formType} />;
}
