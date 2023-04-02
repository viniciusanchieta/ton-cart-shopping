import React from 'react';
import type { ShoppingCartItemsContextType } from '~/domain/contexts';

export interface ShoppingCartProviderProps {
  children: React.ReactNode;
  items?: ShoppingCartItemsContextType;
}
