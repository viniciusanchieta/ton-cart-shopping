import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useShoppingCartContext } from '~/infra/hooks';
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

  const { setContextState, contextState } = useShoppingCartContext();

  function handleState(key: string, value: boolean | number): void {
    setState(prevState => ({ ...prevState, [key]: value }));
  }

  function handleStateByContext(): void {
    const productExists = contextState.items?.find(item => item.id === id);

    if (!productExists) {
      return handleState('addedToCart', false);
    }

    handleState('addedToCart', true);
    handleState('quantity', productExists.quantity);
  }

  function handleRelease(): JSX.Element | undefined {
    if (!release) {
      return;
    }

    return <Text style={styles.flagProduct}>Novo</Text>;
  }

  function handleQuantityInContext(action: 'increment' | 'decrement'): void {
    const productExists = contextState.items?.find(item => item.id === id);

    if (productExists) {
      const newItems = contextState.items
        ?.map(item => {
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

          if (
            idIsEqual &&
            !actionIsIncrement &&
            quantityIsLessThanOrEqualToZero
          ) {
            return null;
          }

          return item;
        })
        .filter(Boolean);

      setContextState({
        ...contextState,
        items: newItems as []
      });
    } else {
      setContextState({
        items: [
          ...contextState.items,
          {
            id,
            name,
            price,
            image: urlImage,
            quantity: 1
          }
        ]
      });
    }
  }

  function handleButtonAddToCart(): void {
    handleState('addedToCart', true);
    handleState('quantity', 1);
    handleQuantityInContext('increment');
  }

  function handleUpdateQuantity(action: 'increment' | 'decrement'): void {
    const quantityIsZero = state.quantity <= 1;
    const actionIsIncrement = action === 'increment';

    if (!actionIsIncrement && quantityIsZero) {
      handleState('addedToCart', false);
      handleQuantityInContext('decrement');
      return;
    }

    if (actionIsIncrement) {
      handleState('quantity', state.quantity + 1);
      handleQuantityInContext('increment');
    } else {
      handleState('quantity', state.quantity - 1);
      handleQuantityInContext('decrement');
    }
  }

  function handleButtonAddQuantityComponent(): JSX.Element {
    if (!state.addedToCart) {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={handleButtonAddToCart}
          testID={`button-add-to-cart-${name}`}
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
          testID={`button-decrement-quantity-${name}`}
        >
          <MinusIcon color={baseTheme.colors.green} weight='bold' size={14} />
        </TouchableOpacity>
        <Text style={styles.buttonText} testID='text-quantity'>
          {state.quantity}
        </Text>
        <TouchableOpacity
          onPress={() => handleUpdateQuantity('increment')}
          testID={`button-increment-quantity-${name}`}
        >
          <PlusIcon color={baseTheme.colors.green} weight='bold' size={14} />
        </TouchableOpacity>
      </View>
    );
  }

  useEffect(() => {
    handleStateByContext();
  }, [contextState]);

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
