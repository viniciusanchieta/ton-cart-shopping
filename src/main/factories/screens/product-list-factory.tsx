import { useState } from 'react';
import { LoadProducts } from '~/domain/usecases';
import { makeLoadProductsFactory } from '~/main/factories/usecases';
import { BaseLayoutComponent } from '~/presentation/common/layouts';
import { ProductListScreen } from '~/presentation/screens';

export function MakeProductListScreen() {
  const [state, setState] = useState({
    loading: true,
    products: [] as LoadProducts.Response,
    error: false as boolean
  });

  makeLoadProductsFactory()
    .load()
    .then(products => {
      setState({
        loading: false,
        products,
        error: false
      });
    })
    .catch(() => {
      setState({
        loading: false,
        products: [],
        error: true
      });
    });

  return (
    <BaseLayoutComponent background='main'>
      <ProductListScreen
        error={state.error}
        loading={state.loading}
        products={state.products}
      />
    </BaseLayoutComponent>
  );
}
