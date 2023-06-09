import { StyleSheet } from 'react-native';
import baseTheme from '~/presentation/common/themes/base-theme';

const { colors } = baseTheme;

export const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: colors.bgMain,
    paddingHorizontal: 10,
    paddingTop: 20
  },
  containerSecondary: {
    backgroundColor: colors.bgSecondary,
    paddingHorizontal: 10,
    paddingTop: 20
  },
  content: {
    paddingHorizontal: 20
  }
});
