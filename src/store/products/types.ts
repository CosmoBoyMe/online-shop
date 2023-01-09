interface IProduct {
  title: string
  category: string
  brand: string
  rating: number
  price: number
  discountPercentage: number
  images: string[]
  stock: number
}

interface IProductState {
  products: IProduct[]
  currentProducts: IProduct[]
}

export type { IProduct, IProductState }
