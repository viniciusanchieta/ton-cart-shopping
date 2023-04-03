import { LogBox } from 'react-native';
import { ShoppingCartProvider } from '~/infra/providers';
import {
  MakeProductListScreen,
  MakeShoppingCartScreen
} from '~/main/factories/screens';
import { BaseNavigationComponent } from '~/presentation/navigation';

export default function App() {
  LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate`']);

  return (
    <ShoppingCartProvider>
      <BaseNavigationComponent
        screens={[
          {
            name: 'ProductList',
            component: MakeProductListScreen
          },
          {
            name: 'ShoppingCart',
            component: MakeShoppingCartScreen
          }
        ]}
      />
    </ShoppingCartProvider>
  );
}
