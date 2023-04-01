import { BaseLayoutComponent } from '~/presentation/common/layouts';
import { ProductListScreen } from '~/presentation/screens';

export function MakeProductListScreen() {
  return (
    <BaseLayoutComponent>
      <ProductListScreen />
    </BaseLayoutComponent>
  );
}
