import { fireEvent, render, screen } from '@testing-library/react-native';
import { ShoppingCartContext } from '~/infra/contexts';
import type { ProductProps } from './interfaces';
import ProductComponent from './product';

const defaultProps: ProductProps = {
  id: 1,
  name: 'banana',
  price: 'R$ 2,00',
  urlImage: 'https://image.com/image.png',
  quantity: 1
};

const defaultContextState = {
  contextState: {
    items: [
      {
        id: 1,
        name: 'banana',
        price: 'R$ 2,00',
        new: true,
        image: 'https://image.com/image.png',
        quantity: 1
      }
    ]
  },
  setContextState: jest.fn()
};

const makeSut = () =>
  render(
    <ShoppingCartContext.Provider value={defaultContextState}>
      <ProductComponent {...defaultProps} />
    </ShoppingCartContext.Provider>
  );

describe('Product component', () => {
  describe('Render', () => {
    it('should render', () => {
      makeSut();
      const component = screen.getByTestId('product-banana');
      expect(component).toBeTruthy();
    });
  });

  describe('Interaction', () => {
    it('should increment quantity', () => {
      makeSut();
      const buttonIncrement = screen.getByTestId(
        'button-increment-quantity-banana'
      );
      fireEvent.press(buttonIncrement);
      expect(buttonIncrement).toBeTruthy();
    });

    it('should decrement quantity', () => {
      defaultProps.quantity = 2;
      defaultContextState.contextState.items[0].quantity = 2;
      makeSut();
      const buttonDecrement = screen.getByTestId(
        'button-decrement-quantity-banana'
      );
      fireEvent.press(buttonDecrement);
      expect(buttonDecrement).toBeTruthy();
    });

    it('should not decrement quantity', () => {
      defaultProps.quantity = 1;
      defaultContextState.contextState.items[0].quantity = 1;
      makeSut();
      const buttonDecrement = screen.getByTestId(
        'button-decrement-quantity-banana'
      );
      fireEvent.press(buttonDecrement);
      expect(buttonDecrement).toBeTruthy();
    });

    it('should have a product that is not in the context', () => {
      defaultProps.name = 'pineapple';
      defaultProps.id = 10;
      makeSut();
      const buttonIncrement = screen.getByTestId(
        'button-increment-quantity-pineapple'
      );
      fireEvent.press(buttonIncrement);
      expect(buttonIncrement).toBeTruthy();
    });
  });
});
