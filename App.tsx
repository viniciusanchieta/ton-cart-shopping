import { Text, View } from 'react-native';
import { MakeProductListScreen } from '~/main/factories/screens';
import { BaseNavigationComponent } from '~/presentation/navigation';

function CartScreen() {
  return (
    <View>
      <Text
        style={{
          color: 'black'
        }}
      >
        Cart
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <BaseNavigationComponent
      screens={[
        {
          name: 'ProductList',
          component: MakeProductListScreen
        },
        {
          name: 'cart',
          component: CartScreen
        }
      ]}
    />
  );
}
