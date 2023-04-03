import { Text, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useShoppingCartContext } from '~/infra/hooks';
import { useNavigation, type UseNavigationProps } from '~/infra/navigation';
import { ArrowLeftIcon } from '~/presentation/common/icons';
import baseTheme from '~/presentation/common/themes/base-theme';
import {
  DeleteButtonComponent,
  ProductComponent
} from '~/presentation/screens/shopping-cart/components';
import { styles } from './shopping-cart-styles';

function ShoppingCartComponent() {
  const {
    contextState: { items }
  } = useShoppingCartContext();

  const navigation = useNavigation<UseNavigationProps>();

  function handlePress(): void {
    navigation.navigate('ProductList');
  }

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handlePress}
          testID='back-button'
        >
          <ArrowLeftIcon
            size={24}
            color={baseTheme.colors.black}
            weight='regular'
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Carrinho</Text>
      </View>
      <View style={styles.content} testID='shopping-cart-list'>
        <Text style={styles.contentTitle}>
          {items.length} produtos adicionados:
        </Text>
        <View style={styles.list}>
          <SwipeListView
            contentContainerStyle={styles.contentContainerStyle}
            data={items}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <ProductComponent
                urlImage={item.image}
                price={item.price}
                quantity={item.quantity}
                name={item.name}
                id={item.id}
              />
            )}
            renderHiddenItem={({ item }) => (
              <DeleteButtonComponent
                productId={item.id}
                productName={item.name}
              />
            )}
            rightOpenValue={-75}
            recalculateHiddenLayout={true}
            disableRightSwipe
            useAnimatedList
          />
        </View>
      </View>
    </>
  );
}

export default ShoppingCartComponent;
