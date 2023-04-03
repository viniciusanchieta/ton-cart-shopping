import {
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react-native';
import { ShoppingCartContext } from '~/infra/contexts';
import ShoppingCartComponent from './shopping-cart';

const mockNavigate = jest.fn();

jest.mock('~/infra/navigation', () => ({
  useNavigation: () => ({
    navigate: mockNavigate
  })
}));

jest.mock('react-native-swipe-list-view', () => ({
  SwipeListView: (
    { data, renderItem, renderHiddenItem, keyExtractor }: any // eslint-disable-line
  ) => {
    return (
      renderItem({ item: data[0] }),
      renderHiddenItem({ item: data[0] }),
      keyExtractor(data[0])
    );
  }
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

const makeSut = () =>
  render(
    <ShoppingCartContext.Provider value={defaultContextState}>
      <ShoppingCartComponent />
    </ShoppingCartContext.Provider>
  );

describe('ShoppingCartComponent', () => {
  describe('Render', () => {
    it('should render', async () => {
      makeSut();
      await waitFor(() => {
        const component = screen.getByTestId('shopping-cart-list');
        expect(component).toBeTruthy();
      });
    });
  });

  describe('Navigation', () => {
    it('should navigate to shopping cart', () => {
      makeSut();
      const backButton = screen.getByTestId('back-button');
      fireEvent.press(backButton);
      expect(mockNavigate).toHaveBeenCalledWith('ProductList');
    });
  });
});
