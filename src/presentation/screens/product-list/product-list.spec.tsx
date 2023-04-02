import { fireEvent, render, screen } from '@testing-library/react-native';
import { ShoppingCartContext } from '~/infra/contexts';
import type { ProductListProps } from './interfaces';
import ProductListComponent from './product-list';

const mockNavigate = jest.fn();

jest.mock('~/infra/navigation', () => ({
  useNavigation: () => ({
    navigate: mockNavigate
  })
}));

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

const defaultProps: ProductListProps = {
  loading: false,
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 'R$ 10,00',
      image: 'image.png',
      new: true
    }
  ],
  error: false
};

const makeSut = () =>
  render(
    <ShoppingCartContext.Provider value={defaultContextState}>
      <ProductListComponent {...defaultProps} />
    </ShoppingCartContext.Provider>
  );

describe('Product list component', () => {
  describe('Render', () => {
    it('should render', () => {
      makeSut();
      const component = screen.getByTestId('product-list');
      expect(component).toBeTruthy();
    });

    it('should render without items in cart', () => {
      defaultContextState.contextState.items = [];
      makeSut();
      const hasItemComponent = screen.queryByTestId(
        'has-items-in-shopping-cart'
      );
      expect(hasItemComponent).toBeNull();
    });
  });

  describe('Navigation', () => {
    it('should navigate to cart', () => {
      makeSut();
      const cartButton = screen.getByTestId('cart-button');
      fireEvent.press(cartButton);
      expect(mockNavigate).toHaveBeenCalledWith('cart');
    });
  });

  describe('Product list', () => {
    it('should render product list', () => {
      makeSut();
      const product = screen.queryByText('Product 1');
      expect(product).toBeTruthy();
    });

    it('should render with loading', () => {
      defaultProps.loading = true;
      makeSut();
      const loading = screen.getByTestId('loading');
      expect(loading).toBeTruthy();
    });

    it('should render with error', () => {
      defaultProps.error = true;
      makeSut();
      const error = screen.queryByText('Erro no carregamento de produtos');
      expect(error).toBeTruthy();
    });
  });
});
