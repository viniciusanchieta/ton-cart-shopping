import { fireEvent, render, screen } from '@testing-library/react-native';
import ProductListComponent from './product-list';

const mockNavigate = jest.fn();

jest.mock('~/infra/navigation', () => ({
  useNavigation: () => ({
    navigate: mockNavigate
  })
}));

const makeSut = () => render(<ProductListComponent />);

describe('Product list component', () => {
  beforeEach(() => {
    makeSut();
  });

  describe('Render', () => {
    it('should render', () => {
      const component = screen.getByTestId('product-list');
      expect(component).toBeTruthy();
    });
  });

  describe('Navigation', () => {
    it('should navigate to cart', () => {
      const cartButton = screen.getByTestId('cart-button');
      fireEvent.press(cartButton);
      expect(mockNavigate).toHaveBeenCalledWith('cart');
    });
  });
});
