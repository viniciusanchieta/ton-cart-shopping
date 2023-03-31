import { StyleSheet } from 'react-native';
import baseTheme from '~/presentation/common/themes/base-theme';

const { colors } = baseTheme;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgMain,
    marginHorizontal: 16
  }
});
