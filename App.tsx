import React from 'react';
import { BaseLayoutComponent } from '~/presentation/common/layouts';
import { ProductListTag } from '~/presentation/screens';

function App(): JSX.Element {
  return (
    <BaseLayoutComponent>
      <ProductListTag />
    </BaseLayoutComponent>
  );
}
export default App;
