import { createContext } from 'react';
import type { ShoppingCartContextType } from '~/domain/contexts';

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);
