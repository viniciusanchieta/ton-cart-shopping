import type { LoadProducts } from '~/domain/usecases';

export interface ProductListProps {
  loading: boolean;
  products: LoadProducts.Response;
  error: boolean;
}
