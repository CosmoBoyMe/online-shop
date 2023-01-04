interface ICategory {
  name: string
  isChecked: boolean
  currentAmount: number
  totalAmount: number
}

interface IBrand {
  name: string
  isChecked: boolean
  currentAmount: number
  totalAmount: number
}

interface IPrice {
  min: number
  max: number
  currentValue: number | null
}

interface IStock {
  min: number
  max: number
  currentValue: number | null
}

interface IState {
  categories: ICategory[]
  brands: IBrand[]
  price: IPrice
  stock: IStock
  status: string
}

export type { ICategory, IBrand, IPrice, IStock, IState }
