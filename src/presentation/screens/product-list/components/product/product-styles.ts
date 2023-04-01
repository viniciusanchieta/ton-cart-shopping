import { StyleSheet } from 'react-native';
import baseTheme from '~/presentation/common/themes/base-theme';

const { colors, fonts } = baseTheme;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    width: '47%'
  },
  price: {
    textAlign: 'center',
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.green
  },
  name: {
    textAlign: 'center',
    marginTop: 8,
    fontFamily: fonts.semiBold,
    fontSize: 15,
    color: colors.black,
    textTransform: 'capitalize'
  },
  backgroundImage: {
    position: 'relative',
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: colors.greenLight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 94,
    height: 94,
    position: 'absolute',
    resizeMode: 'contain'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 155
  },
  buttonText: {
    fontFamily: fonts.medium,
    fontSize: 12
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.grayLight
  },
  flagProduct: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 12,
    paddingHorizontal: 7,
    backgroundColor: colors.orangeLight,
    color: colors.orangeDark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fonts.medium
  }
});
