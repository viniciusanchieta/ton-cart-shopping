import { render, screen } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import { BaseNavigationProps } from '~/presentation/navigation/base-navigation/interfaces';
import BaseNavigationComponent from './base-navigation';

jest.mock('~/infra/navigation', () => ({
  NavigationContainer: ({ children }: { children: React.ReactNode }) =>
    children,
  createNativeStackNavigator: () => ({
    Navigator: ({ children }: { children: React.ReactNode }) => children,
    Screen: ({ children }: { children: React.ReactNode }) => children
  })
}));

const defaultProps: BaseNavigationProps = {
  screens: [
    {
      name: 'Screen1',
      component: () => (
        <View>
          <Text>Cart</Text>
        </View>
      )
    }
  ]
};

const makeSut = (props = defaultProps) =>
  render(<BaseNavigationComponent {...props} />);

describe('BaseNavigationComponent', () => {
  it("should render screens that don't exist", async () => {
    makeSut();
    const screen1 = screen.queryByText('Test');
    expect(screen1).not.toBeTruthy();
  });
});
