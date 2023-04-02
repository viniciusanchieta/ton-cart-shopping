import { useState } from 'react';
import type { ShoppingCartItemsContextType } from '~/domain/contexts';
import { ShoppingCartContext } from '~/infra/contexts';
import type { ShoppingCartProviderProps } from './interfaces';

export const ShoppingCartProvider = ({
  children,
  items
}: ShoppingCartProviderProps) => {
  const [contextState, setContextState] =
    useState<ShoppingCartItemsContextType>(items || { items: [] });
  return (
    <ShoppingCartContext.Provider value={{ contextState, setContextState }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
