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
  currentValueMin: number
  currentValueMax: number
}

interface IStock {
  min: number
  max: number
  currentValueMin: number
  currentValueMax: number
}

interface IState {
  categories: ICategory[]
  brands: IBrand[]
  price: IPrice
  stock: IStock
  searchValue: string
  status: string
}

export type { ICategory, IBrand, IPrice, IStock, IState }
