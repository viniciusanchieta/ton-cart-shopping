import { HttpStatusCodeEnum } from '~/domain/protocols';
import type { LoadProducts } from '~/domain/usecases';

export class RemoteLoadProducts implements LoadProducts {
  constructor(private readonly url: string) {}

  async load(): Promise<LoadProducts.Response> {
    try {
      const httpResponse = await fetch(this.url);
      const response = (await httpResponse.json()) as LoadProducts.ApiResponse;

      const parsedResponse = response.map(product => ({
        id: product.id,
        name: product.name,
        new: product.new,
        price: product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        image: product.image
      }));

      return parsedResponse;
    } catch (error) {
      throw new Error(HttpStatusCodeEnum[HttpStatusCodeEnum.badRequest]);
    }
  }
}
