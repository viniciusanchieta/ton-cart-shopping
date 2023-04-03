import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useShoppingCartContext } from '~/infra/hooks';
import { MinusIcon, PlusIcon } from '~/presentation/common/icons';
import baseTheme from '~/presentation/common/themes/base-theme';
import { ProductProps } from './interfaces';
import { styles } from './product-styles';

function ProductComponent({
  urlImage,
  price,
  quantity,
  name,
  id
}: ProductProps) {
  const { contextState, setContextState } = useShoppingCartContext();

  function handleQuantityChange(action: 'increment' | 'decrement'): void {
    const productExists = contextState.items?.find(item => item.id === id);

    if (productExists) {
      const newItems = contextState.items?.map(item => {
        const idIsEqual = item.id === id;
        const actionIsIncrement = action === 'increment';
        const quantityIsLessThanOrEqualToZero = item.quantity <= 1;

        if (idIsEqual && actionIsIncrement) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }

        if (
          idIsEqual &&
          !actionIsIncrement &&
          !quantityIsLessThanOrEqualToZero
        ) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        }

        return item;
      });

      setContextState({
        ...contextState,
        items: newItems
      });
    }
  }

  return (
    <View style={styles.container} testID={`product-${name}`}>
      <View style={styles.backgroundImage}>
        <Image
          style={styles.image}
          source={{
            uri: urlImage
          }}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.price}>
          {price} x {quantity}
        </Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => handleQuantityChange('increment')}
          testID={`button-increment-quantity-${name}`}
        >
          <PlusIcon color={baseTheme.colors.green} weight='bold' size={16} />
        </TouchableOpacity>
        <Text style={styles.quantity} testID={`text-quantity-${name}`}>
          {quantity}
        </Text>
        <TouchableOpacity
          onPress={() => handleQuantityChange('decrement')}
          testID={`button-decrement-quantity-${name}`}
        >
          <MinusIcon color={baseTheme.colors.green} weight='bold' size={16} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProductComponent;
