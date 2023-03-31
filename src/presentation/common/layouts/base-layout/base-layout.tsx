import { SafeAreaView } from 'react-native';
import { styles } from './base-layout-styles';
import { BaseLayoutProps } from './interfaces';

function BaseLayout({ children }: BaseLayoutProps) {
  const { container } = styles;

  return (
    <SafeAreaView testID='base-layout' style={container}>
      {children}
    </SafeAreaView>
  );
}

export default BaseLayout;
