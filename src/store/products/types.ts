type IProduct = {
  id: number
  title: string
  brand: string
  category: string
  description: string
  discountPercentage: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
}

interface IProductState {
  products: IProduct[]
  currentProducts: IProduct[]
}

export type { IProduct, IProductState }
