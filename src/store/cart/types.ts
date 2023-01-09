import { IProduct } from '../products/types'

interface IProductInCart
  extends Omit<
    IProduct,
    'brand' | 'description' | 'rating' | 'thumbnail' | 'discountPercentage' | 'stock'
  > {
  quantity: number
  totalPrice: number
}

interface ICart {
  productsInCart: IProductInCart[]
  totalQuantity: number
  cartPrice: number
}

export type { ICart, IProductInCart, IProduct }
