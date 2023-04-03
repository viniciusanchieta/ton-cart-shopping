import { fireEvent, render, screen } from '@testing-library/react-native';
import { ShoppingCartContext } from '~/infra/contexts';
import DeleteButtonComponent from './delete-button';
import type { DeleteButtonProps } from './interfaces';

const defaultProps: DeleteButtonProps = {
  productId: 1,
  productName: 'banana'
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
      <DeleteButtonComponent {...defaultProps} />
    </ShoppingCartContext.Provider>
  );

describe('DeleteButtonComponent', () => {
  describe('Render', () => {
    it('should render', () => {
      makeSut();
      const component = screen.getByTestId('delete-button-banana');
      expect(component).toBeTruthy();
    });
  });

  describe('Interaction', () => {
    it('should delete from cart', () => {
      makeSut();
      const button = screen.getByTestId('delete-button-banana');
      fireEvent.press(button);
      expect(defaultContextState.setContextState).toHaveBeenCalledWith({
        items: []
      });
    });
  });
});
