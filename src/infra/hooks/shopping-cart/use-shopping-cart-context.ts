import { useContext } from 'react';
import type { ShoppingCartContextType } from '~/domain/contexts';
import { ShoppingCartContext } from '~/infra/contexts';

export function useShoppingCartContext(): ShoppingCartContextType {
  const context = useContext(ShoppingCartContext);

  return context;
}
