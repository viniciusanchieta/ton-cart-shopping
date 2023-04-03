import { TouchableOpacity, View } from 'react-native';
import { useShoppingCartContext } from '~/infra/hooks';
import { TrashIcon } from '~/presentation/common/icons';
import baseTheme from '~/presentation/common/themes/base-theme';
import { styles } from './delete-button-styles';
import { DeleteButtonProps } from './interfaces';

function DeleteButtonComponent({ productId, productName }: DeleteButtonProps) {
  const {
    contextState: { items },
    setContextState
  } = useShoppingCartContext();

  function handleProductDelete(): void {
    const newItems = items?.filter(item => item.id !== productId);
    setContextState({ items: newItems });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        onPress={handleProductDelete}
        testID={`delete-button-${productName}`}
      >
        <TrashIcon size={24} color={baseTheme.colors.bgMain} weight='regular' />
      </TouchableOpacity>
    </View>
  );
}

export default DeleteButtonComponent;
