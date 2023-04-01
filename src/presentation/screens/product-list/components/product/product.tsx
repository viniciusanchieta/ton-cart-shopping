import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  MinusIcon,
  PlusIcon,
  ShoppingCartSimpleIcon
} from '~/presentation/common/icons';
import baseTheme from '~/presentation/common/themes/base-theme';
import type { ProductProps } from './interfaces';
import { styles } from './product-styles';

function ProductComponent({
  name,
  price,
  urlImage,
  release,
  id
}: ProductProps) {
  const [state, setState] = useState({
    addedToCart: false,
    quantity: 0
  });

  function handleState(key: string, value: boolean | number) {
    setState(prevState => ({ ...prevState, [key]: value }));
  }

  function handleRelease(): JSX.Element | undefined {
    if (!release) {
      return;
    }

    return <Text style={styles.flagProduct}>Novo</Text>;
  }

  function handleButtonAddToCart(): void {
    handleState('addedToCart', true);
    handleState('quantity', 1);
  }

  function handleUpdateQuantity(action: 'increment' | 'decrement'): void {
    const quantityIsZero = state.quantity <= 1;
    const actionIsIncrement = action === 'increment';

    if (!actionIsIncrement && quantityIsZero) {
      return handleState('addedToCart', false);
    }

    if (actionIsIncrement) {
      handleState('quantity', state.quantity + 1);
    } else {
      handleState('quantity', state.quantity - 1);
    }
  }

  function handleButtonAddQuantityComponent() {
    if (!state.addedToCart) {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={handleButtonAddToCart}
          testID='button-add-to-cart'
        >
          <ShoppingCartSimpleIcon
            color={baseTheme.colors.green}
            weight='bold'
            size={14}
          />
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => handleUpdateQuantity('decrement')}
          testID='button-decrement-quantity'
        >
          <MinusIcon color={baseTheme.colors.green} weight='bold' size={14} />
        </TouchableOpacity>
        <Text style={styles.buttonText} testID='text-quantity'>
          {state.quantity}
        </Text>
        <TouchableOpacity
          onPress={() => handleUpdateQuantity('increment')}
          testID='button-increment-quantity'
        >
          <PlusIcon color={baseTheme.colors.green} weight='bold' size={14} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container} testID={`product-${name}`}>
      {handleRelease()}
      <View style={styles.backgroundImage}>
        <Image
          source={{ uri: urlImage }}
          style={styles.image}
          testID='image-product'
        />
      </View>
      <View>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.divider} />
      {handleButtonAddQuantityComponent()}
    </View>
  );
}

export default ProductComponent;
