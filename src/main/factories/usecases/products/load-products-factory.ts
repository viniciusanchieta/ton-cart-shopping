import { RemoteLoadProducts } from '~/application/usecases';
import { LoadProducts } from '~/domain/usecases';

export function makeLoadProductsFactory(): LoadProducts {
  return new RemoteLoadProducts(
    'https://gist.githubusercontent.com/viniciusanchieta/4b60bcfc1d3c0b2dc2c77cf0e1d887df/raw/ffc8c04af40c93dc8d2419dc9cdebefc847bdba6/fruits.json'
  );
}
