import { fireEvent, render, screen } from '@testing-library/react-native';
import { ShoppingCartContext } from '~/infra/contexts';
import type { ProductProps } from './interfaces';
import ProductComponent from './product';

const defaultProps: ProductProps = {
  id: 1,
  name: 'banana',
  price: 'R$ 2,00',
  release: true,
  urlImage: 'https://image.com/image.png'
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

    it('should render without release', () => {
      defaultProps.release = false;
      makeSut();
      const textRelease = screen.queryByText('Novo');
      expect(textRelease).toBeNull();
    });
  });

  describe('Interaction', () => {
    it('should add to cart', () => {
      defaultProps.name = 'pineapple';
      defaultProps.id = 10;
      makeSut();
      const button = screen.getByTestId('button-add-to-cart-pineapple');
      fireEvent.press(button);
      expect(button).toBeTruthy();
    });

    it('should increment quantity', () => {
      makeSut();
      const buttonAddCart = screen.getByTestId('button-add-to-cart-pineapple');
      fireEvent.press(buttonAddCart);
      const buttonIncrement = screen.getByTestId(
        'button-increment-quantity-pineapple'
      );
      fireEvent.press(buttonIncrement);
      const textQuantity = screen.getByTestId('text-quantity');
      expect(textQuantity).toHaveTextContent('2');
    });

    it('should decrement quantity', () => {
      makeSut();
      const buttonAddCart = screen.getByTestId('button-add-to-cart-pineapple');
      fireEvent.press(buttonAddCart);
      const buttonIncrement = screen.getByTestId(
        'button-increment-quantity-pineapple'
      );
      fireEvent.press(buttonIncrement);
      const buttonDecrement = screen.getByTestId(
        'button-decrement-quantity-pineapple'
      );
      fireEvent.press(buttonDecrement);
      const textQuantity = screen.getByTestId('text-quantity');
      expect(textQuantity).toHaveTextContent('1');
    });

    it('should remove from cart', () => {
      makeSut();
      const buttonAddCart = screen.getByTestId('button-add-to-cart-pineapple');
      fireEvent.press(buttonAddCart);
      const buttonDecrement = screen.getByTestId(
        'button-decrement-quantity-pineapple'
      );
      fireEvent.press(buttonDecrement);
    });

    it('should increment quantity in apple item', () => {
      defaultProps.id = 2;
      defaultProps.name = 'apple';
      makeSut();
      const buttonAddCart = screen.getByTestId('button-add-to-cart-apple');
      fireEvent.press(buttonAddCart);
      const buttonIncrement = screen.getByTestId(
        'button-increment-quantity-apple'
      );
      fireEvent.press(buttonIncrement);
      const textQuantity = screen.getByTestId('text-quantity');
      expect(textQuantity).toHaveTextContent('2');
    });

    it('should increment quantity in apple item with context state empty', () => {
      defaultContextState.contextState.items = [];
      defaultProps.id = 2;
      defaultProps.name = 'apple';
      makeSut();
      const buttonAddCart = screen.getByTestId('button-add-to-cart-apple');
      fireEvent.press(buttonAddCart);

      const textQuantity = screen.getByTestId('text-quantity');
      expect(textQuantity).toHaveTextContent('1');
    });

    it('should decrement quantity in orange item', () => {
      defaultProps.id = 5;
      defaultProps.name = 'orange';
      defaultContextState.contextState.items = [
        {
          id: 5,
          name: 'orange',
          price: 'R$ 2,00',
          new: true,
          image: 'https://image.com/image.png',
          quantity: 2
        }
      ];
      makeSut();
      const buttonIncrement = screen.getByTestId(
        'button-increment-quantity-orange'
      );
      fireEvent.press(buttonIncrement);
      const buttonDecrement = screen.getByTestId(
        'button-decrement-quantity-orange'
      );
      fireEvent.press(buttonDecrement);
      const textQuantity = screen.getByTestId('text-quantity');
      expect(textQuantity).toHaveTextContent('2');
    });

    it('should remove from cart in apple item', () => {
      defaultProps.id = 2;
      defaultProps.name = 'apple';
      defaultContextState.contextState.items = [
        {
          id: 2,
          name: 'apple',
          price: 'R$ 2,00',
          new: true,
          image: 'https://image.com/image.png',
          quantity: 1
        }
      ];
      makeSut();
      const buttonDecrement = screen.getByTestId(
        'button-decrement-quantity-apple'
      );
      fireEvent.press(buttonDecrement);
    });

    it('should context initial empty and add to cart', () => {
      defaultContextState.contextState.items = [];
      defaultProps.id = 2;
      defaultProps.name = 'apple';
      makeSut();
      const button = screen.getByTestId('button-add-to-cart-apple');
      fireEvent.press(button);
      expect(button).toBeTruthy();
    });

    it('should context initial with three items and add to cart', () => {
      defaultContextState.contextState.items = [
        {
          id: 1,
          name: 'banana',
          price: 'R$ 2,00',
          new: true,
          image: 'https://image.com/image.png',
          quantity: 1
        },
        {
          id: 2,
          name: 'apple',
          price: 'R$ 2,00',
          new: true,
          image: 'https://image.com/image.png',
          quantity: 1
        },
        {
          id: 5,
          name: 'orange',
          price: 'R$ 2,00',
          new: true,
          image: 'https://image.com/image.png',
          quantity: 1
        }
      ];
      defaultProps.id = 2;
      defaultProps.name = 'apple';
      makeSut();
      const buttonIncrement = screen.getByTestId(
        'button-increment-quantity-apple'
      );
      fireEvent.press(buttonIncrement);
      expect(buttonIncrement).toBeTruthy();
    });
  });
});
