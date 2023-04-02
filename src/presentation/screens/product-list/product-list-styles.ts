import { StyleSheet } from 'react-native';
import baseTheme from '~/presentation/common/themes/base-theme';

const { colors, fonts } = baseTheme;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  button: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.green,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  hasItems: {
    backgroundColor: colors.red,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.bgMain,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  },
  list: {
    marginTop: 30
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 18
  },
  columnWrapperStyle: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contentContainerStyle: {
    flexGrow: 1,
    gap: 40,
    paddingBottom: 400
  },
  status: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    gap: 30
  },
  statusMessage: {
    fontFamily: fonts.medium,
    fontSize: 15,
    color: colors.black,
    textAlign: 'center'
  }
});
