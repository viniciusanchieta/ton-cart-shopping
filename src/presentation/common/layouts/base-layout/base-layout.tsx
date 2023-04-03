import { SafeAreaView, View } from 'react-native';
import { styles } from './base-layout-styles';
import { BaseLayoutProps } from './interfaces';

function BaseLayout({ children, background }: BaseLayoutProps) {
  function handleBackground() {
    const backgroundIsMain = background === 'main';
    if (backgroundIsMain) {
      return styles.containerMain;
    }

    return styles.containerSecondary;
  }

  return (
    <SafeAreaView style={handleBackground()} testID='base-layout'>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

export default BaseLayout;
