import { BaseLayoutComponent } from '~/presentation/common/layouts';
import { ShoppingCartScreen } from '~/presentation/screens';

export function MakeShoppingCartScreen() {
  return (
    <BaseLayoutComponent background='secondary'>
      <ShoppingCartScreen />
    </BaseLayoutComponent>
  );
}
