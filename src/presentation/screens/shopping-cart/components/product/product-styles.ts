import { StyleSheet } from 'react-native';
import baseTheme from '~/presentation/common/themes/base-theme';

const { colors, fonts } = baseTheme;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgMain,
    height: 100,
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 22,
    alignItems: 'center',
    position: 'relative'
  },
  backgroundImage: {
    position: 'relative',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.greenLight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 74,
    height: 74,
    position: 'absolute',
    resizeMode: 'contain'
  },
  info: {
    flexDirection: 'column',
    gap: 3
  },
  price: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.green
  },
  name: {
    fontFamily: fonts.semiBold,
    fontSize: 15,
    color: colors.black
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    position: 'absolute',
    right: 16
  },
  quantity: {
    fontFamily: fonts.medium,
    fontSize: 15,
    color: colors.gray
  }
});
