import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '~/infra/navigation';
import type { UseNavigationProps } from '~/infra/navigation/interfaces';
import { ShoppingCartSimpleIcon } from '~/presentation/common/icons';
import baseTheme from '~/presentation/common/themes/base-theme';
import { ProductComponent } from '~/presentation/screens/product-list/components';
import { styles } from './product-list-styles';

function ProductListComponent() {
  const navigation = useNavigation<UseNavigationProps>();

  const handlePress = () => {
    navigation.navigate('cart');
  };

  const products = [
    {
      id: 0,
      name: 'banana',
      new: true,
      price: 'R$ 2,00',
      image:
        'https://cdn.pixabay.com/photo/2016/02/23/17/29/banana-1218133_1280.png'
    },
    {
      id: 1,
      name: 'maçã',
      new: false,
      price: 'R$ 1,00',
      image: 'https://pngimg.com/uploads/apple/apple_PNG12464.png'
    },
    {
      id: 2,
      name: 'laranja',
      new: true,
      price: 'R$ 1,50',
      image:
        'https://cdn.pixabay.com/photo/2016/02/25/17/08/fruit-1222488_960_720.png'
    },
    {
      id: 3,
      name: 'abacaxi',
      new: false,
      price: 'R$ 3,00',
      image:
        'https://freepngimg.com/download/pineapple/4-2-pineapple-transparent.png'
    },
    {
      id: 4,
      name: 'uva',
      new: false,
      price: 'R$ 6,00',
      image:
        'https://www.pngplay.com/wp-content/uploads/1/Black-Grapes-PNG-Image.png'
    },
    {
      id: 5,
      name: 'kiwi',
      new: true,
      price: 'R$ 4,00',
      image:
        'https://i.pinimg.com/originals/1b/37/70/1b377055905924133a3b5f06604fbb75.png'
    },
    {
      id: 6,
      name: 'manga',
      new: true,
      price: 'R$ 3,50',
      image:
        'https://www.darosbr.com/site/wp-content/uploads/2014/12/mangakent3.png'
    },
    {
      id: 7,
      name: 'melancia',
      new: false,
      price: 'R$ 5,00',
      image:
        'https://www.pngplay.com/wp-content/uploads/6/Red-Half-Sweet-Watermelon-PNG.png'
    }
  ];

  return (
    <View>
      <View style={styles.container} testID='product-list'>
        <TouchableOpacity
          style={styles.button}
          testID='cart-button'
          onPress={handlePress}
        >
          <View style={styles.hasItems} />
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

export default ProductListComponent;
