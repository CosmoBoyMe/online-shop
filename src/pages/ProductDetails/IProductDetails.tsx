export interface Detail {
  type: string
  values: string[]
}

export interface MockData {
  name: string
  category: string
  brand: string
  price: number
  discount: number
  rating: number
  stockCount: number
  images: string[]
  characters: Array<Detail>
}
