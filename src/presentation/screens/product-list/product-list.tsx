import { Warning } from 'phosphor-react-native';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useShoppingCartContext } from '~/infra/hooks';
import type { UseNavigationProps } from '~/infra/navigation';
import { useNavigation } from '~/infra/navigation';
import { ShoppingCartSimpleIcon } from '~/presentation/common/icons';
import baseTheme from '~/presentation/common/themes/base-theme';
import { ProductComponent } from '~/presentation/screens/product-list/components';
import type { ProductListProps } from '~/presentation/screens/product-list/interfaces';
import { styles } from './product-list-styles';

function ProductListComponent({ products, error, loading }: ProductListProps) {
  const navigation = useNavigation<UseNavigationProps>();

  const {
    contextState: { items }
  } = useShoppingCartContext();

  function handlePress() {
    navigation.navigate('ShoppingCart');
  }

  function handleLoading() {
    if (error) {
      return (
        <View style={styles.status}>
          <View>
            <Warning color={baseTheme.colors.black} weight='light' size={60} />
          </View>
          <View>
            <Text style={styles.statusMessage}>
              Erro no carregamento de produtos
            </Text>
            <Text style={styles.statusMessage}>Tente novamente!</Text>
          </View>
        </View>
      );
    }

    if (loading) {
      return (
        <View style={styles.status}>
          <ActivityIndicator size='large' testID='loading' />
        </View>
      );
    }

    function checkIfHasItemsInShoppingCart(): JSX.Element | undefined {
      if (items?.length) {
        return (
          <View testID='has-items-in-shopping-cart' style={styles.hasItems} />
        );
      }
    }

    return (
      <View>
        <View style={styles.container} testID='product-list'>
          <TouchableOpacity
            style={styles.button}
            testID='cart-button'
            onPress={handlePress}
          >
            {checkIfHasItemsInShoppingCart()}
            <ShoppingCartSimpleIcon
              color={baseTheme.colors.bgMain}
              weight='light'
              size={28}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Produtos</Text>
          <View style={styles.list}>
            <FlatList
              columnWrapperStyle={styles.columnWrapperStyle}
              contentContainerStyle={styles.contentContainerStyle}
              numColumns={2}
              data={products}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <ProductComponent
                  name={item.name}
                  price={item.price}
                  release={item.new}
                  urlImage={item.image}
                  id={item.id}
                />
              )}
              keyExtractor={item => item.name}
            />
          </View>
        </View>
      </View>
    );
  }

  return <>{handleLoading()}</>;
}

export default ProductListComponent;
