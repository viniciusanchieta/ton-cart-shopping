import { StyleSheet } from 'react-native';
import baseTheme from '~/presentation/common/themes/base-theme';

const { colors, fonts } = baseTheme;

export const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  content: {
    backgroundColor: colors.red,
    height: 100,
    width: 74,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 3,
    borderLeftColor: colors.bgSecondary,
    position: 'absolute',
    right: 0
  }
});
