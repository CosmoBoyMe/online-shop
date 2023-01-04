interface IProduct {
  name: string
  category: string
  brand: string
  rating: number
  price: number
  discount: number
  images: string[]
}

interface IProductState {
  products: IProduct[]
  currentProducts: IProduct[]
}

export type { IProduct, IProductState }
