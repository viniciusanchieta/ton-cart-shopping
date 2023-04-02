import { RemoteLoadProducts } from './remote-load-products';

global.fetch = jest.fn();

const products = [
  {
    id: 1,
    name: 'Product 1',
    new: true,
    price: 99.99,
    image: 'https://example.com/products/1.png'
  },
  {
    id: 2,
    name: 'Product 2',
    new: false,
    price: 49.99,
    image: 'https://example.com/products/2.png'
  }
];

const url = 'https://example.com/products';

const makeSut = () => {
  const sut = new RemoteLoadProducts(url);

  return { sut };
};

describe('Remote load products', () => {
  it('should call fetch with correct url', async () => {
    const mockFetch = jest.fn().mockResolvedValueOnce({
      status: 200,
      json: () => Promise.resolve(products)
    });

    (fetch as jest.MockedFunction<typeof fetch>).mockImplementation(mockFetch);
    const { sut } = makeSut();
    await sut.load();
    expect(mockFetch).toHaveBeenCalledWith(url);
  });

  it('should throw if fetch throws', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(
      new Error()
    );
    const { sut } = makeSut();
    const promise = sut.load();
    await expect(promise).rejects.toThrow();
  });
});
