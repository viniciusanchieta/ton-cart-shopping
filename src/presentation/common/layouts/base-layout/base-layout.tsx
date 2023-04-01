import { SafeAreaView, View } from 'react-native';
import { styles } from './base-layout-styles';
import { BaseLayoutProps } from './interfaces';

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <SafeAreaView style={styles.container} testID='base-layout'>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

export default BaseLayout;
