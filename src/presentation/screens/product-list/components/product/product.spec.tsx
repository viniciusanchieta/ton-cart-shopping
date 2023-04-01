import { fireEvent, render, screen } from '@testing-library/react-native';
import type { ProductProps } from './interfaces';
import ProductComponent from './product';

const defaultProps: ProductProps = {
  id: 1,
  name: 'banana',
  price: 'R$ 2,00',
  release: true,
  urlImage: 'https://image.com/image.png'
};

const makeSut = () => render(<ProductComponent {...defaultProps} />);

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
      makeSut();
      const button = screen.getByTestId('button-add-to-cart');
      fireEvent.press(button);
      expect(button).toBeTruthy();
    });

    it('should increment quantity', () => {
      makeSut();
      const buttonAddCart = screen.getByTestId('button-add-to-cart');
      fireEvent.press(buttonAddCart);
      const buttonIncrement = screen.getByTestId('button-increment-quantity');
      fireEvent.press(buttonIncrement);
      const textQuantity = screen.getByTestId('text-quantity');
      expect(textQuantity).toHaveTextContent('2');
    });

    it('should decrement quantity', () => {
      makeSut();
      const buttonAddCart = screen.getByTestId('button-add-to-cart');
      fireEvent.press(buttonAddCart);
      const buttonIncrement = screen.getByTestId('button-increment-quantity');
      fireEvent.press(buttonIncrement);
      const buttonDecrement = screen.getByTestId('button-decrement-quantity');
      fireEvent.press(buttonDecrement);
      const textQuantity = screen.getByTestId('text-quantity');
      expect(textQuantity).toHaveTextContent('1');
    });

    it('should remove from cart', () => {
      makeSut();
      const buttonAddCart = screen.getByTestId('button-add-to-cart');
      fireEvent.press(buttonAddCart);
      const buttonDecrement = screen.getByTestId('button-decrement-quantity');
      fireEvent.press(buttonDecrement);
    });
  });
});
