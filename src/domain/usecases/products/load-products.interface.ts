export interface LoadProducts {
  load: () => Promise<LoadProducts.Response>;
}

export namespace LoadProducts {
  export type Response = {
    id: number;
    name: string;
    new: boolean;
    price: string;
    image: string;
  }[];

  export type ApiResponse = {
    id: number;
    name: string;
    new: boolean;
    price: number;
    image: string;
  }[];
}
