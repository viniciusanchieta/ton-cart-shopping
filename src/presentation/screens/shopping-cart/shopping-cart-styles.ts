import { StyleSheet } from 'react-native';
import baseTheme from '~/presentation/common/themes/base-theme';

const { colors, fonts } = baseTheme;

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingVertical: 34
  },
  headerTitle: {
    fontFamily: fonts.medium,
    fontSize: 18,
    color: colors.black
  },
  backButton: {
    position: 'absolute',
    left: 0
  },
  content: {
    height: '100%'
  },
  contentTitle: {
    fontFamily: fonts.medium,
    fontSize: 18,
    color: colors.black
  },
  list: {
    marginTop: 26
  },
  contentContainerStyle: {
    gap: 11
  }
});
