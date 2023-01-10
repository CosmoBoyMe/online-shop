import { RootState } from '../index'

const selectProducts = (state: RootState) => state.products
const selectCurrentProducts = (state: RootState) => state.products.currentProducts

export { selectProducts, selectCurrentProducts }
