'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type OrderFormType = 'order' | 'consultation' | 'discount';

interface OrderFormContextType {
  isOpen: boolean;
  formType: OrderFormType;
  openOrderForm: (type: OrderFormType) => void;
  closeOrderForm: () => void;
}

const OrderFormContext = createContext<OrderFormContextType | undefined>(undefined);

export function OrderFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<OrderFormType>('order');

  const openOrderForm = (type: OrderFormType) => {
    setFormType(type);
    setIsOpen(true);
  };

  const closeOrderForm = () => {
    setIsOpen(false);
  };

  return (
    <OrderFormContext.Provider value={{ isOpen, formType, openOrderForm, closeOrderForm }}>
      {children}
    </OrderFormContext.Provider>
  );
}

export function useOrderForm() {
  const context = useContext(OrderFormContext);
  if (context === undefined) {
    throw new Error('useOrderForm must be used within an OrderFormProvider');
  }
  return context;
}
