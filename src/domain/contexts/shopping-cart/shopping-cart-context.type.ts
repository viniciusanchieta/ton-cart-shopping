import { Dispatch, SetStateAction } from 'react';
import { ShoppingCartItemsContextType } from './shopping-cart-items.type';

export type ShoppingCartContextType = {
  contextState: ShoppingCartItemsContextType;
  setContextState: Dispatch<SetStateAction<ShoppingCartItemsContextType>>;
};
